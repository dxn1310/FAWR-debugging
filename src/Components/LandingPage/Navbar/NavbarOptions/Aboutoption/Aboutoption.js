import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Aboutoption.css"

import { ChevronRightIcon } from '@chakra-ui/icons'

import { NavLink as Link } from 'react-router-dom'

export default function Aboutoption({ onClick, mode }) {
    return (
        <div className='ao-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <div className='ao-left'>
                <div className='ao-option' style={{ borderTop: mode === "dark" ? "1px solid white" : "1px solid black", borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <Link to="/Overview">
                            <div classname="ao-option-text" onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>
                                Overview
                            </div>
                        </Link>
                        <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                    </Stack>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <Link to="/Leadership">
                            <div classname="ao-option-text" onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>
                                Leadership
                            </div>
                        </Link>
                        <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                    </Stack>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <Link to="/Vision, Mission & Values">
                            <div classname="ao-option-text" onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>
                                Vision, Mission & Values
                            </div>
                        </Link>
                        {/* <ChevronRightIcon fontSize="2rem" /> */}
                    </Stack>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <Link to="/Policy & Charters">
                            <div classname="ao-option-text" onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>
                                Policies & Charters
                            </div>
                        </Link>
                        <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                    </Stack>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <Link to="/Global Affiliation">
                            <div classname="ao-option-text" onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>
                                Global Affiliation
                            </div>
                        </Link>
                        <ChevronRightIcon fontSize="20" color={mode === "dark" ? "white" : "black"} />
                    </Stack>
                </div>
                <div className='ao-option' style={{ borderBottom: mode === "dark" ? "1px solid white" : "1px solid black" }}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <Link to="/About Us">
                            <div classname="ao-option-text" onClick={onClick} style={{ color: mode === "dark" ? "white" : "black" }}>
                                {/* Code of Conduct */}
                                About Us
                            </div>
                        </Link>
                        {/* <ChevronRightIcon fontSize="2rem" /> */}
                    </Stack>
                </div>

            </div>
            <div className='ao-right'>
                <div className='ao-right-text1' style={{ color: mode === "dark" ? "white" : "black" }}>
                    We are committed to bringing about change for the betterment of everybody.
                </div>

                <div className='ao-right-text2' style={{ color: mode === "dark" ? "white" : "black" }}>
                    Every day, our knowledgeable, devoted staff puts our shared convictions into practise. Together, we blend creativity and accumulated wisdom to produce the remarkable.
                </div>
            </div>
        </div>
    )
}
