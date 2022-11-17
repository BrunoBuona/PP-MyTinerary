import React from "react";
import { cities } from "../../data/cities";

function Checkbox() {
    let filtroDeCheck = []
    function capturacheck(e) {
        filtroDeCheck = filtroDeCheck.concat(e.target.value)

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
