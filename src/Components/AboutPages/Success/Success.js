import React from 'react'
import "./Success.css"

import Success_img1 from "./SuccessImages/Success_img1.png"
import Success_img2 from "./SuccessImages/Success_img2.png"

export default function Success() {
    return (
        <div className='success-outer'>
            <div className='success-bgimg-outer' style={{ width: "100%" }} >
                <img src={Success_img1} className="success-bgimg" style={{ width: "100%" }} />
            </div>
            <div className='success-text'>
                Looking to expand your company?
                Look to these stories
            </div>
            <div className='success-grid'>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>
                <div className='success-bgimg-outer' style={{ width: "100%" ,diplay:"flex",justifyContent:"center"}} >
                    <img src={Success_img2} className="success-bgimg" style={{ width: "100%" }} />
                </div>

            </div>
        </div>
    )
}
