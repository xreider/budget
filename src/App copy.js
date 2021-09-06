import { Container } from 'semantic-ui-react'
import './App.css'
import DisplayBallances from './components/DisplayBallances'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBallance from './components/DisplayBallance.js'
import { useEffect, useState } from 'react'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'
import { createStore } from 'redux'

function App() {
  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId)
      if (index !== -1) {
        const newNewtries = [...entries]
        newNewtries[index].description = description
        newNewtries[index].value = value
        newNewtries[index].isExpense = isExpense
        setEntries(newNewtries)
        resetEntry()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    // eslint-disable-next-line
    entries.map((entry) => {
      if (entry.isExpense) {
        totalExpenses += parseInt(entry.value)
      } else {
        totalIncomes += parseInt(entry.value)
      }
    })

    setTotal(totalIncomes - totalExpenses)
    setIncomeTotal(totalIncomes)
    setExpenseTotal(totalExpenses)
  }, [entries])

  const store = createStore(entriesReducer)

  function entriesReducer(state = initialEntries, action) {
    console.log(action)
    let newEntries
    switch (action.type) {
      case 'ADD_ENTRY':
        newEntries = state.concat({ ...action.payload })
        return newEntries
      case 'REMOVE_ENTRY':
        newEntries = state.filter((e) => e.id !== action.payload.id)
        return newEntries
      default:
        return state
    }
  }

  const payload_add = {
    id: 5,
    description: 'Hello from Redux',
    value: 100,
    isExpense: false,
  }

  store.subscribe(() => {
    console.log('store subscribe: ', store.getState())
  })

  function addEntryRedux(payload) {
    return { type: 'ADD_ENTRY', payload }
  }
  function removeEntryRedux(id) {
    return { type: 'REMOVE_ENTRY', payload: { id } }
  }
  store.dispatch(addEntryRedux(payload_add))
  store.dispatch(addEntryRedux(payload_add))
  store.dispatch(addEntryRedux(payload_add))
  store.dispatch(removeEntryRedux(1))

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id)
    setEntries(result)
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id)
      const entry = entries[index]
      setEntryId(entry.id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
      resetEntry()
    }
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    })
    setEntries(result)
    resetEntry()
  }

  function resetEntry() {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBallance size="small" label="Your balance" value={total} />

      <DisplayBallances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />

      <ModalEdit
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></ModalEdit>
    </Container>
  )
}

export default App

var initialEntries = [
  { id: 1, description: 'Work income', value: 1000, isExpense: false },
  { id: 2, description: 'Water bill', value: 20, isExpense: true },
  { id: 3, description: 'Rent', value: 300, isExpense: true },
  { id: 4, description: 'Power bill', value: 50, isExpense: true },
]