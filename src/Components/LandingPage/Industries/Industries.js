import React from 'react'
import "./Industries.css"

import Industries_img1 from "./IndustriesImages/Industries_img1.png"
import Industries_img2 from "./IndustriesImages/Industries_img2.png"
import Industries_img3 from "./IndustriesImages/Industries_img3.png"
import Industries_img4 from "./IndustriesImages/Industries_img4.png"
import Industries_img5 from "./IndustriesImages/Industries_img5.png"
import Industries_img6 from "./IndustriesImages/Industries_img6.png"
import Industries_img7 from "./IndustriesImages/Industries_img7.png"
import Industries_img8 from "./IndustriesImages/Industries_img8.png"

export default function Industries() {
    return (
        <div className='industries-outer'>
            <div className='industries-grid'>
                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img1} />
                </div> 
                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img2} />
                </div>

                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img3} />
                </div>

                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img4} />
                </div>
            </div>

            <div className='industries-grid'>

                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img5} />
                </div>


                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img6} />
                </div>

                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img7} />
                </div>

                <div className='industries-grid-element'>
                    <img className="industries-img" src={Industries_img8} />
                </div>
            </div>
        </div >
    )
}
