import React from 'react'
import "./Careeroption.css"

import co1 from "./CareeroptionImages/1.png"
import co2 from "./CareeroptionImages/2.png"
import co3 from "./CareeroptionImages/3.png"
import co4 from "./CareeroptionImages/4.png"

export default function Careeroption() {
    return (
        <div className='co-outer'>
            <div className='co-left'>
                <div className='co-left-box'>
                    <img className="co-left-img" src={co1} />
                </div>

                <div className='co-left-box'>
                    <img className="co-left-img" src={co2} />
                </div>

                <div className='co-left-box'>
                    <img className="co-left-img" src={co3} />
                </div>

                <div className='co-left-box'>
                    <img className="co-left-img" src={co4} />
                </div>
            </div>

            <div className='co-right'>
                <div className='co-right-title'>
                    Oppourtunities
                </div>
                <div style={{ display: "flex", justifyContent: "center", width: "80%", marginTop: "5%", marginLeft: "10%" }}>
                    <ul className='co-right-ul'>
                        <li className='co-right-li'>Fresher</li>
                        <li className='co-right-li'>Experienced Professionals</li>
                        <li className='co-right-li'>Important Notice</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
