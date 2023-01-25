import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Solutionoption.css"

import so1 from "./SolutionoptionImages/1.png"
import so2 from "./SolutionoptionImages/2.png"
import so3 from "./SolutionoptionImages/3.png"

import so4 from "./SolutionoptionImages/4.png"
import so5 from "./SolutionoptionImages/5.png"

import so6 from "./SolutionoptionImages/6.png"
import so7 from "./SolutionoptionImages/7.png"
import so8 from "./SolutionoptionImages/8.png"
import so9 from "./SolutionoptionImages/9.png"
import so10 from "./SolutionoptionImages/10.png"
import so11 from "./SolutionoptionImages/11.png"
import so12 from "./SolutionoptionImages/12.png"
import so13 from "./SolutionoptionImages/13.png"
import so14 from "./SolutionoptionImages/14.png"
import so15 from "./SolutionoptionImages/15.png"
import so16 from "./SolutionoptionImages/16.png"
import so17 from "./SolutionoptionImages/17.png"

import { useMediaQuery } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'

export default function Solutionoption() {
    const [option, setOption] = useState(0)

    const [isLargerThan850] = useMediaQuery('(min-width: 850px)')
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='so-outer'>
            <div className='so-left'>
                <div className='so-option' onClick={(e) => { setOption(0) }} style={{ backgroundColor: option === 0 ? "#BC312E" : "#211F22" }}>
                    Services
                </div>

                <div className='so-option' onClick={(e) => { setOption(1) }} style={{ backgroundColor: option === 1 ? "#BC312E" : "#211F22" }}>
                    Products
                </div>

                <div className='so-option' onClick={(e) => { setOption(2) }} style={{ backgroundColor: option === 2 ? "#BC312E" : "#211F22" }}>
                    Industry
                </div>


                {/* style={{ display: "grid", gridTemplateColumns: isLargerThan850 ? option === 2 ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr" : "1fr", rowGap: option === 2 ? "10%" : "1%" }} */}
            </div>
            <div className='so-right'>
                {
                    option === 0 ? <div className='so-right1'>
                        <div className="so-right-box">
                            <div>
                                <img src={so1} />
                            </div>
                            <div className='so-right-box-title'>
                                Development Services
                            </div>

                            <div className='so-right-box-text'>
                                Web development
                            </div>
                            <Link to="/Blockchain Development Services">
                                <div className='so-right-box-text'>
                                    Blockchain development
                                </div>
                            </Link>
                            <Link to="/DevOps">
                                <div className='so-right-box-text'>
                                    DevOps services
                                </div>
                            </Link>
                            <div className='so-right-box-text'>
                                App development
                            </div>
                            <div className='so-right-box-text'>
                                Cloud storage & management
                            </div>
                        </div>


                        <div className="so-right-box">
                            <div>
                                <img src={so2} />
                            </div>
                            <div className='so-right-box-title'>
                                Design Services
                            </div>

                            <div className='so-right-box-text'>
                                UX/UI Design
                            </div>
                            <div className='so-right-box-text'>
                                Graphic Design
                            </div>
                            <Link to='/Video Services'>
                                <div className='so-right-box-text'>
                                    Video editing
                                </div>
                            </Link>
                            <div className='so-right-box-text'>
                                Animations
                            </div>
                            <div className='so-right-box-text'>
                                Social media design
                            </div>
                        </div>

                        <div className="so-right-box">
                            <div>
                                <img src={so3} />
                            </div>
                            <div className='so-right-box-title'>
                                Consultancy  Services
                            </div>

                            <div className='so-right-box-text'>
                                Management consultant
                            </div>
                            <div className='so-right-box-text'>
                                Operations consultant
                            </div>
                            <div className='so-right-box-text'>
                                Financial advisory
                            </div>
                            <div className='so-right-box-text'>
                                Legal Consultant
                            </div>
                            <div className='so-right-box-text'>
                                Strategy Consultant
                            </div>
                            <div className='so-right-box-text'>
                                Distribution Strategy
                            </div>
                            <div className='so-right-box-text'>
                                Reputation Consultant
                            </div>
                        </div>
                    </div> :
                        option === 1 ? <div className='so-right2'>
                            <div className="so-right-box">
                                <div>
                                    <img src={so4} />
                                </div>
                                <div className='so-right-box-title'>
                                    Digital Marketing
                                </div>

                                <div className='so-right-box-text'>
                                    Marketing automation
                                </div>
                                <div className='so-right-box-text'>
                                    Email marketing
                                </div>
                                <div className='so-right-box-text'>
                                    Search engine marketing
                                </div>
                                <div className='so-right-box-text'>
                                    Social media marketing
                                </div>
                                <div className='so-right-box-text'>
                                    Mobile marketing
                                </div>
                            </div>


                            <div className="so-right-box">
                                <div>
                                    <img src={so5} />
                                </div>
                                <div className='so-right-box-title'>
                                    Analytics and Insights
                                </div>

                                <Link to="/Research Intelligence Services">
                                    <div className='so-right-box-text'>
                                        Research Intelligence
                                    </div>
                                </Link>
                                <div className='so-right-box-text'>
                                    Predictive Analytics
                                </div>
                                <div className='so-right-box-text'>
                                    Business Intelligence
                                </div>
                                <div className='so-right-box-text'>
                                    Speech & text Analytics
                                </div>
                                <div className='so-right-box-text'>
                                    Customer Segmentation
                                </div>
                            </div>
                        </div> : <div className='so-right3'>
                            <div className="so-right-box1">
                                <div>
                                    <img src={so6} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Technology
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so7} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Automotive
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so8} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Education
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so9} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Insurance
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so10} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Banking and
                                    Finance
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so11} />
                                </div>
                                <div className='so-right1-box-title'>
                                    E-commerce
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so12} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Travel, Transport
                                    & Logistics
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so13} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Telecom
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so14} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Energy and
                                    Utilities
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so15} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Healthcare
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so16} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Media and
                                    Entertainment
                                </div>
                            </div>

                            <div className="so-right-box1">
                                <div>
                                    <img src={so17} />
                                </div>
                                <div className='so-right1-box-title'>
                                    Airline
                                </div>
                            </div>
                        </div>
                }


            </div>

        </div>
    )
}
