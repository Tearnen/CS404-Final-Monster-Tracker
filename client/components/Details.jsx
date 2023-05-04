import React from 'react'

export default function Details(props) {
  const { id, name, currHp, maxHp, tempHp, ac, strSave, dexSave, conSave, intSave, wisSave, chaSave, currLegAct, currLegRes } = props

  const [reaction, setReaction] = React.useState("")
  const [recharge, setRecharge] = React.useState("")
  React.useEffect(() => {
    if (reaction) {
      setReaction("Available")
    } else {
      setReaction("Used")
    }

    if (recharge) {
      setRecharge("Available")
    } else {
      setRecharge("Used")
    }
  }, [reaction, recharge])

  if (!id) {
    return (
      null
    )
    }else {
    return(
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="container">
          <div className="row">
            <h6 className="card-subtitle mb-2">Health and AC</h6>
            <p className="card-text">
              {`HP: ${currHp}/${maxHp}`}<br />
              {`Temp HP: ${tempHp}`}<br />
              {`AC: ${ac}`}
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            <h6 className="card-subtitle mb-2">Saves</h6>
            <p className="card-text">
              {`STR: ${strSave} DEX: ${dexSave}`}<br />
              {`CON: ${conSave} INT: ${intSave}`}<br />
              {`WIS: ${wisSave} CHA: ${chaSave}`}
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            <h6 className="card-subtitle mb-2">Limited Abilities</h6>
            <p className="card-text">
              {`Reaction: ${reaction}`}<br />
              {`Legendary Actions: ${currLegAct}`}<br />
              {`Legendary Resistances: ${currLegRes}`}<br />
              {`Recharge: ${recharge}`}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
