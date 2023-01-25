import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import Textanimation from "./Components/TextAnimation/Textanimation.js"
import Ourservices from './Components/LandingPage/Ourservices/Ourservices.js'
import LightDarkMode from './Components/LightDarkMode.js'

import Landing from './Components/LandingPage/Landing/Landing.js'

import { Route, Routes } from 'react-router-dom'


import Terms from './Components/Policies/Terms/Terms.js'
import Privacy from "./Components/Policies/Privacy/Privacy"
import Cookie from './Components/Policies/Cookie/Cookie.js'
import Navbar from './Components/LandingPage/Navbar/Navbar.js'
import Footer from './Components/LandingPage/Foooter/Footer.js'

import Accessibility from "./Components/Accessibility/Accessibility"

import Aboutoption from './Components/LandingPage/Navbar/NavbarOptions/Aboutoption/Aboutoption.js'
import Solutionoption from './Components/LandingPage/Navbar/NavbarOptions/Solutionoption/Solutionoption.js'
import Careeroption from './Components/LandingPage/Navbar/NavbarOptions/Careeroption/Careeroption.js'
import Exploreoption from './Components/LandingPage/Navbar/NavbarOptions/Exploreoption/Exploreoption.js'

import Sitemap from './Components/Sitemap/Sitemap.js'


import Research from './Components/Services/Research/Research.js'
import Devops from "./Components/Services/Devops/Devops"
import Blockchain from "./Components/Services/Blockchain/Blockchain"
import Video from "./Components/Services/Video/Video"



export default function App() {
  // const [mode, setMode] = useState("dark")

  // const handleMode = () => {
  //   if (mode === "dark")
  //     setMode("light")
  //   else
  //     setMode("dark")
  // }
  return (
    <ChakraProvider>
      <div style={{ backgroundColor: "#211F22" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/Terms and Conditions" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Cookie Policy" element={<Cookie />} />
          <Route path="/Accessibility" element={<Accessibility />} />

          <Route path="/About Options" element={<Aboutoption />} />
          <Route path="/Solution Options" element={<Solutionoption />} />
          <Route path="/Career Options" element={<Careeroption />} />
          <Route path="/Explore Options" element={<Exploreoption />} />

          <Route path="/Sitemap" element={<Sitemap />} />



          <Route path="/Research Intelligence Services" element={<Research />} />
          <Route path="/DevOps" element={<Devops />} />
          <Route path="/Blockchain Development Services" element={<Blockchain />} />
          <Route path="/Video Services" element={<Video />} />

        </Routes>
        <Footer />
        {/* <Textanimation />
        <Ourservices /> */}
        {/* <LightDarkMode mode={mode} handleMode={handleMode} /> */}
        {/* <Ourservices mode={mode} /> */}
      </div>
    </ChakraProvider>

  )
}
