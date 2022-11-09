import React from 'react'

export default function CallToAction(props) {
    let {name,Link} = props
  return (
    <a href={Link}><button type="button">{name}</button></a>
)}
