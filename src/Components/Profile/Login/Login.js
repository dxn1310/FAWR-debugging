import React from 'react'
import "./Login.css"

import Login_img1 from "./LoginImages/Login_img1.png"
import Login_img2 from "./LoginImages/Login_img2.png"

import L1 from "./LoginImages/1.png"
import L2 from "./LoginImages/2.png"
import L3 from "./LoginImages/3.png"
import L4 from "./LoginImages/4.png"

import { NavLink as Link } from 'react-router-dom'

import { Input, Button } from '@chakra-ui/react'

export default function Login() {
    return (
        <div className='login-outer'>
            <div className='login-bgimg'>
                <div className="login-box">
                    <div className='login-box-title' style={{ color: "white" }}>
                        Login
                    </div>
                
                    <Input placeHolder="Email"
                        _placeholder={{ marginLeft: "5%", color: "white" }}
                        borderColor="#211F22"
                        borderBottomColor="white"
                        borderRadius="0%"
                        color="white"
                        _hover={{ borderColor: "none" }}
                        focusBorderColor="#211F22"
                        _focus={{ borderBottomColor: "white" }}
                    />

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
                    />
                    <div className='login-forget'>
                        Forgot Password
                    </div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Button color="white" backgroundColor="#BC312E">Login</Button>
                    </div>
                    <div style={{ width: "100%" }}>
                        <img src={Login_img2} />
                    </div>
                    <div className='login-imgs'>
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

                    <div className='login-newuser' style={{ width: "100%" }}>
                        <Link to="/Register">
                            <label style={{ width: "100%", cursor: "pointer" }}>
                                New User? <label style={{ color: "#BC312E", cursor: "pointer" }}> Register</label>
                            </label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
