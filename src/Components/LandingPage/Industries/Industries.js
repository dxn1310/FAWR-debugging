import React from 'react'
import "./Industries.css"

import Industries_img1 from "./IndustriesImages/Industries_img1.png"
import Industries_img2 from "./IndustriesImages/Industries_img2.png"
import Industries_img3 from "./IndustriesImages/Industries_img3.png"
import Industries_img4 from "./IndustriesImages/Industries_img4.png"
import Industries_img5 from "./IndustriesImages/Industries_img5.png"
import Industries_img6 from "./IndustriesImages/Industries_img6.png"
import Industries_img7 from "./IndustriesImages/Industries_img11.png"
import Industries_img8 from "./IndustriesImages/Industries_img8.png"

import { NavLink as Link } from 'react-router-dom'

export default function Industries() {
    return (
        <div className='industries-outer'>
            <div className='industries-grid'>
                <div className='industries-grid-element'>
                    <Link to="/Banking & Finance">
                        <img className="industries-img" src={Industries_img1} />
                    </Link>
                </div>
                <div className='industries-grid-element'>
                    <Link to="/Education">
                        <img className="industries-img" src={Industries_img2} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/E-Commerce">
                        <img className="industries-img" src={Industries_img3} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/Insurance">
                        <img className="industries-img" src={Industries_img4} />
                    </Link>
                </div>
            </div>

            <div className='industries-grid'>

                <div className='industries-grid-element'>
                    <Link to="/Technology">
                        <img className="industries-img" src={Industries_img5} />
                    </Link>
                </div>


                <div className='industries-grid-element'>
                    <Link to="/Healthcare">
                        <img className="industries-img" src={Industries_img6} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/Energy & Utilities">
                        <img className="industries-img" src={Industries_img7} />
                    </Link>
                </div>

                <div className='industries-grid-element'>
                    <Link to="/Travel,Transport & Logistics">
                        <img className="industries-img" src={Industries_img8} />
                    </Link>
                </div>
            </div>
        </div >
    )
}
