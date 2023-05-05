/*
  @author Tiernan "Tearnen" Meyer
*/

import React from 'react'
import ListItem from './ListItem.jsx'
import monsters from '../monsters.json'

export default function List(props) {
  const { refresh } = props

    const listItems = monsters.map(monster => (
    <ListItem key={monster.id} {...monster} {...props} />
  ), [refresh])

  return (
    <ul className="list-group">
      {listItems}
    </ul>
  )
}
