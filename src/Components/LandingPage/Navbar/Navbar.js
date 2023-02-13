import { CloseButton, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Navbar.css"

import { ChevronDownIcon, SunIcon, HamburgerIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import { Fade, ScaleFade, Slide, SlideFade, Button, useDisclosure, Box } from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/react'
import Aboutoption from './NavbarOptions/Aboutoption/Aboutoption'
import Solutionoption from './NavbarOptions/Solutionoption/Solutionoption'
import Exploreoption from './NavbarOptions/Exploreoption/Exploreoption.js'
import Careeroption from './NavbarOptions/Careeroption/Careeroption'

import { NavLink as Link } from "react-router-dom"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, IconButton
} from '@chakra-ui/react'


import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

export default function Navbar() {
    const [isLargerThan850] = useMediaQuery('(min-width: 850px)')
    const { isOpen, onToggle } = useDisclosure()
    const [zindex, setZindex] = useState(10)

    const [selectedOption, setSelectedOption] = useState(0)

    const handleZindex = () => {
        if (zindex === 10)
            setZindex(11)
        else
            setZindex(10)
    }

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    return (
        <div className='navbar-outer'>
            <Slide direction='top' in={isOpen} style={{ zIndex: 10 }} transition="5s">
                <Box
                    // p='20px'
                    color='white'
                    mt='20'
                    ml="10%"
                    mr="10%"
                    bg='#211F22'
                    rounded='md'
                    shadow='lg'
                    p="1%"
                >
                    <CloseButton onClick={onToggle} fontSize="20" />
                    {
                        selectedOption === 0 ? <Aboutoption onClick={onToggle} /> :
                            selectedOption === 1 ? <Solutionoption onToggle={onToggle} /> : selectedOption === 2 ?
                                <Exploreoption onClick={onToggle} /> : <Careeroption onClick={onToggle} />
                    }
                </Box>
            </Slide>
            <div className='navbar-left'>
                <Link to="/">
                    <div className='navbar-option'>
                        <Stack direction="row" spacing={5} alignItems="center" display="flex">
                            <Avatar src='https://bit.ly/broken-link' />
                            <div className='navbar-option-text'>
                                Logo
                            </div>
                        </Stack>
                    </div>
                </Link>
            </div>



            <div className='navbar-right'>
                <div className='navbar-option' onClick={(e) => { onToggle(); setSelectedOption(0) }} style={{ zindex: zindex }} >
                    <Stack direction="row" alignItems="center" display="flex" >
                        <div className='navbar-option-text'>
                            About
                        </div>
                        <ChevronDownIcon fontSize="1.5rem" height="100%" />
                    </Stack>
                </div>

                <div className='navbar-option' onClick={(e) => { onToggle(); setSelectedOption(1) }}>
                    <Stack direction="row" alignItems="center" display="flex" >
                        <div className='navbar-option-text'>
                            Solutions
                        </div>
                        <ChevronDownIcon fontSize="1.5rem" height="100%" />
                    </Stack>
                </div>

                <div className='navbar-option'>
                    <Stack direction="row" alignItems="center" display="flex" >
                        <Link to="">
                            <div className='navbar-option-text'>
                                Case study
                            </div>
                        </Link>
                        {/* <ChevronDownIcon fontSize="1.5rem" height="100%" /> */}
                    </Stack>
                </div>

                <div className='navbar-option' onClick={(e) => { onToggle(); setSelectedOption(2) }}>
                    <Stack direction="row" alignItems="center" display="flex" >
                        <div className='navbar-option-text'>
                            Explore
                        </div>
                        <ChevronDownIcon fontSize="1.5rem" height="100%" />
                    </Stack>
                </div>



                <div className='navbar-option' onClick={(e) => { onToggle(); setSelectedOption(3) }}>
                    <Stack direction="row" alignItems="center" display="flex" >
                        <div className='navbar-option-text'>
                            Career
                        </div>
                        <ChevronDownIcon fontSize="1.5rem" height="100%" />
                    </Stack>
                </div>


                <div className='navbar-option'>
                    <Stack direction="row" alignItems="center" display="flex" >
                        <Link to="">
                            <div className='navbar-option-text'>
                                Contact us
                            </div>
                        </Link>
                        {/* <ChevronDownIcon fontSize="1.5rem" height="100%" /> */}
                    </Stack>
                </div>


                <div className='navbar-option1'>
                    <Stack direction="row" alignItems="center" display="flex" >
                        {/* <div className='navbar-option-text'>
                            About
                        </div> */}
                        <SunIcon fontSize="2rem" height="100%" />
                    </Stack>
                </div>




                <div className='navbar-option1'>
                    <Popover placement='bottom-end'>
                        <PopoverTrigger>
                            <Stack direction="row" alignItems="center" display="flex" >
                                <div className='navbar-option-text'>
                                    EN
                                </div>
                                <ChevronDownIcon fontSize="1.5rem" height="100%" />
                            </Stack>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                                <div style={{ color: "black" }}>nniec</div>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>

                <Link to="/Login">
                    <div className='navbar-option'>
                        <Button backgroundColor="#BC312E" color="white" borderRadius="1rem">Sign In</Button>
                    </div>
                </Link>
            </div>


            <div className='navbar-hidden' style={{ display: isLargerThan850 ? "none" : "flex", justifyContent: isLargerThan850 ? "space-between" : "space-between" }}>

                <div className='navbar-left-hidden'>
                    <Menu>
                        <MenuButton
                            width="fit-content">
                            <Stack direction="row" alignItems="center" display="flex" >

                                <HamburgerIcon fontSize="2rem" height="100%" />
                            </Stack>
                        </MenuButton>
                        <MenuList backgroundColor="#211F22" border="none" width="100%">
                            <MenuItem backgroundColor="#211F22">
                                <Stack direction="row" spacing={5} alignItems="center" display="flex">
                                    <Avatar src='https://bit.ly/broken-link' />
                                    <Link to="/">
                                        <div className='navbar-option-text'>
                                            Logo
                                        </div>
                                    </Link>
                                </Stack></MenuItem>

                            <MenuItem backgroundColor="#211F22" >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/About Options">
                                        <div className='navbar-option-text'>
                                            About
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor="#211F22" >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/Solution Options">
                                        <div className='navbar-option-text'>
                                            Solutions
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor="#211F22" >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="">
                                        <div className='navbar-option-text'>
                                            Case Study
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor="#211F22" >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/Explore Options">
                                        <div className='navbar-option-text'>
                                            Explore
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor="#211F22" >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="/Career Options">
                                        <div className='navbar-option-text'>
                                            Career
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>
                            <MenuItem backgroundColor="#211F22" >
                                <Stack direction="row" alignItems="center" display="flex" >
                                    <Link to="">
                                        <div className='navbar-option-text'>
                                            Contact us
                                        </div>
                                    </Link>
                                    <ChevronRightIcon fontSize="1.5rem" height="100%" />
                                </Stack>
                            </MenuItem>

                            <MenuItem backgroundColor="#211F22" width="100%">
                                {/* <div className='navbar-option'> */}
                                <Button backgroundColor="#BC312E" color="white" borderRadius="1rem">Sign In</Button>
                                {/* </div> */}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className='navbar-middle-hidden'>
                    <Stack direction="row" spacing={2} alignItems="center" display="flex">
                        <Avatar src='https://bit.ly/broken-link' />
                        <div className='navbar-option-text'>
                            Logo
                        </div>
                    </Stack>
                </div>

                <div className='navbar-right-hidden'>
                    {/* <div className='navbar-option1'> */}
                    <Stack direction="row" alignItems="center" display="flex" >
                        {/* <div className='navbar-option-text'>
                            About
                        </div> */}
                        <SunIcon fontSize="2rem" height="100%" />
                    </Stack>
                    {/* </div> */}




                    {/* <div className='navbar-option1'> */}
                    <Stack direction="row" alignItems="center" display="flex" >
                        <div className='navbar-option-text'>
                            EN
                        </div>
                        <ChevronDownIcon fontSize="1.5rem" height="100%" />
                    </Stack>
                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}
