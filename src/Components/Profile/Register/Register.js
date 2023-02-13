import React from 'react'
import "./Register.css"

import Register_img1 from "./RegisterImages/Register_img1.png"
import Register_img2 from "./RegisterImages/Register_img2.png"

import L1 from "./RegisterImages/1.png"
import L2 from "./RegisterImages/2.png"
import L3 from "./RegisterImages/3.png"
import L4 from "./RegisterImages/4.png"

import { NavLink as Link } from 'react-router-dom'


import { Input, Button } from '@chakra-ui/react'

export default function Register() {
    return (
        <div className='register-outer'>
            <div className='register-bgimg'>
                <div className="register-box">
                    <div className='register-box-title' style={{ color: "white" }}>
                        Register
                    </div>

                    <div className='register-row'>
                        <Input placeHolder="First name"
                            _placeholder={{ marginLeft: "5%", color: "white" }}
                            borderColor="#211F22"
                            borderBottomColor="white"
                            borderRadius="0%"
                            color="white"
                            _hover={{ borderColor: "none" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderBottomColor: "white" }}
                            marginRight="2%"
                        />

                        <Input placeHolder="Middle name (Optional)"
                            _placeholder={{ marginLeft: "5%", color: "white" }}
                            borderColor="#211F22"
                            borderBottomColor="white"
                            borderRadius="0%"
                            color="white"
                            _hover={{ borderColor: "none" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderBottomColor: "white" }}
                            marginLeft="2%"
                        />
                    </div>


                    <div className='register-row'>
                        <Input placeHolder="Last name"
                            _placeholder={{ marginLeft: "5%", color: "white" }}
                            borderColor="#211F22"
                            borderBottomColor="white"
                            borderRadius="0%"
                            color="white"
                            _hover={{ borderColor: "none" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderBottomColor: "white" }}
                            marginRight="2%"
                        />

                        <Input placeHolder="Email"
                            _placeholder={{ marginLeft: "5%", color: "white" }}
                            borderColor="#211F22"
                            borderBottomColor="white"
                            borderRadius="0%"
                            color="white"
                            _hover={{ borderColor: "none" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderBottomColor: "white" }}
                            marginLeft="2%"
                        />
                    </div>


                    <div className='register-row'>
                        <Input placeHolder="Password"
                            type="password"
                            _placeholder={{ marginLeft: "5%", color: "white" }}
                            borderColor="#211F22"
                            borderBottomColor="white"
                            borderRadius="0%"
                            color="white"
                            _hover={{ borderColor: "none" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderBottomColor: "white" }}
                            marginRight="2%"
                        />

                        <Input placeHolder="Confirm Password"
                            type="password"
                            _placeholder={{ marginLeft: "5%", color: "white" }}
                            borderColor="#211F22"
                            borderBottomColor="white"
                            borderRadius="0%"
                            color="white"
                            _hover={{ borderColor: "none" }}
                            focusBorderColor="#211F22"
                            _focus={{ borderBottomColor: "white" }}
                            marginLeft="2%"
                        />
                    </div>



                    {/* <div className='register-forget'>
                        Forgot Password
                    </div> */}

                    <div className='register-bottom'>
                        <div className='register-left'>

                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <Button color="white" backgroundColor="#BC312E">Register</Button>
                            </div>

                            <Link to="/Login">
                                <div className='register-newuser'>
                                    Already registered?<label style={{ color: "#BC312E" }}> Login</label>
                                </div>
                            </Link>
                        </div>

                        <div className='register-right'>
                            <div style={{ width: "100%" }}>
                                <img src={Register_img2} />
                            </div>
                            <div className='register-imgs'>
                                <div>
                                    <img src={L1} style={{ width: "80%" }} />
                                </div>
                                <div>
                                    <img src={L2} style={{ width: "80%" }} />
                                </div>
                                <div>
                                    <img src={L3} style={{ width: "80%" }} />
                                </div>
                                <div>
                                    <img src={L4} style={{ width: "80%" }} />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
