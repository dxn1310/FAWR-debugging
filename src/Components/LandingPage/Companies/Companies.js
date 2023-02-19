import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Companies.css"

import C1 from "./CompaniesImages/1.png"
import C2 from "./CompaniesImages/2.png"

import { useMediaQuery } from '@chakra-ui/react'

export default function Companies() {
    const [selected, setSelected] = useState(0)

    const Data = ["BB Celebration", "BB Creative Studio", "BB Wedding", "BB Creative Corner", "BB Corporate Connect", "BB Salon"]

    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='companies-outer'>

            <div className='companies-names'>
                {
                    Data.map((name, index) => {
                        return <div className='companies-name' onClick={(e) => setSelected(index)} style={{ color: selected === index ? "red" : "#7E7E7E", }}>
                            {/* borderBottom: selected === index ? "1px solid red" : "none" */}
                            {name}
                        </div>
                    })
                }
            </div>

            <div className='companies-content'>
                <div className='companies-left'>
                    <div className='companies-title'>
                        Celebration Schemes
                    </div>
                </div>
                <div className='companies-right'>
                    <img src={C2} />
                </div>
            </div>

            <div className='companies-bottom'>
                <div className='companies-text'>
                    <div className='companies-text-title'>
                        Creative Studio
                    </div>
                    <div className='companies-text-content'>
                        Get the best solutions out from our studio experts
                    </div>
                </div>

                <div className='companies-text'>
                    <div className='companies-text-title'>
                        Corporate Corner
                    </div>
                    <div className='companies-text-content'>
                        Connect with our expertise for a faster growth result
                    </div>
                </div>
                <div style={{ width: isLargerThan1000 ? "30%" : "100%", display: "flex", justifyContent: "center" }}>
                    <Button color="white" marginTop={isLargerThan1000 ? "2%" : "5%"}
                        backgroundColor="#BC312E">Try Now {">"}</Button>
                </div>

            </div>
        </div>
    )
}
