import { Stack } from '@chakra-ui/react'
import React from 'react'
import "./Aboutoption.css"

import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Aboutoption() {
    return (
        <div className='ao-outer'>
            <div className='ao-left'>
                <div className='ao-option' style={{ borderTop: "1px solid white" }}>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="ao-option-text">
                            Overview
                        </div>
                        <ChevronRightIcon fontSize="20" />
                    </Stack>
                </div>
                <div className='ao-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="ao-option-text">
                            Leadership
                        </div>
                        <ChevronRightIcon fontSize="20" />
                    </Stack>
                </div>
                <div className='ao-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="ao-option-text">
                            Vision, Mission & Values
                        </div>
                        {/* <ChevronRightIcon fontSize="2rem" /> */}
                    </Stack>
                </div>
                <div className='ao-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="ao-option-text">
                            Policies & Charters
                        </div>
                        <ChevronRightIcon fontSize="20" />
                    </Stack>
                </div>
                <div className='ao-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="ao-option-text">
                            Global Affiliation
                        </div>
                        <ChevronRightIcon fontSize="20" />
                    </Stack>
                </div>
                <div className='ao-option'>
                    <Stack direction="row" display="flex" justifyContent="space-between" alignItems='center'>
                        <div classname="ao-option-text">
                            Code of Conduct
                        </div>
                        {/* <ChevronRightIcon fontSize="2rem" /> */}
                    </Stack>
                </div>

            </div>
            <div className='ao-right'>
                <div className='ao-right-text1'>
                    We are committed to bringing about change for the betterment of everybody.
                </div>

                <div className='ao-right-text2'>
                    Every day, our knowledgeable, devoted staff puts our shared convictions into practise. Together, we blend creativity and accumulated wisdom to produce the remarkable.
                </div>
            </div>
        </div>
    )
}
