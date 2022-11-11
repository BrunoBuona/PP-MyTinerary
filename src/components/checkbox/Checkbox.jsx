import React from "react";
import { cities } from "../../data/cities";

function Checkbox() {
    function capturacheck(e) {
        let filtroDeCheck = cities.filter(evento => evento.continent.includes(e.target.value))
        filtroDeCheck.concat(filtroDeCheck)
        console.log(filtroDeCheck);
    }
    let continentes = Array.from(new Set(cities.map((e) => e.continent)));
    return continentes.map((e) => {
        return (
            <label>
                {e}
                <input onChange={e=> capturacheck(e)} type="checkbox" value={e} />
            </label>
        );
    });
}
export {Checkbox}
