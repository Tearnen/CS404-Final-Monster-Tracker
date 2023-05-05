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
  backgroundColor: 'rgb(256, 256, 256, 0.25)',
  fontWeight: 'bold',
  fontFamily: '"Times New Roman", Times, serif'
}

const headerStyle = {
  color: 'maroon',
  fontWeight: 'bold',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '1.5rem',
  display: 'inline-block'
}

const subTitleStyle = {
  color: 'maroon',
  fontWeight: 'bold',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '1.25rem',
  display: 'inline-block'
}

export default function ListItem( props) {
  const { id, name, currHp, maxHp, tempHp, ac, strSave, dexSave, conSave, intSave, wisSave, chaSave, currLegAct, currLegRes, onDetailsRequested, reaction } = props

  const handleClick = (event) => {
    event.preventDefault()
    onDetailsRequested(id)
  }

  const [react, setReact] = React.useState("")
  React.useEffect(() => {
    if (reaction) {
      setReact("Available")
    } else {
      setReact("Used")
    }
  }, [reaction])

  return (
    <li className="list-group mb-2" onClick={handleClick}>
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h4 className="card-title" style={headerStyle}>{name}</h4>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h5 className="card-subtitle mb-2" style={subTitleStyle}>Health and AC</h5>
                <p className="card-text">
                  {`HP: ${currHp}/${maxHp}`}<br />
                  {`Temp HP: ${tempHp}`}<br />
                  {`AC: ${ac}`}
                </p>
              </div>
              <div className="col-4">
                <h5 className="card-subtitle mb-2" style={subTitleStyle}>Saves</h5>
                <p className="card-text">
                  {`STR: ${strSave} DEX: ${dexSave}`}<br />
                  {`CON: ${conSave} INT: ${intSave}`}<br />
                  {`WIS: ${wisSave} CHA: ${chaSave}`}
                </p>
              </div>
              <div className="col-4">
                <h5 className="card-subtitle mb-2" style={subTitleStyle}>Limited Abilities</h5>
                <p className="card-text">
                  {`Reaction: ${react}`}<br />
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
