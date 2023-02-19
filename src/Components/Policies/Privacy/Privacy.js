import React from 'react'
import "../Terms/Terms.css"
import Privacy_img1 from "../PoliciesImages/Privacy_img1.png"
import Privacy_img2 from "../PoliciesImages/Privacy_img2.png"
import Privacy_img3 from "../PoliciesImages/Privacy_img3.png"
import Terms_img2 from "../PoliciesImages/Terms_img2.png"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Stack
} from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/react'

export default function Terms({ mode }) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='terms-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <img className="terms-bgimg" src={Privacy_img3} />
            <div className='terms-inner'>
                <div className='terms-content-1' style={{ color: mode === "dark" ? "white" : "black" }}>
                    This Privacy Policy is applicable to the website(s) and mobile applications (collectively, the "Sites") offered by BigDigitalMedia and/or other BigDigitalMedia group companies ("BigDigitalMedia," "we," or "us"). BigDigitalMedia serves as the data controller for the personal information you share with BigDigitalMedia under this Policy.
                    <br /><br />
                    The Sites consist of www.BigDigitalMedia.com as well as other websites and mobile applications created and managed by BigDigitalMedia.
                    <br /><br />
                    BigDigitalMedia takes user privacy extremely seriously because they understand how essential it is to you. We are dedicated to protecting your personal data in accordance with our Privacy Policy, which refers to any information you give us that can be used to identify you.
                    <br /><br />
                    BigDigitalMedia maintains the right to periodically change and amend this Privacy Policy in its sole discretion. As a result, whenever you visit our sites again, we encourage you to examine the most recent version of the privacy policy.
                    <br /><br />
                    The Policy defines a few terminology along the way. To get a definition of a phrase highlighted in bold, just click on it, or see the definitions at the bottom of this Policy.
                    <br /><br />
                </div>

                <Stack direction="column" spacing={10} marginTop="2%" width={isLargerThan1000 ? "70%" : "80%"} >
                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem" >
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Information we collect & how we use
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Your name, contact information, occupation, firm or academic affiliation, industry, location, and country, as well as your relationship to BigDigitalMedia, purpose for contacting BigDigitalMedia, areas of interest, and any other information you want to submit, may all be collected by BigDigitalMedia. You expressly consent to BigDigitalMedia handling your personal data in line with this Privacy Policy by using our Sites or providing us information. Your personal information may be used by BigDigitalMedia to complete your request, send you marketing materials, handle your job application, or administer your BeyondBigDigitalMedia membership.
                                <br /><br />
                                When you use the Sites to request information from BigDigitalMedia or to provide information to BigDigitalMedia, such as when you fill out a form requesting consulting expertise, agree to receive emails from BigDigitalMedia, take surveys, join our alumni community, BeyondBigDigitalMedia, or apply for a job at BigDigitalMedia, BigDigitalMedia collects personal data from you.
                                <br /><br />
                                Your name, email address, title, occupation, affiliation with a company or university, industry, region, or country are just a few examples of the personal information we may collect from you. We may also ask you for information about your interests in certain topics, any additional background data you may have included with your application, and any other details you include in messages you send us.
                                <br /><br />
                                In accordance with our cookie policy, we may also gather data on how you utilise our websites. Be aware that BeyondBigDigitalMedia is subject to a different cookie policy, which you can read about here.
                                <br /><br />
                                You voluntarily consent to BigDigitalMedia using your personal information in the ways and for the purposes specified in this Privacy Policy by using our Sites and providing us with this information. Sending us any information that you do not want BigDigitalMedia to use is a courtesy.
                                <br /><br />
                                In order to fulfil your request, give you the information you requested, and/or send you marketing materials, BigDigitalMedia will use your personal data. Your data will be handled if you have applied for a position at BigDigitalMedia in order to evaluate and process your application and candidacy for the post you have applied for. Additionally, we could use your data to offer you publications we believe would interest you and to contact with you about BigDigitalMedia events as well as to assess and enhance our hiring and onboarding procedures. The section under "Job Applicants" has further information.
                                <br /><br />
                                For marketing and promotional reasons, BigDigitalMedia may gather personal information and divulge it in aggregate form to third-party service providers. However, we never give these organisations any information that may be used to individually identify you in these circumstances.
                                <br /><br />
                                Your information will be processed if you sign up as a member on BeyondBigDigitalMedia for activities like sending surveys and mailings to alumni specifically as well as keeping and distributing marketing and career development contacts. Other BeyondBigDigitalMedia members could also be able to see your data.
                                <br /><br />
                                You are not required to give us any personal information. But if you don't, we might be unable to deal with your request or offer you the services you need.
                                <br /><br />
                                For as long as it takes to complete your request or as long as we have a business relationship with you, BigDigitalMedia will retain your personal information. BigDigitalMedia will retain the personal information related to your application for a position with them for up to five years.
                                <br /><br />
                                Please be aware that BigDigitalMedia is not liable for any information you choose to make public on message boards, chat rooms, or other similar websites, including those that are hosted on or linked to our Sites. Whenever you openly provide information about yourself online (for instance, via message boards or chat rooms), you should be aware that this information might be gathered and exploited by strangers. Additionally, along with the poster's name and content, certain message boards and related user forums may also display IP addresses. If there are any message boards, chat rooms, or other user forums on the Sites, users may reveal information there. BigDigitalMedia is not liable for any actions or policies taken by third parties who obtain this information.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Use of cookies on the Sites
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                When you explore our sites, we could gather specific types of information using cookies or other technologies ("cookies"). Our Cookie Policy contains details on the data that is gathered and how it is used.
                                <br /><br />
                                Please be aware that a different Cookie Policy, which you can check here, governs how cookies are used on BeyondBigDigitalMedia.                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Who we share your personal data with
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                We may share your personal information with other BigDigitalMedia group companies as well as with other parties that may reside in a different country than your home country. Your data won't be shared or sold by BigDigitalMedia to a third party for that company's own purpose.
                                <br /><br />
                                We may share your personal data with others, such as:
                                <br /><br />
                                Other offices in the BigDigitalMedia group <br />
                                - Carefully chosen third-party service providers, such as marketers (if you have subscribed to our marketing communications), IT system providers, recruitment service providers, background check providers, data cleansing providers, or event organisers, so they can deliver services to BigDigitalMedia.<br />
                                - Our advisors<br />
                                - Other alumni members if you have chosen to take part in the Alumni network.<br />
                                - When needed, we may provide over information to law police or other governmental entities.<br />
                                <br /><br />
                                Your personal information will only be handled by third parties other than law enforcement or government agencies on behalf of BigDigitalMedia and only for the purposes outlined in this Policy. Your personal information won't be sold to or otherwise shared by BigDigitalMedia with these third parties for their own purposes.
                                <br /><br />
                                It's possible that the businesses in the BigDigitalMedia group and other third parties with whom we share your information are situated in nations that do not provide the same level of protection for your personal information as your own. When that occurs, BigDigitalMedia makes sure that your personal information is secured by employing the proper legal procedures. Use of contracts or language endorsed by the European Commission is one of these techniques if you live in the European Union.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Links to othr websites
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                Links to third-party websites that are subject to their own terms and privacy policies may be found on our sites. BigDigitalMedia disclaims all liability and responsibility for the information on these websites or your use of them.
                                <br /><br />
                                Links to external websites, such as social networking sites, may be found on the Sites. You should read the terms of use and privacy policies of such websites before using them or providing them with any personal information. BigDigitalMedia disclaims all liability for these websites' privacy policies. A link to a third-party website does not imply that BigDigitalMedia approves of its content or assumes any liability related to its usage. BigDigitalMedia disclaims all liability and responsibility for the use of these websites by you or for the material thereon.                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Security of your personal data
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                BigDigitalMedia has put in place the necessary organisational and technological security measures to safeguard your personal information from theft, misuse, modification, or destruction.
                                <br /><br />
                                BigDigitalMedia has put in place the necessary organisational and technological security measures to safeguard your personal information from theft, misuse, modification, or destruction. When possible, these procedures include anonymizing or pseudonymizing data. Your personal information will only be accessible to authorised BigDigitalMedia employees and the aforementioned third parties to the degree necessary for them to carry out their duties or render their services. BigDigitalMedia cannot, however, provide an assurance that unauthorised parties won't access your information in spite of these security measures.                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Your Rights                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Depending on where you live, you may be able to request your personal data be accessed, corrected, or erased, as well as object to the processing of your data or ask that it be limited. You may also be able to ask us to cease processing your personal data or to have it deleted if you give us your consent but later change your mind.
                                <br /><br />
                                Use our data subject request form to make your request to exercise your rights.
                                <br /><br />
                                You could be entitled to specific rights in relation to the personal information BigDigitalMedia has about you, depending on where you live. You may, for example, be entitled to ask for access to your information, a copy of it, as well as details about how we use it. You have the right to ask us to update any outdated, inaccurate, or incomplete information we may hold on you. Additionally, you may be able to ask us to cease processing your information, revoke your consent to such processing, and ask us to delete your information.
                                <br /><br />
                                If BigDigitalMedia has personal information about you and you would like to access, correct, stop, or object to the processing of that information as set forth in this Policy, please use our data subject request form to make your request.
                                <br /><br />
                                You can choose not to receive marketing emails from BigDigitalMedia in the future or stop taking part in our programmes by visiting the "preferences" page, which is available in every marketing email you receive from BigDigitalMedia. Alternatively, you may use our data subject request form to submit an opt-out request.
                                <br /><br />
                                Please contact us via our data subject request form if you believe we are handling your information improperly. The opportunity to file a complaint with your national supervisory authority may also be available to you.
                                <br /><br />
                                Please be aware that before fulfilling your request, we will take all necessary procedures to verify your identity.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Jobs Applicants
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                When you apply for a position at BigDigitalMedia, you will be required to provide information about yourself, including your name, contact information, educational background, employment history, and any other background information you choose to disclose with BigDigitalMedia or that may be relevant to your application. We might not be able to complete your application if you do not provide us these information.
                                <br /><br />
                                This data will be used by BigDigitalMedia to evaluate your qualifications for the post for which you have applied. This may involve, without limiting the generality of the aforementioned, (i) comparing your skills and experience to the qualifications needed for the position to which you have applied; and (ii) monitoring feedback and interactions we have with you during the hiring process. Your information may also be used when we examine our internal hiring procedures to decide I which sources of candidates to concentrate on, (ii) how to better integrate and train new hires with various educational and professional backgrounds, and (iii) how to improve our interview model to increase hiring quality. Your information may also be used to send you publications we believe you would find interesting and to contact with you about BigDigitalMedia events.
                                <br /><br />
                                Your personal information may be shared with other BigDigitalMedia Group companies as well as outside organisations, including IT system suppliers, background check firms, and recruiting agencies. These BigDigitalMedia businesses and other parties can be situated in a different nation from the one in which you currently reside. Your information will be held in a third party database housed in the Netherlands, specifically if you apply for a consultancy position.
                                <br /><br />
                                Your application data will be kept by us for a maximum of five years. Please fill out the data subject request form if you no longer want BigDigitalMedia to process your data or if you want to exercise your rights.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Alumni (BeyondBigDigitalMedia)
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                BigDigitalMedia will gather information about you if you use the BeyondBigDigitalMedia platform, the online alumni community, including your name, email, home address, past employment details, job title, employer, business address, and any other details you want to provide. Your alumni profile may automatically include any information that BigDigitalMedia already possesses about you that is pertinent to its construction. However, until you confirm your membership, this information won't be made available to other BeyondBigDigitalMedia users. If you were a member of the alumni community before BeyondBigDigitalMedia launched, your information will be shared in line with the privacy preferences you had then.
                                <br /><br />
                                By signing into BeyondBigDigitalMedia and selecting your profile, you may at any moment edit and update the information that is displayed. Please make sure that your information is current and accurate.
                                <br /><br />
                                Your information will be used to manage the BeyondBigDigitalMedia platform, populate the BeyondBigDigitalMedia Directory, communicate BigDigitalMedia developments and events, run recurring alumni surveys, and keep and share marketing and career development connections, among other things.
                                <br /><br />
                                We may share your information with other BigDigitalMedia Group companies as well as carefully chosen outside service providers who host and maintain BeyondBigDigitalMedia and our customer relationship management database.
                                <br /><br />
                                Although you can choose to make some information private, other members of the BeyondBigDigitalMedia community will be able to see some of your information, including event registration. Please don't add or post anything to your profile or anywhere else on BeyondBigDigitalMedia that you wouldn't want other members to be able to see.
                                <br /><br />
                                Your name and the other basic information you supply when you register and create your profile will be included to the Directory. Your name, profile image, present and previous employment information, educational background, and social network links will all be visible to other members via your short profile, unless you specify otherwise in your profile visibility settings. Unless you change your profile visibility settings under the privacy settings, other users won't be able to see the remainder of your personal information. All of the information in your profile that you choose to share with registered members will be visible to other BeyondBigDigitalMedia members after your visibility settings have been changed. By clicking on your profile image and choosing "Privacy," you may change your privacy settings at any moment on your profile.
                                <br /><br />
                                Cookies used by BeyondBigDigitalMedia may be used to collect personal information. Please see BeyondBigDigitalMedia's Cookie Policy for further details on how BigDigitalMedia utilises cookies there as well as how to control your cookie preferences.
                                <br /><br />
                                Please be aware that BeyondBigDigitalMedia contains Google Maps material and services, the usage of which is governed by the most recent iteration of Google's Privacy Policy.
                                <br /><br />
                                If you decide that you no longer want to be a member of BeyondBigDigitalMedia, you may ask for the deletion of your profile by selecting "Reject data privacy terms and deactivate profile" from the platform's Settings menu or by submitting your request by filling out the form designated for data subjects. Please see the section below under "Your Rights" for additional details on your privacy rights and how to exercise them.</AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Children
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                Children under the age of 16 are not intended for our sites. As a result, BigDigitalMedia asks that no information pertaining to anybody under the age of 16 be given to us and will not knowingly collect such information.        </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Contact
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                Please fill out the data subject request form if you have any queries regarding this privacy statement or how BigDigitalMedia handles your personal information.
                                <br /><br />
                                The Global Data Protection Officer at BigDigitalMedia can also be contacted at:
                                <br /><br />
                                Email: DataPrivacy@BigDigitalMedia.com <br />
                                Post: Global Data Protection Officer, Legal Department, BigDigitalMedia & Company, Inc. United Kingdom, 40 Strand, London WC2N 5RW, United Kingdom.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                </Stack>

                {/* </div> */}
            </div>
        </div >
    )
}
