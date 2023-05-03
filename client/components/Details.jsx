import React from 'react'

export default function Details(props) {

  const [reaction, setReaction] = React.useState("")
  React.useEffect(() => {
    if (props.reaction) {
      setReaction("Available")
    } else {
      setReaction("Used")
    }
  }, [reaction])

  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="container">
          <div className="row">
            <p className="card-subtitle mb-2">Health and AC</p>
            <p className="card-text">
              {`HP: ${props.currHp}/${props.maxHp}`}<br />
              {`Temp HP: ${props.tempHp}`}<br />
              {`AC: ${props.ac}`}
            </p>
          </div>
          <div className="row">
            <p className="card-subtitle mb-2">Saves</p>
            <p className="card-text">
              {`STR: ${props.strSave} DEX: ${props.dexSave}`}<br />
              {`CON: ${props.conSave} INT: ${props.intSave}`}<br />
              {`WIS: ${props.wisSave} CHA: ${props.chaSave}`}
            </p>
          </div>
          <div className="row">
            <p className="card-subtitle mb-2">Limited Abilities</p>
            <p className="card-text">
              {`Reaction: ${props.reaction}`}<br />
              {`Legendary Actions: ${props.currLegAct}`}<br />
              {`Legendary Resistances: ${props.currLegRes}`}<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
