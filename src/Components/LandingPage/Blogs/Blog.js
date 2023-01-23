import React from 'react'
import "./Blog.css"

import Blog_img1 from "./BlogImages/Blog_img1.png"

import { Card, CardHeader, CardBody, CardFooter, Image, Button, Heading, Text, Stack, ButtonGroup, Divider } from '@chakra-ui/react'

export default function Blog() {
    return (
        <div className='blog-outer'>
            <div className='blog-grid'>
                <div className='blog-grid-element'>
                    <div className='blog-grid-img'>
                        <img className='blog-img' src={Blog_img1} />
                    </div>
                    <div className='blog-grid-date'>
                        01-Jan-2021
                    </div>
                    <div className='blog-grid-title'>
                        Blog Title
                    </div>
                    <div className='blog-grid-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo.
                    </div>
                </div>



                <div className='blog-grid-element'>
                    <div className='blog-grid-img'>
                        <img className='blog-img' src={Blog_img1} />
                    </div>
                    <div className='blog-grid-date'>
                        01-Jan-2021
                    </div>
                    <div className='blog-grid-title'>
                        Blog Title
                    </div>
                    <div className='blog-grid-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo.
                    </div>
                </div>


                <div className='blog-grid-element'>
                    <div className='blog-grid-img'>
                        <img className='blog-img' src={Blog_img1} />
                    </div>
                    <div className='blog-grid-date'>
                        01-Jan-2021
                    </div>
                    <div className='blog-grid-title'>
                        Blog Title
                    </div>
                    <div className='blog-grid-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi a luctus bibendum commodo.
                    </div>
                </div>


            </div>
        </div>
    )
}
