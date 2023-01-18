import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Companies.css"

import c1 from "./CompaniesImages/1.png"

export default function Companies() {
    const [selected, setSelected] = useState(0)

    const Data = ["BB Celebration", "BB Creative Studio", "BB Wedding", "BB Creative Corner", "BB Corporate Connect", "BB Salon"]

    return (
        <div className='companies-outer'>

            <div className='companies-names'>
                {
                    Data.map((name, index) => {
                        return <div className='companies-name' onClick={(e) => setSelected(index)} style={{ color: selected === index ? "red" : "#7E7E7E", borderBottom: selected === index ? "1px solid red" : "none" }}>
                            {name}
                        </div>
                    })
                }
            </div>

            <div className='companies-content'>
                <div className='companies-left'>
                    <div className='companies-title'>
                        Lorem Ipsum dolor sit
                    </div>
                </div>
                <div className='companies-right'>
                    <img src={c1} />
                </div>
            </div>

            <div className='companies-bottom'>
                <div className='companies-text'>
                    <div className='companies-text-title'>
                        Lorem Ipsum
                    </div>
                    <div className='companies-text-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer volutpat
                    </div>
                </div>

                <div className='companies-text'>
                    <div className='companies-text-title'>
                        Lorem Ipsum
                    </div>
                    <div className='companies-text-content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor integer volutpat
                    </div>
                </div>

                <Button color="white"
                backgroundColor="#BC312E">Try Now ></Button>
            </div>
        </div>
    )
}
