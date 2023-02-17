import React from 'react'
import "./Charter.css"

import C1 from "./CharterImages/C1.png"
import C2 from "./CharterImages/C2.png"

import { NavLink as Link } from 'react-router-dom'

export default function Charter() {

    const charterData = [
        {
            name: "Advocacy Policy",
            link: "",
        },
        {
            name: "Affirmative Action Policy",
            link: "",
        },
        {
            name: "Anti Sexual Harrasment Policy",
            link: "",
        },
        {
            name: "Archival Policy",
            link: "",
        },
        {
            name: "Business Continuity Policy",
            link: "",
        },
        {
            name: "Code of Conduct for BDM Non-Executive Directors",
            link: "",
        },
        {
            name: "Code of Corpoate Disclosure Policy",
            link: "",
        },
        {
            name: "Corporate Customer Service Policy",
            link: "",
        },
        {
            name: "Gift Policy",
            link: "",
        },
        {
            name: "Gift Policy",
            link: "",
        },
        {
            name: "Media Policy and Guidelines",
            link: "",
        },
        {
            name: "Remuneration Policy for Directors, Key Management Personal & Other Employee",
            link: "",
        },
        {
            name: "Risk Management Policy",
            link: "",
        },
        {
            name: "Security Code of Conduct",
            link: "",
        },
        {
            name: "Volunteering Guidelines",
            link: "",
        },
        {
            name: "Whistle Blower Policy & Vigil Mechanism",
            link: "",
        },
    ]

    return (
        <div className='charter-outer'>
            <div style={{ width: "100%" }}>
                <img src={C1} style={{ width: "100%" }} />
            </div>

            <div className='charter-title'>
                <u>Corporate Policies</u>
            </div>

            <div style={{ marginTop: "5%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {
                    charterData.map((item, index) => {
                        return <div className='charter-element'>
                            <div className='charter-element-text'>
                                {item.name}
                            </div>
                            <Link to={item.link}>
                                <div style={{ width: "100%"}}>
                                    <img src={C2} style={{ width: "70%"}}/>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
