import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { removeEntryRedux } from '../actions/entries.actions'
import { openEditModal } from '../actions/modals.actions'

function EntryLine(props) {
  const {
    entry: { id, description, value, isExpense = false },
  } = props
  const dispatch = useDispatch()
  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value} $
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                onClick={() => dispatch(openEditModal(id))}
                bordered
              />
              <Icon
                name="trash"
                bordered
                onClick={() => {
                  dispatch(removeEntryRedux(id))
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default EntryLine
