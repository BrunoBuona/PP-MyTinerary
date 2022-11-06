import React from 'react'
import CallToAction from './CallToAction/CallToAction'

export default function Home1() {
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
export {Home1}