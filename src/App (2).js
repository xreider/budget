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
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState()
  const { isOpen, id } = useSelector((state) => state.modals)

  const entries = useSelector((state) => state.entries)

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id)
    setEntry(entries[index])
  }, [isOpen, id])

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

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBallance size="small" label="Your balance" value={total} />

      <DisplayBallances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add transaction" type="h3" />
      <NewEntryForm />

      <ModalEdit isOpen={isOpen} {...entry}></ModalEdit>
    </Container>
  )
}

export default App
