import React from 'react'
import ListItem from './ListItem.jsx'
import monsters from '../monsters.json'

export default function List(props) {
    const listItems = monsters.map(monster => (
    <ListItem key={monster.id} {...monster} {...props} />
  ))

  return (
    <ul className="list-group">
      {listItems}
    </ul>
  )
}
