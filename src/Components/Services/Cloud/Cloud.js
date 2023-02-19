import React from 'react'
import "../Research/Research.css"

import Cloud_img1 from "./CloudImages/Cloud_img1.png"
import R1 from "./CloudImages/1.png"
import R2 from "./CloudImages/2.png"
import R3 from "./CloudImages/3.png"
import R4 from "./CloudImages/4.png"


import T1 from "./CloudImages/T1.png"
import T2 from "./CloudImages/T2.png"
import T3 from "./CloudImages/T3.png"

import A1 from "./CloudImages/A1.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Cloud({ mode }) {

    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    const detailData = [
        {
            title: "A fast path to improved ROI",
            content1: "Organizations frequently look to the cloud for assistance when they want to lower the high capital expenditures of hardware and software, boost scalability, and offer better environment adaptability. Deploying data management on the cloud, however, may be a difficult task. The enormous advantages that the cloud offers can be overshadowed by issues with performance, security, and dependability in addition to the overwhelming number of suppliers and cloud products available.",
            content2: "BDM assists clients with all popular cloud models, including infrastructure-as-a-service (IaaS), integration-platform-as-a-service (IPaaS), platform-as-a-service (PaaS), and software-as-a-service, for both public and private clouds (SaaS). In order to guarantee the security, functionality, and dependability of your cloud BI application, we provide both design and deployment solutions.",
            points: ["Cloud Infrastructure", "Cloud Infrastructure Management", "Cloud Auditing", "Cloud Migration"]
        }
    ]

    const gridData = [
        {
            name: "Cloud Infrastructure",
            firstLetter: "C",
            img: R1,
            tool: T1,
            content: "With the help of components like databases, servers, cloud storage, and software integrations, among others, our skilled engineers will help you with the designs of cloud solutions and the infrastructure needs for various projects."
        },

        {
            name: "Cloud Infrastructure Management",
            firstLetter: "C",
            img: R2,
            tool: T2,
            content: "We will support you by providing comprehensive monitoring of the wide range of infrastructure components. Utilize the consulting services of specialists to monitor and assess the performance of your wide array of servers, operating systems, hypervisors, apps, and more."
        },

        {
            name: "Cloud Auditing",
            firstLetter: "C",
            img: R3,
            content: "To guarantee the systems are strategically secure, BDM's cloud audit specialists execute a careful and controlled review of your infrastructure components, such as firewalls, network entry points, and public IP addresses accessing the website."
        },

        {
            name: "Cloud Migration",
            firstLetter: "C",
            img: R4,
            tool: T3,
            content: "Providing end-to-end migration assistance and knowledgeable consulting to ensure your smoothest transition from a conventional or any Cloud Service Provider to another one in order to successfully realise the intended Cloud vision."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Cloud_img1} />
            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u>Cloud Storage & Management Services</u>
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>


            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Awards & Recognition</u>
            </div>
            <div className='research-component'>
                <Award img={A1} i={"0"} />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Our Recent Projects</u>
            </div>
            <div className='research-component'>
                <Project />
            </div>

            <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                <u> Featured Blog posts</u>
            </div>
            <div className='research-component'>
                <Blogs />
            </div>

        </div>
    )
}
