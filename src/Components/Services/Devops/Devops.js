import React from 'react'
import "../Research/Research.css"

import Devops_img1 from "./DevopsImages/Devops_img1.png"
import R1 from "./DevopsImages/1.png"
import R2 from "./DevopsImages/2.png"
import R3 from "./DevopsImages/3.png"
import R4 from "./DevopsImages/4.png"
import R5 from "./DevopsImages/5.png"
import R6 from "./DevopsImages/6.png"
import Devops_img2 from "./DevopsImages/Devops_img2.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Research() {

    const detailData = [
        {
            title: "DevOps service for faster time to market",
            content1: "BDM DevOps emphasizes collaboration, automation, integration, and communication, thus, ensuring agile delivery and removing bottlenecks in software development. DevOps focusses at associating the gap between the operations & development teams, and quicker delivery of applications. Ground-breaking solutions are empowered by reducing the time lost and swiftly bringing innovative competencies in the procurement of responses. As a DevOps consulting partner, we ensure close collaboration between the IT operations team and the software engineering teams. Our expert pool of consultants helps in enhancing your IT processes, to have trust in the software solution. As a skilled DevOps service provider, we focus on a management culture which enhances the entire software setup to complete collaboration, communication, and integration. Our DevOps consulting service manages infrastructure, procedures and tools, delivery and maintenance of software operations.",
            points: ["Infrastructure Management", "Configuration Management", "Automation", "Environment Management", "Code Integration & Inspection", "Virtualization"]
        }
    ]

    const gridData = [
        {
            name: "Infrastructure Management",
            firstLetter: "I",
            img: R1,
            content: "It is a crucial component in establishing a DevOps process. We support IT operations with monitoring and management of infrastructure across cloud vendors with our DevOps solutions. We take these steps for your business to avoid any obstacles before they arise. We therefore ensure that you can close the gap between software development, quality assurance, and IT operations with our DevOps solutions."
        },

        {
            name: "Configuration Management",
            firstLetter: "C",
            img: R2,
            content: "Automating tedious maintenance procedures using configuration management frees up developer time for creative development. This improves agility for the organisation as a whole as well as for individual developers. It would be accurate to say at this point that Configuration Management is fundamentally required for establishing a DevOps-driven architecture."
        },

        {
            name: "Automation",
            firstLetter: "A",
            img: R3,
            content: "Automation is the application of technology to jobs that require less human involvement. Automation can be used in any industry with repetitive operations, although it is more common in the manufacturing, robotics, and automotive sectors as well as in IT systems and business decision tools in the technology world."
        },

        {
            name: "Environment Management",
            firstLetter: "E",
            img: R4,
            content: "By managing infrastructure, apps, tools, procedures, and day-to-day operations, development and environment management may increase agility, automate processes, and shorten time-to-market. We help you maintain your code, automate your platforms, and prepare your server and services for your customers with our environment management services."
        },

        {
            name: "Code Integration & Inspection",
            firstLetter: "C",
            img: R5,
            content: "Code integration, also referred to as CI, enables you to automate tool communication, cutting out human procedures and waste from the value stream. Code inspections assist you in identifying faults in functionality, maintainability, and dependability. Simple errors of omission and commission can be discovered using a code inspection checklist."
        },
        {
            name: "Virtualization",
            firstLetter: "V",
            img: R6,
            content: "Various software development procedures, such as testing and delivery, are automated by it. It allows the teams working on it to create and test products in simulated and virtual settings using hardware and software that is comparable to that used by end customers. In this manner, testing and development are expedited and take less time."
        },

    ]

    const valueData = [
        {
            content: "Our DevOps services and DevOps solutions offer multiple value-added benefits such as:",
            points: ["Custom-developed monitoring solution", "Enhanced quality", "Automated infrastructure provisioning",
                "Improved innovation", "Resiliency", "Reduced outages", "Increased agility", "Scalability"]
        }
    ]
    return (
        <div className='research-outer'>
            <Top bgimg={Devops_img1} />
            <div className='reserach-title'>
                DevOps Services
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title'>
                Benefits of DevOps
            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                <img src={Devops_img2} />
            </div>

            <div className='reserach-title'>
                The value we Add
            </div>
            <div className='research-component'>
                <Value valueData={valueData} />
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
