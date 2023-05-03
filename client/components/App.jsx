import React from 'react'
import List from './List.jsx'
import Details from './Details.jsx'
import monsters from '../monsters.json'

export default function App() {
  const [currentMonsterId, setCurrentMonsterId] = React.useState('')
  const detailsRequested = (key) => {
    setCurrentMonsterId(key)
  }

  const [currentMonster, setCurrentMonster] = React.useState(null)

  React.useEffect(() => {
    if (currentMonsterId) {
      const monster = monsters.find(monster => monster.id === currentMonsterId)
      setCurrentMonster(monster)
    }
  }, [currentMonsterId])

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <List onDetailsRequested={detailsRequested} />
        </div>
        <div className="col-4">
            <Details {...currentMonster}/>
        </div>
      </div>
    </div>
  )
}
