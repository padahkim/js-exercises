import React from 'react'

export default function Navbar(props) {
  
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-leaf"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{props.totalCount}</span>
    </nav>
  )
}
