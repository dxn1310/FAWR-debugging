import React from 'react'
import "./Learning.css"

import Learning_img1 from "./LearningImages/Learning_img1.png"
import R1 from "./LearningImages/1.png"
import R2 from "./LearningImages/2.png"
import R3 from "./LearningImages/3.png"
import R4 from "./LearningImages/4.png"
import R5 from "./LearningImages/5.png"
import R6 from "./LearningImages/6.png"
import R7 from "./LearningImages/7.png"
import R8 from "./LearningImages/8.png"
import R9 from "./LearningImages/9.png"

import { Button, useMediaQuery } from '@chakra-ui/react'
import { NavLink as Link } from 'react-router-dom'



export default function Learning() {
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

    const learningData = [
        {
            name: "Web Development",
            content: "Our professionals find the best materials for your idea and apply the most up-to-date techniques to build a website that provides you with a better experience.",
            img: R4,
            link: "/Web Development Services"
        },

        {
            name: "App Development",
            content: "We develop a mobile app that engages your audience and expands your business online.",
            img: R5,
            link: "/App Development Services"
        },

        {
            name: "UX/UI Design",
            content: "We provide responsive and adaptive designs with consistent platform using a special combination of contemporary technology and new methodologies.",
            img: R6,
            link: "/UX / UI Design Services"
        },

        {
            name: "Animation",
            content: "Animation is a strong tool that may be used to define and visualise a production, marketing, or animated feature more precisely.",
            img: R7,
            link: "/Animations Services"
        },

        {
            name: "Mobile Marketing",
            content: "Reach your target clients if you have mobile.. Our team can bring you from one location to another using a clever, economical mobile marketing strategy.",
            img: R8,
            link: "/Mobile Marketing Services"
        },

        {
            name: "Blockchain ",
            content: "We provide effective Blockchain solutions that advance companies and make them stand out from the crowd.",
            img: R9,
            link: "/Blockchain Development Services"
        },
    ]

    return (
        <div className='learning-outer'>
            <div className='learning-bgimg' style={{ width: "100%" }}>
                <img src={Learning_img1} style={{ width: "100%" }} />
            </div>

            <div className='learning-grid' style={{ display: isLargerThan1000 ? "flex" : "none" }}>
                <div className='learning-grid-left'>
                    <div className='learning-grid-title'>
                        Through innovation and technology,become a talent prepared for the future.
                    </div>
                    <div className='learning-grid-text'>
                        We live in a digital world that is continuously changing. Our flexible, cutting-edge, and tech-enabled learning and development solutions assist you in quickly acquiring hot skills, future-ready skills, client-centric skills, and a digital mentality. Our learning platform, created especially for BDM professionals, aims to support the growth of our employees by providing an outstanding digital learning environment.
                    </div>
                </div>
                <div className='learning-grid-right'>
                    <img src={R1} style={{ width: "100%" }} />
                </div>
            </div>


            <div className='learning-grid' style={{ flexDirection: "row-reverse", display: isLargerThan1000 ? "flex" : "none" }}>
                <div className='learning-grid-left'>
                    <div className='learning-grid-title'>
                        Make your professional journey a success.
                    </div>
                    <div className='learning-grid-text'>
                        Our career milestone programmes foster our talent's aspirations for leadership and provide them the skills they need now to thrive and lead tomorrow. Through these programmes, our talent is motivated to manage teams and clients with empathy and encouraged to develop new ways of "thinking" and "doing."
                    </div>
                    <div className='learning-grid-text'>
                        Your job development path benefits greatly from our coaching and mentoring programmes. Your future character as a leader at BDM will be shaped by the professional development plan that our coach and mentor are dedicated to helping you design with their assistance.
                    </div>
                </div>
                <div className='learning-grid-right'>
                    <img src={R2} style={{ width: "100%" }} />
                </div>
            </div>



            <div className='learning-grid' style={{ display: isLargerThan1000 ? "flex" : "none" }}>
                <div className='learning-grid-left'>
                    <div className='learning-grid-title'>
                        Utilizing a machine learning curation system, learn digitally.
                    </div>
                    <div className='learning-grid-text'>
                        The countless educational materials that are at your fingertips will make you happy. A machine learning curation platform from BDM helps our people generate customised digital learning experiences. Your approach to learning will be altered, and you'll be instantaneously connected to other talent across the world through social collaboration.
                    </div>
                </div>
                <div className='learning-grid-right'>
                    <img src={R3} style={{ width: "100%" }} />
                </div>
            </div>


















            <div className='learning-grid' style={{ display: isLargerThan1000 ? "none" : "flex" }}>
                <div className='learning-grid-left'>
                    <div className='learning-grid-title'>
                        Through innovation and technology,become a talent prepared for the future.
                    </div>
                    <div className='learning-grid-right'>
                        <img src={R1} style={{ width: "90%" }} />
                    </div>

                    <div className='learning-grid-text'>
                        We live in a digital world that is continuously changing. Our flexible, cutting-edge, and tech-enabled learning and development solutions assist you in quickly acquiring hot skills, future-ready skills, client-centric skills, and a digital mentality. Our learning platform, created especially for BDM professionals, aims to support the growth of our employees by providing an outstanding digital learning environment.
                    </div>
                </div>
            </div>


            <div className='learning-grid' style={{ display: isLargerThan1000 ? "none" : "flex" }}>
                <div className='learning-grid-left'>
                    <div className='learning-grid-title'>
                        Make your professional journey a success.
                    </div>
                    <div className='learning-grid-right'>
                        <img src={R2} style={{ width: "90%" }} />
                    </div>
                    <div className='learning-grid-text'>
                        Our career milestone programmes foster our talent's aspirations for leadership and provide them the skills they need now to thrive and lead tomorrow. Through these programmes, our talent is motivated to manage teams and clients with empathy and encouraged to develop new ways of "thinking" and "doing."
                    </div>
                    <div className='learning-grid-text'>
                        Your job development path benefits greatly from our coaching and mentoring programmes. Your future character as a leader at BDM will be shaped by the professional development plan that our coach and mentor are dedicated to helping you design with their assistance.
                    </div>
                </div>
            </div>



            <div className='learning-grid' style={{ display: isLargerThan1000 ? "none" : "flex" }}>
                <div className='learning-grid-left'>
                    <div className='learning-grid-title'>
                        Utilizing a machine learning curation system, learn digitally.
                    </div>
                    <div className='learning-grid-right'>
                        <img src={R3} style={{ width: "90%" }} />
                    </div>
                    <div className='learning-grid-text'>
                        The countless educational materials that are at your fingertips will make you happy. A machine learning curation platform from BDM helps our people generate customised digital learning experiences. Your approach to learning will be altered, and you'll be instantaneously connected to other talent across the world through social collaboration.
                    </div>
                </div>
            </div>








            <div className='learning-title'>
                Course Offerings
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                <div className='l-grid'>
                    {
                        learningData.map((item, index) => {
                            return <div className='l-grid-element'>
                                <div className='l-box'>
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <img src={item.img} style={{ width: "100%", height: "object-fit", borderRadius: "1rem" }} />
                                    </div>
                                    <div className='l-box-title'>
                                        {item.name}
                                    </div>
                                    <div className='l-box-text'>
                                        {item.content}
                                    </div>
                                    <div>
                                        <Link to={item.link}>
                                            <Button color="white" backgroundColor="#BC312E" borderRadius="0.5rem" marginTop="10%">View Detail</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
                <div style={{ marginBottom: "5rem" }}>
                    <Link to="/Solution Options">
                        <Button color="white" backgroundColor="#BC312E" borderRadius="0rem" size="lg" fontWeight="500" marginTop="10%">Explore all courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
