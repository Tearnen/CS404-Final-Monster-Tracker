import React from 'react'

const headerStyle = {
  width: '100%'
}


export default function PageHeader(props) {
  const { title, subTitle } = props

  return (
    <div className="pb-2 mt-4 mb-2 border-bottom" style={headerStyle}>
      <h1>{title}</h1>
      {subTitle}
    </div>
  )
}
