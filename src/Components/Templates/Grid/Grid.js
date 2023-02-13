import React, { useState } from 'react'
import "./Grid.css"
import Grid_img1 from "./GridImages/Grid_img1.png"

import { useMediaQuery } from '@chakra-ui/react'

export default function Grid({ gridData }) {
    const [count, setCount] = useState(1)
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='grid-outer'>
            <div className='grid-structure'>

                {
                    gridData.map((element, index) => {
                        return <div className='grid-element' style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse", display: isLargerThan1000 ? "flex" : "none" }} >
                            <div className='grid-left'>
                                <div style={{ width: "100%" }}> <img className="grid-img" src={element.img} /></div>
                            </div>
                            <div className='grid-right'>
                                <div className='grid-title'>
                                    <div className='grid-title-capital'>
                                        {element.firstLetter}
                                    </div>
                                    <div className='grid-title-text'>
                                        {element.name}
                                    </div>
                                </div>
                                <div className='grid-right-content'>
                                    {element.content}
                                </div>
                                <div className='grid-right-img'>
                                    <img src={element.tool} />
                                </div>
                            </div>
                        </div>
                    })
                }



                {
                    gridData.map((element, index) => {
                        return <div className='grid-element-hidden' style={{ display: isLargerThan1000 ? "none" : "flex", flexDirection: "column" }}>
                            <div className='grid-title'>
                                <div className='grid-title'>
                                    <div className='grid-title-capital'>
                                        {element.firstLetter}
                                    </div>
                                    <div className='grid-title-text'>
                                        {element.name}
                                    </div>
                                </div>
                            </div>
                            <div className='grid-left'>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}> <img className="grid-img" src={element.img} /></div>
                            </div>
                            <div className='grid-right-content'>
                                {element.content}
                            </div>
                            <div className='grid-right-img' style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                <img src={Grid_img1} />
                            </div>
                        </div>
                    })
                }



                {/* <div className='grid-element'>
                    <div className='grid-element-top1'>
                        <div className='grid-title1'>
                            <div className='grid-title-capital1'>
                                B
                            </div>
                            <div className='grid-title-text1'>
                                Benchmarking
                            </div>
                        </div>
                    </div>
                    <div className='grid-element-down'>
                        <div className='grid-left'>
                            <img className="grid-img" src={img} />
                        </div>
                        <div className='grid-right'>
                            <div className='grid-right-content'>
                                You need more than just your own data if you want to drive success in the digital sphere. Competitive benchmarking tool provide you context so you can spot high-value opportunities, monitor your progress, and dominate your market.
                            </div>
                            <div className='grid-right-img'>
                                <img src={Grid_img1} />
                            </div>
                        </div>
                    </div>

                </div> */}




            </div>

        </div>
    )
}
