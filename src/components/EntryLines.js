import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines(props) {
  const { entries, deleteEntry, editEntry } = props
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          entry={{ ...entry, deleteEntry, editEntry }}
        />
      ))}
    </Container>
  )
}

export default EntryLines
