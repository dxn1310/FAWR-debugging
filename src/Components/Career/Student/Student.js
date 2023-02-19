import React from 'react'
import "./Student.css"

import Student_img1 from "./StudentImages/Student_img1.png"

export default function Student({ mode }) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    return (
        <div className='student-outer'>
            <div className='student-bgimg' style={{ width: "100%" }}>
                <img src={Student_img1} style={{ width: "100%" }} />
            </div>
            <div className='student-text' style={{ color: mode === "dark" ? "white" : "black", marginTop: "5%" }}>
                We have a clear vision for the future at BDM, and it's quite exciting. Would you like to join a business that is creating history?
            </div>
            <div className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                In order to achieve this goal, BDM participates in campus hiring and is the preferred employer at the majority of prestigious engineering and management institutions, including the Indian Institute of Technology, National Institute of Technology, Birla Institute of Technology, Indian Institute of Managements, FMS Delhi, and many others. In addition to recruiting from colleges, we also hire seasoned experts from the sector for a variety of mid-level and senior jobs.
            </div>

            <div className='student-text' style={{ color: mode === "dark" ? "white" : "black", marginTop: "5%" }}>
                A STRUCTURED INDUCTION PROGRAMME IS CARRIED OUT FOR:
            </div>

            <div className='student-text' style={{ color: "#BC312E", marginTop: "2%" }}>
                Graduate Tainees
            </div>

            <div className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                A one-year induction training programme is to be completed by all the trainees
            </div>
            <div className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                The induction program contains the following:
            </div>
            <div style={{ width: "80%" }}>
                <ul style={{ width: "80%", textAlign: "left" }}>
                    <li className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Technical Training
                    </li>
                    <li className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Functional Training
                        <ul style={{ marginLeft: "5%" }}>
                            <li className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                On the job Training
                            </li>
                            <li className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                                Classroom Training
                            </li>
                        </ul>
                    </li>
                    <li className='student-text' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                        Managerial Skill Developmen
                    </li>
                </ul>
            </div>
        </div>
    )
}
