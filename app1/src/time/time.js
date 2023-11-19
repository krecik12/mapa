
import React, { useEffect } from "react"
const Time = () => {

    let t
    let timeF = () => {
        let data = new Date();
        let tab = [data.getHours(), data.getMinutes(), data.getSeconds()]

        if (tab[0] < 10) {
            let cos = "0" + tab[0]
            tab[0] = cos
        }
        if (tab[1] < 10) {
            let cos = "0" + tab[1]
            tab[1] = cos
        }
        if (tab[2] < 10) {
            let cos = "0" + tab[2]
            tab[2] = cos
        }
        let t = ` ${tab[0]}:${tab[1]}:${tab[2]}`
        document.getElementById("time").innerHTML = t
        setTimeout(timeF, 1000)

    }

    useEffect(() => {
        timeF()
    })
    return (
        <div className="time">
            <p id="time">{t}</p>
        </div>
    )
}


export default Time

