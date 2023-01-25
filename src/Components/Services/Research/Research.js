import React from 'react'
import "./Research.css"

import Research_img1 from "./ResearchImages/Research_img1.png"
import R1 from "./ResearchImages/1.png"
import R2 from "./ResearchImages/2.png"
import R3 from "./ResearchImages/3.png"
import R4 from "./ResearchImages/4.png"
import R5 from "./ResearchImages/5.png"
import R6 from "./ResearchImages/6.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"

export default function Research() {
 
    const detailsData = {
        title : "In-depth analysis of markets & industries",
        
    }

    const gridData = [
        {
            name: "Benchmarking",
            firstLetter: "B",
            img: R1,
            content: "You need more than just your own data if you want to drive success in the digital sphere. Competitive benchmarking tool provide you context so you can spot high-value opportunities, monitor your progress, and dominate your market."
        },

        {
            name: "Market Research",
            firstLetter: "M",
            img: R2,
            content: "Market research services perform in-depth research and reporting into a variety of markets.  Additionally, we examine market activities to offer firms specialised market information and fresh viewpoints on their own advertising initiatives. Reports, infographics, and ad-hoc deliverables are used to highlight insights."
        },

        {
            name: "Company Research",
            firstLetter: "C",
            img: R3,
            content: "With the help of company research tools, firms now have access to a level of information that was unthinkable even ten years ago. By incorporating these technologies into your workflow, you can boost sales and create a level of customer and supplier relationships that is unmatched in transparency."
        },

        {
            name: "Audience Analysis",
            firstLetter: "A",
            img: R4,
            content: "To enhance marketing strategy, customer experience, and brand impression, companies sometimes use audience analysis to develop a deeper knowledge of their existing and future consumers. A detailed audience study guarantees that communications and actions reflect the audience's beliefs, aspirations, and resistance to change genuinely and address these issues."
        },

        {
            name: "Consumer Journey",
            firstLetter: "C",
            img: R5,
            content: "Amplitude's customer analytics products ask 'why' rather than 'what' the consumer is doing. Our customer analytics provide a comprehensive view of the customer journey to assist identify trends and comprehend behaviour."
        },
        {
            name: "App Intelligence",
            firstLetter: "A",
            img: R6,
            content: "Despite an increased emphasis on sponsored acquisition, paid search still accounts for 60% of app downloads. App Intelligence correctly assesses the performance of both your and your rivals' organic user acquisition strategies. Discover the keywords that are generating downloads and look into new phrases to improve your search marketing."
        },


    ]
    return (
        <div className='research-outer'>
            <Top bgimg={Research_img1} />
            <div className='reserach-title'>
                Research Intelligence Services
            </div>
            <div className='research-component'>
                <Details />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title'>
                Awards & Recognition
            </div>
            <div className='research-component'>
                <Award />
            </div>

            <div className='reserach-title'>
                Our Recent Projects
            </div>
            <div className='research-component'>
                <Project />
            </div>

            <div className='reserach-title'>
                Featured Blog posts
            </div>
            <div className='research-component'>
                <Blogs />
            </div>

        </div>
    )
}
