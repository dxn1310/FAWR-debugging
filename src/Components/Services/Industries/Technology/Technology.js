import React from 'react'
import "../../Industries/Industries.css"

import Technology_img1 from "./TechnologyImages/Technology_img1.png"

import Grid from '../../../Templates/Grid/Grid'

import Award from "../../../LandingPage/Awards/Award"
import Project from "../../../LandingPage/Projects/Project"
import Blogs from "../../../LandingPage/Blogs/Blog"
import Industrytop from '../../../Templates/IndustriesTemplates/IndustryTop/Industrytop'
import Challenges from '../../../Templates/IndustriesTemplates/Challenges/Challenges'

export default function Technology() {

    const challengeData = [
        "Management of big data",
        "Automation and robotics",
        "Information security",
        "Skills gap",
        "Integrations and upgrades",
        "Artificial intelligence & Machine learning"
    ]

    // const detailData = [
    //     {
    //         title: "In-depth analysis of markets & industries",
    //         content1: "BDM has experience gathering, processing, and evaluating market intelligence since it is a top provider of industries intelligence services. We develop a competitive strategy based on a thorough understanding of the target market and consumers using industries intelligence tools that pinpoint profitable markets and chances for expansion.",
    //         content2: "We collaborate with customers from a variety of industries as part of our tailored industries intelligence consulting services, supporting them with competitive industries intelligence analysis.",
    //         content3: " BDM Research Intelligence products are made to support you in achieving your main industries goals. Together, we discover and comprehend your needs and then explain the solutions we believe will lead to the greatest outcomes. Then, we put your selected solution into practise and work with you to get the most out of it as quickly as feasible.",
    //         points: ["Benchmarking", "Market Research", "Company Research", "Audience Analysis", "Consumer Journey", "App Intelligence"]
    //     }
    // ]

    // const gridData = [
    //     {
    //         name: "Benchmarking",
    //         firstLetter: "B",
    //         img: R1,
    //         content: "You need more than just your own data if you want to drive success in the digital sphere. Competitive benchmarking tool provide you context so you can spot high-value opportunities, monitor your progress, and dominate your market."
    //     },

    //     {
    //         name: "Market Research",
    //         firstLetter: "M",
    //         img: R2,
    //         content: "Market industries services perform in-depth industries and reporting into a variety of markets.  Additionally, we examine market activities to offer firms specialised market information and fresh viewpoints on their own advertising initiatives. Reports, infographics, and ad-hoc deliverables are used to highlight insights."
    //     },

    //     {
    //         name: "Company Research",
    //         firstLetter: "C",
    //         img: R3,
    //         content: "With the help of company industries tools, firms now have access to a level of information that was unthinkable even ten years ago. By incorporating these technologies into your workflow, you can boost sales and create a level of customer and supplier relationships that is unmatched in transparency."
    //     },

    //     {
    //         name: "Audience Analysis",
    //         firstLetter: "A",
    //         img: R4,
    //         content: "To enhance marketing strategy, customer experience, and brand impression, companies sometimes use audience analysis to develop a deeper knowledge of their existing and future consumers. A detailed audience study guarantees that communications and actions reflect the audience's beliefs, aspirations, and resistance to change genuinely and address these issues."
    //     },

    //     {
    //         name: "Consumer Journey",
    //         firstLetter: "C",
    //         img: R5,
    //         content: "Amplitude's customer analytics products ask 'why' rather than 'what' the consumer is doing. Our customer analytics provide a comprehensive view of the customer journey to assist identify trends and comprehend behaviour."
    //     },
    //     {
    //         name: "App Intelligence",
    //         firstLetter: "A",
    //         img: R6,
    //         content: "Despite an increased emphasis on sponsored acquisition, paid search still accounts for 60% of app downloads. App Intelligence correctly assesses the performance of both your and your rivals' organic user acquisition strategies. Discover the keywords that are generating downloads and look into new phrases to improve your search marketing."
    //     },


    // ]
    return (
        <div className='industries-outer'>
            <Industrytop bgimg={Technology_img1}
                content="Technology companies need to be able to expand quickly and pivot even more quickly in a sector where innovation is both an opportunity and a danger. Whatever the focus or stage of your company's life cycle, our industry knowledge and cross-sector expertise can help you make the correct decisions and achieve quick, long-lasting results. We collaborate with clients in the storage, components and peripherals, IT services, as well as every other area of the IT industry. Additionally, our firm's extensive expertise in private equity and telecommunications supports our technology practise. We aid market leaders in the planning of acquisitions, the streamlining of R&D procedures, the improvement of cybersecurity, and cost-cutting measures. We teach struggling businesses how to revamp their financial structures, and we train up-and-coming competitors how to scale up their operations to handle the rising complexity that comes along with expansion. We offer a comprehensive grasp of the entire potential of cloud computing and the Internet of Things as trusted consultants to CTOs, CIOs, and financial backers." />
            <div className='industries-title'>
                Challenges
            </div>
            <div className='industries-component'>
                <Challenges challengeData={challengeData} />
            </div>
            {/* <div className='industries-component'>
                <Grid gridData={gridData} />
            </div> */}

            <div className='industries-title'>
                Awards & Recognition
            </div>
            <div className='industries-component'>
                <Award />
            </div>

            <div className='industries-title'>
                Our Recent Projects
            </div>
            <div className='industries-component'>
                <Project />
            </div>

            <div className='industries-title'>
                Featured Blog posts
            </div>
            <div className='industries-component'>
                <Blogs />
            </div>

        </div>
    )
}
