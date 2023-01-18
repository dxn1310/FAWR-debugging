import React from 'react'
import "./Other.css"

import o1 from "./OtherImages/1.png"
import o2 from "./OtherImages/2.png"
import o3 from "./OtherImages/3.png"
import o4 from "./OtherImages/4.png"
import o5 from "./OtherImages/5.png"

import o6 from "./OtherImages/6.png"
import o7 from "./OtherImages/7.png"
import o8 from "./OtherImages/8.png"

export default function Other() {
    return (
        <div className='other-outer'>
            <div
                className='other-grid'>
                <div className='other-grid-element'>
                    <img src={o1} />
                </div>

                <div className='other-grid-element'>
                    <img src={o3} />
                </div>


            </div>
            <div className='other-grid'>
                <div className='other-grid-element'>
                    <img src={o5} />
                </div>

                <div className='other-grid-element'>
                    <img src={o7} />
                </div>
            </div>
        </div>
    )
}
