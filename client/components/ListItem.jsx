import React from 'react'

export default function ListItem({ monster }) {
  const [reaction, setReaction] = React.useState("")
  React.useEffect(() => {
    if (monster.reaction) {
      setReaction("Available")
    } else {
      setReaction("Used")
    }
  }, [monster.reaction])

  return (
    <li className="list-group">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{monster.name}</h5>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <p className="card-subtitle mb-2">Health and AC</p>
                <p className="card-text">
                  {`HP: ${monster.currHp}/${monster.maxHp}`}<br />
                  {`Temp HP: ${monster.tempHp}`}<br />
                  {`AC: ${monster.ac}`}
                </p>
              </div>
              <div className="col-3">
                <p className="card-subtitle mb-2">Saves</p>
                <p className="card-text">
                  {`STR: ${monster.strSave} DEX: ${monster.dexSave}`}<br />
                  {`CON: ${monster.conSave} INT: ${monster.intSave}`}<br />
                  {`WIS: ${monster.wisSave} CHA: ${monster.chaSave}`}
                </p>
              </div>
              <div className="col-6">
                <p className="card-subtitle mb-2">Limited Abilities</p>
                <p className="card-text">
                  {`Reaction: ${reaction}`}<br />
                  {`Legendary Actions: ${monster.currLegAct}`}<br />
                  {`Legendary Resistances: ${monster.currLegRes}`}<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

