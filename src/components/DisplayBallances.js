import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBallance from './DisplayBallance.js'

function DisplayBallances({ incomeTotal, expenseTotal }) {
  // useEffect(() => {}, [incomeTotal, expenseTotal])
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBallance label="Income" color="green" value={incomeTotal} />
          </Grid.Column>
          <Grid.Column>
            <DisplayBallance
              label="Expenses"
              color="red"
              value={expenseTotal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBallances
