import { Container } from 'semantic-ui-react'
import './App.css'
import DisplayBallances from './components/DisplayBallances'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBallance from './components/DisplayBallance.js'
import { useEffect, useState } from 'react'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'
import { useSelector } from 'react-redux'

function App() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  const entries = useSelector((state) => state.entries)

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId)
      if (index !== -1) {
        const newNewtries = [...entries]
        newNewtries[index].description = description
        newNewtries[index].value = value
        newNewtries[index].isExpense = isExpense
        // setEntries(newNewtries)
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

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id)
    // setEntries(result)
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
    // setEntries(result)
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
