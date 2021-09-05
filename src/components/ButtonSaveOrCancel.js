import React from 'react'
import { Button } from 'semantic-ui-react'
function ButtonSaveOrCancel(props) {
  const { addEntry } = props
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button
        primary
        onClick={() => {
          addEntry()
        }}
      >
        Ok
      </Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCancel
