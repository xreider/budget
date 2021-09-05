import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBallance from './DisplayBallance.js'

function DisplayBallances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBallance label="Income" color="green" value="1,045.00" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBallance label="Expenses" color="red" value="623.30" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBallances
