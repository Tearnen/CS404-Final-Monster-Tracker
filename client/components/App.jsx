import React from 'react'
import List from './List.jsx'
import Card from './Card.jsx'
import PageHeader from './PageHeader.jsx'
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
      <PageHeader title="Monster Tracker" subTitle="Keep track of your monsters!" />
      <div className="row" style={ {height: '100%'} }>
        <div className="col-8">
          <List onDetailsRequested={detailsRequested} />
        </div>
        <div className="col-4">
            <Card {...currentMonster}/>
        </div>
      </div>
    </div>
  )
}
