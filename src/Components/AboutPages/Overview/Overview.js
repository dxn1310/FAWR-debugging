import React from 'react'
import "./Overview.css"

import O1 from "./OverviewImages/O1.png"
import O2 from "./OverviewImages/O2.png"
import O3 from "./OverviewImages/O3.png"

import Iservices from '../../Templates/IndustriesTemplates/IndustryServices/Iservices'

import { Button } from '@chakra-ui/react'

export default function Overview() {
    return (
        <div className='ov-outer'>
            <div style={{ width: "100%" }}>
                <img src={O1} style={{ width: "100%" }} />
            </div>
            <div className='ov-inner'>
                <div className='ov-grid'>
                    <div className='ov-grid-left'>
                        <div className='ov-grid-title'>
                            Greater futures are created via innovation and collective wisdom
                        </div>
                        <div className='ov-grid-content'>
                            BigDigitalMedia is a provider of IT services, business solutions, and consultancy that has partnered with many of the biggest corporations in the world. We think that innovation and general knowledge can change everyone's futures for the better.
                        </div>
                    </div>
                    <div className='ov-grid-right'>
                        <img src={O2} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>

            <div className='ov-title'>
                <u>Building on belief</u>
            </div>
            <Iservices />

            <Button marginTop="10%" color="white" backgroundColor="#BC312E" borderRadius="0%">
                Download Corporate Profile
            </Button>

            <div className='ov-title'>
                <u>Contributing to Innovation</u>
            </div>

            <div className='ov-grid2'>
                <div className='ov-element'>
                    <div className='ov-element-left'>
                        <img src={O3} />
                    </div>
                    <div className='ov-element-right'>
                        <div className='ov-element-text'>
                            Delivering higher-quality products more effectively and affordably
                        </div>
                    </div>
                </div>

                <div className='ov-element'>
                    <div className='ov-element-left'>
                        <img src={O3} />
                    </div>
                    <div className='ov-element-right'>
                        <div className='ov-element-text'>
                            A consistent emphasis on meeting client demands is ensured through testing novel ways to services & goods.
                        </div>
                    </div>
                </div>

                <div className='ov-element'>
                    <div className='ov-element-left'>
                        <img src={O3} />
                    </div>
                    <div className='ov-element-right'>
                        <div className='ov-element-text'>
                            Employees with greater degrees of creativity and lateral thinking prefer an innovative working style.
                        </div>
                    </div>
                </div>

                <div className='ov-element'>
                    <div className='ov-element-left'>
                        <img src={O3} />
                    </div>
                    <div className='ov-element-right'>
                        <div className='ov-element-text'>
                            Processes of innovation have a substantial positive impact on a company's social growth.
                        </div>
                    </div>
                </div>

                <div className='ov-element'>
                    <div className='ov-element-left'>
                        <img src={O3} />
                    </div>
                    <div className='ov-element-right'>
                        <div className='ov-element-text'>
                            People shouldn't solely consider innovation during retreats and seminars.
                        </div>
                    </div>
                </div>

                <div className='ov-element'>
                    <div className='ov-element-left'>
                        <img src={O3} />
                    </div>
                    <div className='ov-element-right'>
                        <div className='ov-element-text'>
                            Innovation in the workplace needs to be strategic and should be ingrained in the business.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
