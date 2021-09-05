import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './NewEntryForm'

function ModalEdit(props) {
  const {
    description,
    value,
    isExpense,
    setValue,
    setDescription,
    setIsExpense,
    isOpen,
    setIsOpen,
  } = props
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setValue={setValue}
          setDescription={setDescription}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
