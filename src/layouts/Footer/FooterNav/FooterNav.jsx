import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterNav(props) {
    let {nombre, Link} = props
  return (
    <NavLink to={Link}>{nombre}</NavLink>
  )

}
