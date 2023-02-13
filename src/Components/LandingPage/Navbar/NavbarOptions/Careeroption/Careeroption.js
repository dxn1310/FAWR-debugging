import React from 'react'
import "./Careeroption.css"

import co1 from "./CareeroptionImages/1.png"
import co2 from "./CareeroptionImages/2.png"
import co3 from "./CareeroptionImages/3.png"
import co4 from "./CareeroptionImages/4.png"

import { NavLink as Link } from 'react-router-dom'

export default function Careeroption({ onClick }) {
    return (
        <div className='co-outer'>
            <div className='co-left'>
                <div className='co-left-box' onClick={onClick}>
                    <Link to="/Life@BDM">
                        <img className="co-left-img" src={co1} />
                    </Link>
                </div>

                <div className='co-left-box' onClick={onClick}>
                    <Link to="/Student / Intern Program">
                        <img className="co-left-img" src={co2} />
                    </Link>
                </div>

                <div className='co-left-box' onClick={onClick}>
                    <Link to="/Learning & Development">
                        <img className="co-left-img" src={co3} />
                    </Link>
                </div>

                <div className='co-left-box' onClick={onClick}>
                    <Link to="/Diversity & Inclusion">
                        <img className="co-left-img" src={co4} />
                    </Link>
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
        </div >
    )
}
