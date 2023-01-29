import { Button } from '@chakra-ui/react'
import React from 'react'
import "./Meeting.css"

export default function Meeting() {
    return (
        <div className='m-outer'>
            <div className='m-inner'>
                <div className='m-title'>
                    Book a meeting with our experts today.
                </div>
                <div className='m-content'>
                    Request a personal demonstration of how you can analyze consumer behavior trends and the evolving Technology landscape.
                </div>
                <div>
                    <Button color="white" backgroundColor="#BC312E" borderRadius="1rem">
                        Requet a Demo
                    </Button>
                </div>
            </div>
        </div>
    )
}
