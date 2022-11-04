import React from 'react'
import CallToAction from '../../components/home1/CallToAction/CallToAction'

export default function Main() {
  return (
    <main className="main">
        <div className="contenedor-principal">
            <h1>My-Itinerary</h1>
            <h2>¡Amazing Travels at Low Cost!</h2>
            <div className="cta-container">
                <CallToAction name="Cities" Link="/"/>
                <CallToAction name="Hotels" Link="/"/>
            </div>
        </div>
    </main>
  )
}
export {Main}