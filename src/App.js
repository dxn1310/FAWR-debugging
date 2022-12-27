import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import Textanimation from "./Components/TextAnimation/Textanimation.js"
import Ourservices from './Components/Ourservices/Ourservices.js'
import LightDarkMode from './Components/LightDarkMode.js'


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
      <div>
        <Textanimation />
        <Ourservices />
        {/* <LightDarkMode mode={mode} handleMode={handleMode} /> */}
        {/* <Ourservices mode={mode} /> */}
      </div>
    </ChakraProvider>

  )
}
