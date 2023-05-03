import React from 'react'
import List from './List.jsx'
import ListItem from './ListItem.jsx'
import monsters from '../monsters.json'

export default function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-8">
          <List>
            {monsters.map(monster => (
              <ListItem key={monster.id} monster={monster} />
            ))}
          </List>
        </div>
        <div class="col-4">

        </div>
      </div>
    </div>
  )
}
