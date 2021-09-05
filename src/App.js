import { Container, Grid, Icon, Segment } from 'semantic-ui-react'
import './App.css'
import DisplayBallances from './components/DisplayBallances'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBallance from './components/DisplayBallance.js'
import EntryLine from './components/EntryLine'

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBallance size="small" label="Your balance" value="2,550.53" />

      <DisplayBallances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="some exp 1" value={10} isExpense />
      <EntryLine description="some income" value={100} />
      <EntryLine description="some exp 2" value={20} isExpense />

      <MainHeader title="Add transaction" type="h3" />
      <NewEntryForm />
    </Container>
  )
}

export default App
