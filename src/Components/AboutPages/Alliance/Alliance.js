import React from 'react'
import "./Alliance.css"

import A1 from "./AllianceImages/A1.png"

export default function Alliance() {
    return (
        <div className='all-outer'>
            <div style={{ width: "100%" }}>
                <img src={A1} style={{ width: "100%" }} />
            </div>
            <div className='all-text'>
                In order to help you achieve breakthrough innovation, growth, and efficiency at an unheard-of pace, the BDM Alliance Ecosystem brings together best-in-class tools, technologies, and service providers that complement our consulting skills. These joint ventures are an essential aspect of our powerful digital distribution platform. We collaborate closely with these partners to give you access to the capabilities that are most pertinent to your demands, facilitating the quicker assimilation of fresh concepts, know-how, and working methods.
            </div>

            <div className='all-text'>
                The BDM Advisor Network, an unique network of hundreds of outside experts from all industries, job functions, and regions, completes our ecosystem of partnerships by matching client requirements with the right external expertise.
            </div>

            <div className='all-title'>
                <u>What to Expect</u>
            </div>

            <div className='all-grid'>
                <div className='all-element'>
                    <div className='all-element-title'>
                        Data
                    </div>
                    <div className='all-element-text'>
                        Specialized information to facilitate powerful analytics
                    </div>
                </div>

                <div className='all-element'>
                    <div className='all-element-title'>
                        Tools
                    </div>
                    <div className='all-element-text'>
                        Strong digital tools improve productivity and produce fresh insights.
                    </div>
                </div>

                <div className='all-element'>
                    <div className='all-element-title'>
                        Technology
                    </div>
                    <div className='all-element-text'>
                        Best-in-class options increase operational effectiveness and hasten outcomes
                    </div>
                </div>

                <div className='all-element'>
                    <div className='all-element-title'>
                        Thought Leadership
                    </div>
                    <div className='all-element-text'>
                        Industry associations, charities, and other organizations provide new views and viewpoints.
                    </div>
                </div>

                <div className='all-element'>
                    <div className='all-element-title'>
                        Service
                    </div>
                    <div className='all-element-text'>
                        Optimized solutions, execution, and effect are ensured by specialised experience across numerous sectors.
                    </div>
                </div>
            </div>
        </div>
    )
}
