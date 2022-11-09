import React from 'react'
import CallToAction from './CallToAction/CallToAction'
import { Link as NavLink } from "react-router-dom";

export default function Home1() {
  return (
    <main className="main">
        <div className="contenedor-principal">
            <h1>My-Itinerary</h1>
            <h2>¡Amazing Travels at Low Cost!</h2>
            <div className="cta-container">
            <NavLink className="cta-container" to="/cities">
              <CallToAction name="Cities" />
            </NavLink>
            <NavLink className="cta-container" to="/hotels">
              <CallToAction name="Hotels" />
            </NavLink>
                
            </div>
        </div>
    </main>
  )
}
export {Home1}