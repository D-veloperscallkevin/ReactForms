import React from 'react'
import './Header.css'

export default function Header({titulo}) {
  return (
    <div className='titulo'>
      <h2>{titulo}</h2>
    </div>
  )
}