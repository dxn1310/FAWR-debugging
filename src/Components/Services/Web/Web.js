import React from 'react'
import "../Research/Research.css"

import Web_img1 from "./WebImages/Web_img1.png"
import R1 from "./WebImages/1.png"
import R2 from "./WebImages/2.png"
import R3 from "./WebImages/3.png"
import R4 from "./WebImages/4.png"
import R5 from "./WebImages/5.png"
import R6 from "./WebImages/6.png"
import Web_img2 from "./WebImages/Web_img2.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'

export default function Web() {

    const detailData = [
        {
            title: "Build Engaging Web Solution",
            content1: "Because of the high calibre and variety of services provided, BDM is recognized as the top web development company. We at BDM provide a wide range of services, from creating websites for the Internet (World Wide Web) or an intranet (a private network). The online design and development services we provide include creating specialised web pages, social networking sites, and e-commerce platforms. Our team of skilled designers and developers never stops working to help our clients establish their online presence, build brand recognition, and realise their potential for exponential growth. The BDM team consistently aims to achieve two goals for the client, namely, growth maximisation in a highly economical manner.",
            content2: "At BDM, we put in a lot of effort to help our clients create a clear plan and then create brief, specific tactics that are appropriate for their organisation.",
            points: ["Static Website", "Dynamic Website", "E - Commerce Website", "Web Portals", "Landing Pages", "Website Designing"]
        }
    ]

    const gridData = [
        {
            name: "Static Website",
            firstLetter: "S",
            img: R1,
            content: "Websites can store requests and communicate quickly thanks to a static website design. Today, it has emerged as the best choice for proprietors of small businesses. You won't ever need to worry about content changing frequently if your website is static. We provide the best services for designing and developing static websites."
        },

        {
            name: "Dynamic Website",
            firstLetter: "D",
            img: R2,
            content: "It is crucial for website owners to maintain their sites updated in light of shifting technology, fashion, and consumer preferences. A dynamic website makes all of this simple to do. You can choose a website for your company at BDM from a variety of templates. A dynamic website gives you the flexibility to alter it whenever you need to."
        },

        {
            name: "E-Commerce Website",
            firstLetter: "E",
            img: R3,
            content: "We have established user-friendly, well-designed websites in response to the e-commerce sector boom to give customers the greatest possible online purchasing experience. We've always gone above and beyond expectations and increased ROI, whether it be by assisting you in choosing the best platform for your business or by creating a unique eCommerce solution."
        },

        {
            name: "Web Portals",
            firstLetter: "W",
            img: R4,
            content: "Web portal development changes how businesses interact with their clients, partners, and staff digitally. Web portals can be used by businesses to provide access to services, goods, information, and communication tools for target people as well as self-service functionality. A web portal is a safe online-based platform that offers access to a range of features and material through a simple interface."
        },

        {
            name: "Landing Page",
            firstLetter: "L",
            img: R5,
            content: "The best choice for improving marketing campaign conversion rates and reducing the cost of getting a sale is to use landing pages. Landing pages give you more information about your target market. Additionally, landing pages can assist a company in building credibility and brand value."
        },
        {
            name: "Website Designing",
            firstLetter: "W",
            img: R6,
            content: "Your website is the first point of contact customers have with your company in the modern digital environment. With an award-winning design team, BDM is a top web design company that builds cutting-edge, profitable websites that capture your brand, boost conversion rates, and help you reach your objectives."
        },

    ]

    return (
        <div className='research-outer'>
            <Top bgimg={Web_img1} />
            <div className='reserach-title'>
                Web Development Services
            </div>
            <div className='research-component'>
                <Details detailData={detailData} />
            </div>

            <div className='research-component'>
                <Grid gridData={gridData} />
            </div>

            <div className='reserach-title'>
                Our Web Development Process
            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                <img src={Web_img2} />
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
