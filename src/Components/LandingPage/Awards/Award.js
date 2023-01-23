import React from 'react'
import "./Award.css"

import Award_img1 from "./AwardImages/Award_img1.png"

export default function Award() {
    return (
        <div className='award-outer'>
            <div className='award-grid'>
                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>

                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>

                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>

                <div className='award-grid-element'>
                    <img className="award-img" src={Award_img1} />
                </div>
            </div>
        </div>
    )
}
