import React from 'react'

const headerStyle = {
  width: '100%',
  backgroundColor: 'maroon',
  color: 'white',
  padding: '15px',
  borderRadius: '10px',
  textAlign: 'center'
}


export default function PageHeader(props) {
  const { title, subTitle } = props

  return (
    <div className="pb-2 mt-4 mb-2 border-bottom" style={headerStyle}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
    </div>
  )
}
