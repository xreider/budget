import React from 'react'
import { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({
  description,
  value,
  isExpense,
  setValue,
  setDescription,
  setIsExpense,
}) {
  // useEffect(() => {
  //   if ((isExpense && value > 0) || (!isExpense && value < 0)) {
  //     setIsExpense(Boolean(value < 0))
  //   }
  // }, [value])

  // useEffect(() => {
  //   if ((isExpense && value > 0) || (!isExpense && value < 0)) {
  //     setValue((value) => Number(value) * -1)
  //   }
  // }, [isExpense])

  return (
    <Fragment>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          label="Is expense"
          toggle
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </Fragment>
  )
}

export default EntryForm
