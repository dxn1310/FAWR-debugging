import { Input, Stack, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"

import f1 from "./FooterImages/1.png"
import f2 from "./FooterImages/2.png"
import f3 from "./FooterImages/3.png"
import f4 from "./FooterImages/4.png"
import f5 from "./FooterImages/5.png"
import f6 from "./FooterImages/6.png"
import f7 from "./FooterImages/7.png"
import f8 from "./FooterImages/8.png"




export default function Footer() {
    return (
        <div className='footer-outer'>
            <div className='footer-left'>
                <img src={f7} />
            </div>
            <div className='footer-middle'>
                <div className='footer-box'>
                    <div className='footer-box-text'>Join our newsletter</div>
                    <InputGroup width="30%">
                        <Input rightIcon={<img src={f2} />} width="100%" backgroundColor="#2B2B2B" border="none"
                            placeholder='Email Address'
                            _placeholder={{ color: "#B0B0B0" }}
                            borderRadius="1rem" />
                        <InputRightElement curser="pointer" marginRight="2%">
                            <img src={f2} style={{ curser: "pointer" }} />
                        </InputRightElement>
                    </InputGroup>
                    <div style={{ diplay: "flex", justifyContent: "center" }}>
                        <Stack direction="column" display="flex" justifyContent="center" spacing={5}>
                            <div className='footer-box-icons-text'>Follow us on:</div>
                            <Stack direction="row" spacing={10}>
                                <div style={{ curser: "pointer" }}><img src={f3} /></div>
                                <div style={{ curser: "pointer" }}><img src={f4} /></div>
                                <div style={{ curser: "pointer" }}><img src={f5} /></div>
                                <div style={{ curser: "pointer" }}><img src={f6} /></div>
                            </Stack>
                        </Stack>
                    </div>
                </div>

                <div className='footer-content'>
                    <div className='footer-content-title'>
                        LOGO
                    </div>
                    <div>
                        <ul className='footer-ul'>
                            <li className='footer-content-text'>About</li>
                            <li className='footer-content-text'>Solutions</li>
                            <li className='footer-content-text'>Case Study</li>
                            <li className='footer-content-text'>Explore</li>
                            <li className='footer-content-text'>Career</li>
                            <li className='footer-content-text'>Influencer Program</li>
                        </ul>
                    </div>

                    <div className='footer-content-2'>
                        <div className='footer-content-text'>
                            Contact us
                        </div>
                        <Stack direction='row' spacing={2} alignItems="center" display="flex">
                            <div style={{ width: "1rem" }}><img style={{ width: "1rem" }} src={f8} /></div>
                            <div className='footer-content-text'>
                                company@company.in
                            </div>
                        </Stack>

                        <Stack direction='column' spacing={5} marginTop="5%">
                            <div className='footer-content-text'>
                                Ready to Talk?
                            </div>

                            <InputGroup>
                                <Input placeholder='Talk with expert in..'
                                    backgroundColor="white" width="100%" />
                                <InputRightElement ><img src={f3} /></InputRightElement>
                            </InputGroup>
                        </Stack>
                    </div>
                </div>


                <div style={{ width: "100%", height: "0.1rem", backgroundColor: "white" }} />

                <div className='footer-bottom'>
                    <div className='footer-bottom-left'>
                        <div className='footer-content-text'>
                            Copyright © 2022. All rights reserved
                        </div>
                    </div>

                    <div className='footer-bottom-right'>
                        <div className='footer-content-text'>
                            Sustainability
                        </div>
                        <div className='footer-content-text'>
                            Accessibility
                        </div>
                        <div className='footer-content-text'>
                            Terms of use
                        </div>
                        <div className='footer-content-text'>
                            Privacy Policy
                        </div>
                        <div className='footer-content-text'>
                            Cookie Policy
                        </div>
                        <div className='footer-content-text'>
                            Sitemap
                        </div>
                        <div className='footer-content-text'>
                            Login
                        </div>

                    </div>

                </div>





            </div>
            <div className='footer-right'>
                <img src={f1} />
            </div>
        </div >
    )
}
