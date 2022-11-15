import React from 'react'

export default function InputSearch(props) {
    let {setchange} = props
    
  return (
    <input type="text" onChange={setchange}/>
  )
}