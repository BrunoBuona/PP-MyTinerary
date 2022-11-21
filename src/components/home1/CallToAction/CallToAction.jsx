import React from 'react'
import { Link as NavLink } from 'react-router-dom'

export default function CallToAction(props) {
    let {name,rute} = props
  return (
    <NavLink to={rute}>
      <button type="button">{name}</button>
    </NavLink>
)}
