import React from 'react'
import "./Mediacenter.css"

import MC1 from "./MediacenterImages/MC1.png"
import MC2 from "./MediacenterImages/MC2.png"

export default function Mediacenter() {

    const mediaData = [
        {
            title: "Media name",
            date: "23-Nov-2022",
            text1: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
            text2: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
        },

        {
            title: "Media name",
            date: "23-Nov-2022",
            text1: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
            text2: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
        },

        {
            title: "Media name",
            date: "23-Nov-2022",
            text1: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
            text2: "Lorem ipsum dolor sit amet consectetur. Sed a viverra praesent sed nulla fusce facilisis. Egestas non velit quis pellentesque quis.",
        },
    ]
    return (
        <div className='mc-outer'>
            <div className='mc-bgimg-outer' style={{ width: "100%" }} >
                <img src={MC1} className="mc-bgimg" style={{ width: "100%" }} />
            </div>
            <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                Our subject matter expertise, top-notch research, and business viewpoints have been highlighted in prestigious news outlets all around the world.
            </div>
            <div className='mc-title'>
                <u>Media Contacts</u>
            </div>

            <div className='mc-grid1'>
                <div className='mc-element1'>
                    <div className='mc-element1-top'>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%", fontSize: "500" }}>
                            Person name
                        </div>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            Region/ Area
                        </div>
                    </div>

                    <div className='mc-element1-bottom'>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            person@bdm.com
                        </div>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            +91-1234567890
                        </div>
                    </div>
                </div>

                <div className='mc-element1'>
                    <div className='mc-element1-top'>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%", fontSize: "500" }}>
                            Person name
                        </div>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            Region/ Area
                        </div>
                    </div>

                    <div className='mc-element1-bottom'>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            person@bdm.com
                        </div>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            +91-1234567890
                        </div>
                    </div>
                </div>

                <div className='mc-element1'>
                    <div className='mc-element1-top'>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%", fontSize: "500" }}>
                            Person name
                        </div>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            Region/ Area
                        </div>
                    </div>

                    <div className='mc-element1-bottom'>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            person@bdm.com
                        </div>
                        <div className='mc-text1' style={{ width: "80%", textAlign: "center", marginTop: "5%" }}>
                            +91-1234567890
                        </div>
                    </div>
                </div>
            </div>

            <div className='mc-title'>
                <u>Media Mentions</u>
            </div>

            <div className='mc-grid2'>
                {
                    mediaData.map((item, index) => {
                        return <div className='mc-element2'>
                            <div className='mc-element2-left'>
                                <div className='mc-bgimg-outer' style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                    <img src={MC2} className="mc-bgimg" style={{ width: "90%" }} />
                                </div>
                            </div>
                            <div className='mc-element2-right'>
                                <div className='mc-element2-text1-outer'>
                                    <div className='mc-element2-text1'>{item.title}</div>
                                    <div className='mc-element2-text1'>{item.date}</div>
                                </div>
                                <div className='mc-text1' style={{ marginTop: "5%" }}>
                                    {item.text1}
                                </div>

                                <div className='mc-text2' style={{ marginTop: "3%" }}>
                                    {item.text2}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>

            <div className='mc-title'>
                <u>Press Release</u>
            </div>

            <div className='mc-grid2'>
                {
                    mediaData.map((item, index) => {
                        return <div className='mc-element2'>
                            <div className='mc-element2-left'>
                                <div className='mc-bgimg-outer' style={{ width: "100%" }} >
                                    <img src={MC2} className="mc-bgimg" style={{ width: "90%" }} />
                                </div>
                            </div>
                            <div className='mc-element2-right'>
                                <div className='mc-element2-text1-outer'>
                                    <div className='mc-element2-text1'>{item.title}</div>
                                    <div className='mc-element2-text1'>{item.date}</div>
                                </div>
                                <div className='mc-text1' style={{ marginTop: "5%" }}>
                                    {item.text1}
                                </div>

                                <div className='mc-text2' style={{ marginTop: "3%" }}>
                                    {item.text2}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div >
    )
}
