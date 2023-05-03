import React from 'react'
import PropTypes from 'prop-types'

export default function ListItem( props) {
  const { id, name, currHp, maxHp, tempHp, ac, strSave, dexSave, conSave, intSave, wisSave, chaSave, currLegAct, currLegRes, onDetailsRequested } = props

  const handleClick = (event) => {
    event.preventDefault()
    onDetailsRequested(id)
  }

  const [reaction, setReaction] = React.useState("")
  React.useEffect(() => {
    if (reaction) {
      setReaction("Available")
    } else {
      setReaction("Used")
    }
  }, [reaction])

  return (
    <li className="list-group" onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <p className="card-subtitle mb-2">Health and AC</p>
                <p className="card-text">
                  {`HP: ${currHp}/${maxHp}`}<br />
                  {`Temp HP: ${tempHp}`}<br />
                  {`AC: ${ac}`}
                </p>
              </div>
              <div className="col-3">
                <p className="card-subtitle mb-2">Saves</p>
                <p className="card-text">
                  {`STR: ${strSave} DEX: ${dexSave}`}<br />
                  {`CON: ${conSave} INT: ${intSave}`}<br />
                  {`WIS: ${wisSave} CHA: ${chaSave}`}
                </p>
              </div>
              <div className="col-6">
                <p className="card-subtitle mb-2">Limited Abilities</p>
                <p className="card-text">
                  {`Reaction: ${reaction}`}<br />
                  {`Legendary Actions: ${currLegAct}`}<br />
                  {`Legendary Resistances: ${currLegRes}`}<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  onDetailsRequested: PropTypes.func
}

ListItem.defaultProps = {
  onDetailsRequested: () => { }
}
