import React from 'react'
import "./Landing.css"

import Firstpage from '../Firstpage/Firstpage'
import Ourservices from '../Ourservices/Ourservices'
import Industries from '../Industries/Industries'
import About from '../About/About'
import Career from '../Career/Career'
import Partner from '../Partner/Partner'
import Other from '../Other/Other'
import Companies from '../Companies/Companies'
import Footer from '../Foooter/Footer'
import Award from '../Awards/Award'
import Project from '../Projects/Project'
import Blog from '../Blogs/Blog'
import Navbar from '../Navbar/Navbar'
import Aboutoption from '../Navbar/NavbarOptions/Aboutoption/Aboutoption'
import Careeroption from '../Navbar/NavbarOptions/Careeroption/Careeroption'
import Solutionoption from '../Navbar/NavbarOptions/Solutionoption/Solutionoption'
import Terms from '../../Policies/Terms/Terms'
import Privacy from '../../Policies/Privacy/Privacy'
import Cookie from '../../Policies/Cookie/Cookie'

// import Contact from "../../Contact/Contact"

export default function Landing() {
    return (
        <div style={{ backgroundColor: "#211F22" }} className="landing-outer">
            {/* <Navbar /> */}
            {/* <Contact /> */}
            <div className='landing-element'>
                <Firstpage />
            </div>
            <div className='landing-title'>
                Our Services
            </div>
            <div className='landing-element'>
                <Ourservices />
            </div>

            <div className='landing-title'>
                Industries we serve
            </div>

            <div className='landing-element'>
                <Industries />
            </div>

            <div className='landing-title'>
                About Us
            </div>

            <div className='landing-element'>
                <About />
            </div>

            <div className='landing-title'>
                Awards &
                Recognitions
            </div>

            <div className='landing-element'>
                <Award />
            </div>

            <div className='landing-title'>
                Career
            </div>

            <div className='landing-element'>
                <Career />
            </div>
            <div className='landing-title'>
                Our Other Products
            </div>

            <div className='landing-element'>
                <Other />
            </div>

            <div className='landing-title'>
                Our Partners
            </div>

            <div className='landing-element'>
                <Partner />
            </div>

            <div className='landing-title'>
                Our Other Companies
            </div>

            <div className='landing-element'>
                <Companies />
            </div>


            <div className='landing-title'>
                Testimonials
            </div>

            <div className='landing-title'>
                Our Recent Projects
            </div>

            <div className='landing-element'>
                <Project />
            </div>

            <div className='landing-title'>
                Our Featured Blogs
            </div>

            <div className='landing-element'>
                <Blog />
            </div>

            {/* <Footer /> */}

        </div>
    )
}
