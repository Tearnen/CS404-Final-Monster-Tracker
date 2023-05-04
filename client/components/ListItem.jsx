import React from 'react'
import PropTypes from 'prop-types'

const cardStyle = {
  border: 'solid 1px black',
  borderRadius: '10px',
  boxShadow: 'black 3px 3px 6px',
  transition: 'box-shadow 0.3s ease-in-out',
  textAlign: 'center',
  padding: '5px',
  verticalAlign: 'bottom',
  cursor: 'pointer',
  backgroundColor: rgb(128, 128, 128, 0,5)
}

export default function ListItem( props) {
  const { id, name, currHp, maxHp, tempHp, ac, strSave, dexSave, conSave, intSave, wisSave, chaSave, currLegAct, currLegRes, onDetailsRequested } = props

  const handleClick = (event) => {
    event.preventDefault()
    onDetailsRequested(id)
  }

  const [react, setReact] = React.useState("")
  React.useEffect(() => {
    if (react) {
      setReact("Available")
    } else {
      setReact("Used")
    }
  }, [react])

  return (
    <li className="list-group mb-2" onClick={handleClick}>
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h6 className="card-subtitle mb-2">Health and AC</h6>
                <p className="card-text">
                  {`HP: ${currHp}/${maxHp}`}<br />
                  {`Temp HP: ${tempHp}`}<br />
                  {`AC: ${ac}`}
                </p>
              </div>
              <div className="col-4">
                <h6 className="card-subtitle mb-2">Saves</h6>
                <p className="card-text">
                  {`STR: ${strSave} DEX: ${dexSave}`}<br />
                  {`CON: ${conSave} INT: ${intSave}`}<br />
                  {`WIS: ${wisSave} CHA: ${chaSave}`}
                </p>
              </div>
              <div className="col-4">
                <h6 className="card-subtitle mb-2">Limited Abilities</h6>
                <p className="card-text">
                  {`React: ${react}`}<br />
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
