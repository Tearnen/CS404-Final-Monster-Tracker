import React from 'react'
import PropTypes from 'prop-types'

const cboxStyle = {
  width: '20px',
  height: '20px',
  margin: '0px 5px 0px 5px',
  borderColor: 'red',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '5px',
  backgroundColor: 'white',
  verticalAlign: 'middle',
}

const headerStyle = {
  color: 'maroon',
  fontWeight: 'bold',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '2.25rem',
  display: 'inline-block',
  borderBottom: '2px solid black'
}

const subTitleStyle = {
  color: 'maroon',
  fontWeight: 'bold',
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: '1.75rem',
  display: 'inline-block'
}

export default function Details(props) {
  const { id, name, currHp, maxHp, tempHp, ac, strSave, dexSave, conSave, intSave, wisSave, chaSave, currLegAct, maxLegAct, currLegRes, maxLegRes, hasRecharge, onReactUpdate, onRechargeUpdate, onLegActUpdate, onLegResUpdate, reaction, recharge, refresh } = props

  const handleReact = (event) => {
    event.preventDefault()
    onReactUpdate()
  }

 const handleLegAct = (checked) => (event) => {
    event.preventDefault()
    onLegActUpdate(checked)
  }

  const [legAct, setLegAct] = React.useState([])
  React.useEffect(() => {
    var legAct = []
    if (maxLegAct != 0) {
      legAct.push('Legendary Actions: ')

      for (var i = 0; i < maxLegAct; i++) {
        if (i < currLegAct) {
          legAct.push(<input style={cboxStyle} type="checkbox" key={'cbox' + i} checked={false} onChange={handleLegAct(false)} />)
        } else {
          legAct.push(<input style={cboxStyle} type="checkbox" key={'cbox' + i} checked={true} onChange={handleLegAct(true)} />)
        }
      }
      legAct.push(<br key={'br'} />)
    }
    setLegAct(legAct)
}, [maxLegAct, currLegAct, refresh])

const handleLegRes = (checked) => (event) => {
  event.preventDefault()
  onLegResUpdate(checked)
}

const [legRes, setLegRes] = React.useState([])
React.useEffect(() => {
  var legRes = []
  if (maxLegRes != 0) {
    legRes.push('Legendary Actions: ')

    for (var i = 0; i < maxLegRes; i++) {
      if (i < currLegRes) {
        legRes.push(<input style={cboxStyle} type="checkbox" key={'cbox' + i} checked={false} onChange={handleLegRes(false)} />)
      } else {
        legRes.push(<input style={cboxStyle} type="checkbox" key={'cbox' + i} checked={true} onChange={handleLegRes(true)} />)
      }
    }
    legRes.push(<br key={'br'} />)
  }
  setLegRes(legRes)
}, [maxLegRes, currLegRes, refresh])

const handleRecharge = (event) => {
  event.preventDefault()
  onRechargeUpdate()
}

const [reacharge, setRecharge] = React.useState([])
React.useEffect(() => {
  var rech = []
  if (hasRecharge) {
    rech.push('Recharge: ')
    rech.push(<input style={cboxStyle} type="checkbox" key={'cbox'} checked={!recharge} onChange={handleRecharge} />)
    rech.push(<br key={'br'} />)
  }
  setRecharge(rech)
}, [hasRecharge, recharge, refresh])

  if (!id) {
    return (
      null
    )
    }else {
    return(
      <div className="card-body" style={{width: '100%'}}>
        <h4 className="card-title" style={headerStyle}>{name}</h4> <br />
        <div className="container">
          <div className="row">
            <h5 className="card-subtitle mb-2" style={subTitleStyle}>Health and AC</h5>
            <p className="card-text">
              {`HP: ${currHp}/${maxHp}`}<br />
              {`Temp HP: ${tempHp}`}<br />
              {`AC: ${ac}`}
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            <h5 className="card-subtitle mb-2" style={subTitleStyle}>Saves</h5>
            <p className="card-text">
              {`STR: ${strSave} DEX: ${dexSave}`}<br />
              {`CON: ${conSave} INT: ${intSave}`}<br />
              {`WIS: ${wisSave} CHA: ${chaSave}`}
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            <h5 className="card-subtitle mb-2" style={subTitleStyle}>Limited Abilities</h5>
            <p className="card-text">
              Reaction <input style={cboxStyle} type="checkbox" checked={!reaction} onChange={handleReact} /> <br />
              {legAct}
              {legRes}
              {reacharge}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  onReactUpdate: PropTypes.func,
  onRechargeUpdate: PropTypes.func,
  onLegActUpdate: PropTypes.func,
  onLegResUpdate: PropTypes.func
}

Details.defaultProps = {
  onReactUpdate: () => {},
  onRechargeUpdate: () => {},
  onLegActUpdate: () => {},
  onLegResUpdate: () => {}
}
