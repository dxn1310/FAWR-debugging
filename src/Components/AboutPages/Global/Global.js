import React from 'react'
import "./Global.css"

import G1 from "./GlobalImages/G1.png"
import G2 from "./GlobalImages/G2.png"

export default function Global() {
    return (
        <div className='global-outer'>
            <div style={{ width: "100%" }}>
                <img src={G1} style={{ width: "100%" }} />
            </div>
            <div className='global-text'>
                BDM is aware that working with some of the most ambitious organisations in the world allows us to have an even greater influence on issues like economic growth and poverty reduction. With several like-minded organisations and leaders that are ready to promote global change and produce real outcomes, we have long-lasting ties and affiliations.
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "right" }}>
                <img src={G2} style={{ width: "80%", marginRight: "10%" }} />
            </div>
        </div>
    )
}
