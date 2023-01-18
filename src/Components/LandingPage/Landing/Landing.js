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

export default function Landing() {
    return (
        <div style={{ backgroundColor: "#211F22" }} className="landing-outer">
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

        </div>
    )
}
