import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Career.css"

import Career_img1 from "./CareerImages/Career_img1.png"
import Career_img2 from "./CareerImages/Career_img2.png"

export default function Career({ mode }) {
    return (
        <div className='career-outer'>
            <div className='career-left'>
                <div className='career-right-title' style={{ color: mode === "dark" ? "#C6C6C6" : "black" }}>
                    Job Openings
                </div>
                <div className='career-job-grid'>
                    <div className='career-job-title' style={{ color: mode === "dark" ? "#C6C6C6" : "black" }}>
                        Full Stack Developer
                    </div>
                    <div className='career-job-text'>
                        1 Job | Work from Home
                    </div>
                    <Stack direction="row" spacing={5} alignItems="center">
                        <div><img src={Career_img2} /></div>
                        <div className='career-job-text' style={{ color: "#BC312E", textAlign: "center" }}>Earn ₹10000 - ₹20000 per month</div>
                    </Stack>
                </div>

                <div className='career-job-grid'>
                    <div className='career-job-title' style={{ color: mode === "dark" ? "#C6C6C6" : "black" }}>
                        Senior Executive
                    </div>
                    <div className='career-job-text'>
                        1 Job | On-site
                    </div>
                    <Stack direction="row" spacing={5} alignItems="center">
                        <div><img src={Career_img2} /></div>
                        <div className='career-job-text' style={{ color: "#BC312E", textAlign: "center", textAlign: "center" }}>Earn ₹10000 - ₹20000 per month</div>
                    </Stack>
                </div>

                <div className='career-job-grid'>
                    <div className='career-job-title' style={{ color: mode === "dark" ? "#C6C6C6" : "black" }}>
                        UI/UX Designer
                    </div>
                    <div className='career-job-text'>
                        1 Job | Work from Home
                    </div>
                    <Stack direction="row" spacing={5} alignItems="center">
                        <div><img src={Career_img2} /></div>
                        <div className='career-job-text' style={{ color: "#BC312E", textAlign: "center" }}>Earn ₹10000 - ₹20000 per month</div>
                    </Stack>
                </div>
                <div style={{ width: "60%", justifyContent: "right", display: "flex", marginTop: "2%" }} className='career-job-text'>
                    View All
                </div>

            </div>
            <div className='career-right'>
                <div className='career-right-title' style={{ color: mode === "dark" ? "#C6C6C6" : "black" }}>
                    Benefits of Working with us
                </div>

                <div className='career-grid-element'>
                    <div className='career-grid-left'>
                        <img src={Career_img1} />
                    </div>
                    <div className='career-grid-right'>
                        <div className='career-grid-title'>
                            Health and Fitness
                        </div>
                        <div className='career-grid-text'>
                            Focusing on one's health is something we at BDM think is crucial. Our in-house nutritionist and fitness instructors are dedicated to promoting a healthy work environment for everybody.
                        </div>
                    </div>
                </div>


                <div className='career-grid-element'>
                    <div className='career-grid-left'>
                        <img src={Career_img1} />
                    </div>
                    <div className='career-grid-right'>
                        <div className='career-grid-title'>
                            Medical Coverage
                        </div>
                        <div className='career-grid-text'>
                            All employees are protected by a comprehensive health insurance plan, which includes coverage for spouses and children.
                        </div>
                    </div>
                </div>

                <div className='career-grid-element'>
                    <div className='career-grid-left'>
                        <img src={Career_img1} />
                    </div>
                    <div className='career-grid-right'>
                        <div className='career-grid-title'>
                            Flexi benefits
                        </div>
                        <div className='career-grid-text'>
                            With the help of our flex benefit plan, emplyees can change the elements of their pay depending on perks like travel allowance, phone bill etc.
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
