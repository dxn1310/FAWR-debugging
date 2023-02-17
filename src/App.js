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
import Web from './Components/Services/Web/Web.js'
import Market from './Components/Services/Market/Market.js'
import Appdev from './Components/Services/Appdev/Appdev.js'
import Cloud from './Components/Services/Cloud/Cloud.js'
import Uxui from './Components/Services/Uxui/Uxui.js'
import Graphic from './Components/Services/Graphic/Graphic.js'
import Animation from './Components/Services/Animations/Animation.js'
import Email from './Components/Services/Email/Email.js'
import Mobile from './Components/Services/Mobile/Mobile.js'
import Search from './Components/Services/Search/Search.js'
import Social from './Components/Services/Social/Social.js'
import Management from './Components/Services/Management/Management.js'
import Operations from './Components/Services/Operations/Operations.js'
import Legal from './Components/Services/Legal/Legal.js'
import Strategy from './Components/Services/Strategy/Strategy.js'
import Financial from './Components/Services/Financial/Financial.js'
import Predictive from './Components/Services/Predictive/Predictive.js'
import Business from './Components/Services/Business/Business.js'
import Speech from './Components/Services/Speech/Speech.js'
import Customer from './Components/Services/Customer/Customer.js'
import Distribution from './Components/Services/Distribution/Distribution.js'
import Reputation from './Components/Services/Reputation/Reputation.js'
import Technology from './Components/Services/Industries/Technology/Technology.js'
import Automotive from './Components/Services/Industries/Automotive/Automotive.js'
import Education from './Components/Services/Industries/Education/Education.js'
import Insurance from './Components/Services/Industries/Insurance/Insurance.js'
import Banking from './Components/Services/Industries/Banking/Banking.js'
import Ecommerce from './Components/Services/Industries/Ecommerce/Ecommerce.js'
import Travel from './Components/Services/Industries/Travel/Travel.js'
import Telecom from './Components/Services/Industries/Telecom/Telecom.js'
import Energy from './Components/Services/Industries/Energy/Energy.js'
import Life from './Components/Career/Life/Life.js'
import Student from './Components/Career/Student/Student.js'
import Diversity from './Components/Career/Diversity/Diversity.js'
import Learning from './Components/Career/Learning/Learning.js'
import Login from './Components/Profile/Login/Login.js'
import Register from './Components/Profile/Register/Register.js'
import Sustainability from './Components/Sustainability/Sustainability.js'
import Environmental from './Components/Policies/Environmental/Environmental.js'
import Contact from './Components/Contact/Contact.js'
import Office from './Components/Contact/Office/Office.js'
import Global from './Components/AboutPages/Global/Global.js'
import Overview from './Components/AboutPages/Overview/Overview.js'
import Leadership from './Components/AboutPages/Leadership/Leadership.js'
import Vission from './Components/AboutPages/Vission/Vission.js'
import Charter from './Components/AboutPages/Chater/Charter.js'
import Reach from './Components/AboutPages/Reach/Reach.js'
import Alliance from './Components/AboutPages/Alliance/Alliance.js'
import SocialI from './Components/AboutPages/Social/SocialI.js'
import Believe from './Components/AboutPages/Believe/Believe.js'
import Whatwedo from './Components/AboutPages/Whatwedo/Whatwedo.js'
import Fresher from './Components/LandingPage/Navbar/NavbarOptions/Aboutoption/AboutextraPages/Fresher/Fresher.js'
import Professional from './Components/LandingPage/Navbar/NavbarOptions/Aboutoption/AboutextraPages/Professional/Professional.js'
import Heathcare from './Components/Services/Industries/Healthcare/Heathcare.js'
import Media from './Components/Services/Industries/Media/Media.js'
import Airline from './Components/Services/Industries/Airline/Airline.js'
import Aboutus from './Components/AboutPages/Aboutus/Aboutus.js'
import Success from './Components/AboutPages/Success/Success.js'



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
          <Route path="/Environmental Policy" element={<Environmental />} />

          <Route path="/About Options" element={<Aboutoption />} />
          <Route path="/Solution Options" element={<Solutionoption />} />
          <Route path="/Career Options" element={<Careeroption />} />
          <Route path="/Explore Options" element={<Exploreoption />} />

          <Route path="/Sitemap" element={<Sitemap />} />

          <Route path="/Contact Us" element={<Contact />} />
          <Route path="/Our Offices" element={<Office />} />

          <Route path="/Global Affiliation" element={<Global />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Vision, Mission & Values" element={<Vission />} />
          <Route path="/Policy & Charters" element={<Charter />} />
          <Route path="/Reach Us" element={<Reach />} />
          <Route path="/Alliance" element={<Alliance />} />
          <Route path="/Social Impact" element={<SocialI />} />
          <Route path="/What we believe" element={<Believe />} />
          <Route path="/What we do" element={<Whatwedo/>} />
          <Route path="/About Us" element={<Aboutus/>} />
          <Route path="/Success Stories" element={<Success/>} />

          <Route path="/Opportunities for Freshers" element={<Fresher/>} />
          <Route path="/Experienced Professional" element={<Professional/>} />



          <Route path="/Research Intelligence Services" element={<Research />} />
          <Route path="/DevOps" element={<Devops />} />
          <Route path="/Blockchain Development Services" element={<Blockchain />} />
          <Route path="/Video Services" element={<Video />} />
          <Route path="/Web Development Services" element={<Web />} />
          <Route path="/Marketing Automation Services" element={<Market />} />
          <Route path="/App Development Services" element={<Appdev />} />
          <Route path="/Cloud Storage & Management Services" element={<Cloud />} />
          <Route path="/UX / UI Design Services" element={<Uxui />} />
          <Route path="/Graphic Design Services" element={<Graphic />} />
          <Route path="/Animations Services" element={<Animation />} />
          <Route path="/Email Marketing Services" element={<Email />} />
          <Route path="/Mobile Marketing Services" element={<Mobile />} />
          <Route path="/Search Engine Marketing Services" element={<Search />} />
          <Route path="/Social Media Marketing Services" element={<Social />} />
          <Route path="/Management Consultant Services" element={<Management />} />
          <Route path="/Operations Consultant Services" element={<Operations />} />
          <Route path="/Legal Consultant Services" element={<Legal />} />
          <Route path="/Strategy Consultant Services" element={<Strategy />} />
          <Route path="/Financial Advisory Services" element={<Financial />} />
          <Route path="/Predictive Analysis Services" element={<Predictive />} />
          <Route path="/Business Intelligence Services" element={<Business />} />
          <Route path="/Speech & Text Analytics Services" element={<Speech />} />
          <Route path="/Customer Segmentation Services" element={<Customer />} />
          <Route path="/Distribution Strategy Services" element={<Distribution />} />
          <Route path="/Reputation Consultation Services" element={<Reputation />} />


          <Route path="/Technology" element={<Technology />} />
          <Route path="/Automotive" element={<Automotive />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/Banking & Finance" element={<Banking />} />
          <Route path="/E-Commerce" element={<Ecommerce />} />
          <Route path="/Travel,Transport & Logistics" element={<Travel />} />
          <Route path="/Telecom" element={<Telecom />} />
          <Route path="/Energy & Utilities" element={<Energy />} />
          <Route path="/Healthcare" element={<Heathcare />} />
          <Route path="/Media & Entertainment" element={<Media />} />
          <Route path="/Airline" element={<Airline />} />


          <Route path="/Life@BDM" element={<Life />} />
          <Route path="/Student / Intern Program" element={<Student />} />
          <Route path="/Diversity & Inclusion" element={<Diversity />} />
          <Route path="/Learning & Development" element={<Learning />} />


          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />


          <Route path="/Sustainability @ BDM" element={<Sustainability />} />

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
