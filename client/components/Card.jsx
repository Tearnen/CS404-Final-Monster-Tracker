import React from 'react'
import Details from './Details.jsx'

const cardStyle = {
  border: 'solid 1px black',
  borderRadius: '10px',
  boxShadow: 'black 3px 3px 6px',
  transition: 'box-shadow 0.3s ease-in-out',
  textAlign: 'center',
  padding: '5px',
  verticalAlign: 'bottom',
  backgroundColor: '#808080',
  height: '100%'
}

export default function Card(props) {
  return (
    <div className="card" style={cardStyle}>
      <Details {...props}/>
    </div>
  )
}
