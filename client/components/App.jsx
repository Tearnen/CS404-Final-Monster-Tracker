/*
  @author Tiernan "Tearnen" Meyer
*/

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

  const [update, setUpdate] = React.useState(false)

  const reactUpdate = () => {
    currentMonster.reaction = !currentMonster.reaction
    setUpdate(!update)
  }

  const legActUpdate = (checked) => {
    if (checked === true) {
      currentMonster.currLegAct += 1
    } else if (checked === false) {
      currentMonster.currLegAct -= 1
    }
    setUpdate(!update)
  }

  const legResUpdate = (checked) => {
    if (checked === true) {
      currentMonster.currLegRes += 1
    } else if (checked === false) {
      currentMonster.currLegRes -= 1
    }
    setUpdate(!update)
  }

  const rechargeUpdate = () => {
    currentMonster.recharge = !currentMonster.recharge
    setUpdate(!update)
  }

  return (
    <div className="container">
      <PageHeader title="Monster Tracker" subTitle="Keep track of your monsters!" />
      <div className="row" style={ {height: '100%'} }>
        <div className="col-8">
          <List onDetailsRequested={detailsRequested} refresh={update} />
        </div>
        <div className="col-4">
            <Card {...currentMonster}
              onReactUpdate={reactUpdate}
              onLegActUpdate={legActUpdate}
              onLegResUpdate={legResUpdate}
              onRechargeUpdate={rechargeUpdate}
              refresh={update}
            />
        </div>
      </div>
    </div>
  )
}
