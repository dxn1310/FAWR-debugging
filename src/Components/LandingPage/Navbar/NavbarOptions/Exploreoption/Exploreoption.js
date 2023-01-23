import { Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Exploreoption.css"

import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Exploreoption() {

    const [selectedOption, setSelectedOption] = useState(0)

    return (
        <div className='eo-outer'>
            <div className='eo-left'>
                <div className='eo-option' style={{ borderTop: "1px solid white" }} onClick={(e) => setSelectedOption(0)}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text">
                            Blogs
                        </div>
                        <ChevronRightIcon fontSize="20" />
                    </Stack>
                </div>
                <div className='eo-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text">
                            Achievements
                        </div>
                        {/* <ChevronRightIcon fontSize="20" /> */}
                    </Stack>
                </div>
                <div className='eo-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text">
                            Success Stories
                        </div>
                        {/* <ChevronRightIcon fontSize="20" /> */}
                    </Stack>
                </div>
                <div className='eo-option' onClick={(e) => setSelectedOption(1)}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text">
                            Events
                        </div>
                        <ChevronRightIcon fontSize="20" />
                    </Stack>
                </div>
                <div className='eo-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text">
                            Reports
                        </div>
                        {/* <ChevronRightIcon fontSize="20" /> */}
                    </Stack>
                </div>
                <div className='eo-option' onClick={(e) => setSelectedOption(2)}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="eo-option-text">
                            Webinars
                        </div>
                        <ChevronRightIcon fontSize="20" />
                    </Stack>
                </div>

            </div>
            <div className='eo-right'>
                {
                    selectedOption === 0 ? <>
                        <div className='eo-right-text1' style={{ borderBottom: "2px solid white", width: "80%" }}>
                            Topics
                        </div>

                        <div className="eo-right-grid">
                            <div className='eo-right-text2'>
                                Digital Research
                            </div>

                            <div className='eo-right-text2'>
                                Digital Research
                            </div>

                            <div className='eo-right-text2'>
                                DevOps
                            </div>

                            <div className='eo-right-text2'>
                                DevOps
                            </div>

                            <div className='eo-right-text2'>
                                Sales Intelligence
                            </div>

                            <div className='eo-right-text2'>
                                Sales Intelligence
                            </div>

                            <div className='eo-right-text2'>
                                Legal Consultant
                            </div>

                            <div className='eo-right-text2'>
                                Legal Consultant
                            </div>

                            <div className='eo-right-text2'>
                                Marketing Automation
                            </div>

                            <div className='eo-right-text2'>
                                Marketing Automation
                            </div>
                        </div>


                    </> : selectedOption === 1 ? <>
                        <div className='eo-right-text1' style={{ borderBottom: "2px solid white", width: "80%" }}>
                            Upcoming
                        </div>

                        <div className="eo-right-grid1">
                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1'>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2'>
                                    1 Nov 2022
                                </div>
                                <div className='eo-right-box-text2'>
                                    City
                                </div>


                                <div className='eo-right-box-text3'>
                                    Register >
                                </div>
                            </div>

                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1'>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2'>
                                    1 Nov 2022
                                </div>
                                <div className='eo-right-box-text2'>
                                    City
                                </div>


                                <div className='eo-right-box-text3'>
                                    Register >
                                </div>
                            </div>


                        </div>
                    </> : <>
                        <div className='eo-right-text1' style={{ borderBottom: "2px solid white", width: "80%" }}>
                            Upcoming
                        </div>

                        <div className="eo-right-grid1">
                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1'>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2'>
                                    1 Nov 2022
                                </div>



                                <div className='eo-right-box-text3'>
                                    Register >
                                </div>
                            </div>

                            <div className='eo-right-box'>
                                <div className='eo-right-box-top'></div>
                                <div className='eo-right-box-text1'>
                                    Lorem ipsum dolor sit amet consectetur.
                                </div>
                                <div className='eo-right-box-text2'>
                                    1 Nov 2022
                                </div>



                                <div className='eo-right-box-text3'>
                                    Register >
                                </div>
                            </div>


                        </div>
                    </>
                }

            </div>
        </div>
    )
}
