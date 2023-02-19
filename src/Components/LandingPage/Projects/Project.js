import React from 'react'
import "./Project.css"

import Project_img1 from "./ProjectImages/Project_img1.png"

import P1 from "./ProjectImages/P1.png"
import P2 from "./ProjectImages/P2.png"

import { Card, CardHeader, CardBody, CardFooter, Image, Button, Heading, Text, Stack, ButtonGroup, Divider } from '@chakra-ui/react'

export default function Project() {
    return (
        <div className='project-outer'>
            <div className='project-grid'>
                <div className='project-grid-element'>
                    <div className='project-grid-img'>
                        <img className='project-img' src={P1} />
                    </div>
                    <div className='project-grid-title'>
                        Company Name
                    </div>
                    <div className='project-grid-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo.
                    </div>

                    <div className='project-grid-bottom'>
                        <div className='project-grid-bottom-text'>
                            UI/UX Design | Web Development | API Development
                        </div>
                    </div>
                </div>



                <div className='project-grid-element'>
                    <div className='project-grid-img'>
                        <img className='project-img' src={P2} />
                    </div>
                    <div className='project-grid-title'>
                        Company Name
                    </div>
                    <div className='project-grid-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo.
                    </div>

                    <div className='project-grid-bottom'>
                        <div className='project-grid-bottom-text'>
                            UI/UX Design | Web Development | API Development
                        </div>
                    </div>
                </div>


                <div className='project-grid-element'>
                    <div className='project-grid-img'>
                        <img className='project-img' src={P1} />
                    </div>
                    <div className='project-grid-title'>
                        Company Name
                    </div>
                    <div className='project-grid-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo.
                    </div>

                    <div className='project-grid-bottom'>
                        <div className='project-grid-bottom-text'>
                            UI/UX Design | Web Development | API Development
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
