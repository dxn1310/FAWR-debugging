import React from 'react'
import "./Detals.css"

import Details_img1 from "./DetailsImages/Details_img1.png"

import { NavLink as Link } from 'react-router-dom'
import { Stack } from '@chakra-ui/react'

export default function Details() {
    return (
        <div className='details-outer'>
            <div className='details-left'>
                <div className='details-title'>
                    In-depth analysis of markets & industries
                </div>
                <div className="details-left-text">
                    BDM has experience gathering, processing, and evaluating market intelligence since it is a top provider of research intelligence services. We develop a competitive strategy based on a thorough understanding of the target market and consumers using research intelligence tools that pinpoint profitable markets and chances for expansion.
                    <br /><br />
                    We collaborate with customers from a variety of industries as part of our tailored research intelligence consulting services, supporting them with competitive research intelligence analysis.
                    <br /><br />
                    BDM Research Intelligence products are made to support you in achieving your main research goals. Together, we discover and comprehend your needs and then explain the solutions we believe will lead to the greatest outcomes. Then, we put your selected solution into practise and work with you to get the most out of it as quickly as feasible.
                </div>

            </div>
            <div className='details-right'>
                <div className='details-right-ul'>

                    <Stack direction="row" alignItems="center">
                        <div className="details-dot" style={{ borderRadius: "100%", backgroundColor: "white" }} />
                        <div className='details-li-text'>Benchmarking</div>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                         <div className="details-dot" style={{ borderRadius: "100%", backgroundColor: "white" }} />
                        <div className='details-li-text'>Market Research</div>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                         <div className="details-dot" style={{ borderRadius: "100%", backgroundColor: "white" }} />
                        <div className='details-li-text'>Company Research</div>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                         <div className="details-dot" style={{ borderRadius: "100%", backgroundColor: "white" }} />
                        <div className='details-li-text'>Audience Analysis</div>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                         <div className="details-dot" style={{ borderRadius: "100%", backgroundColor: "white" }} />
                        <div className='details-li-text'>Consumer Journey</div>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                         <div className="details-dot" style={{ borderRadius: "100%", backgroundColor: "white" }} />
                        <div className='details-li-text'>App Intelligence</div>
                    </Stack>
                </div>
            </div>
        </div>
    )
}
