import React from 'react'

export default function FooterNav(props) {
    let {nombre, Link} = props
  return (
    <a href={Link}>{nombre}</a>
  )

}
