'use client'
import React, {forwardRef} from "react";
// eslint-disable-next-line react/display-name
const Skills = forwardRef((props) => {
    const {isBlackBg} = props;
    const headingDivColor = isBlackBg ? 'pd-underline-black' : 'pd-underline-white';
    return(
        <div className={`p-all-10  skills-parent-div ${isBlackBg  ? 'bg-light-white':'bg-voilet'}`}  id='skills-parent-div'>
            <div className="w-70v">
                <h2 className={`fs-15 font-mo `}>Experience</h2>
                <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw skill-heading-div">
                    <h2 className={`project-heading-div ${headingDivColor}`}>ZIVAME</h2>
                    <h2 className={`project-heading-div ${headingDivColor}`}>June 2021 - Present</h2>
                </div>
                <div className="margin-top-10 exp-div">
                    <ul className="ul-disc">
                        <li className="m-all-10">
                            As a Web developer of the Zivame's Tech team, Taking on various tasks such as feature development,
                            ensuring code consistency, implementing robust error handling mechanisms, and swiftly addressing production issues and bugs.
                            Utilizing React and Node.js frameworks to build and maintain features, contributing to the overall technological advancement
                            of Zivame's Website.
                        </li>
                        <li className="m-all-10 ">
                            Contributing to the creation of impactful widgets like "View Similar," "NPS," and "Bank Downtime",
                            enhancing the overall user experience on the platform. I also led the integration of GrowthBooks, an A/B testing tool,
                            to drive continuous improvement and optimization efforts.
                        </li>
                        <li className="m-all-10 ">
                            Commitment to excellence and focus on delivering high-quality solutions have been pivotal in maintaining a seamless
                            and reliable user experience on the platform. I aim to continue enhancing Zivame's technological capabilities through
                            meticulous and innovative coding practices.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw skill-heading-div">
                    <h2 className={`project-heading-div ${headingDivColor}`}>INFOSYS</h2>
                    <h2 className={`project-heading-div ${headingDivColor}`}>Dec 2019 - May 2021</h2>
                </div>
                <div className="margin-top-10 exp-div">
                    <ul className="ul-disc">
                    <li className="m-all-10">
                        Managed Talend installed LINUX servers, including maintaining and upgrading remote engines and Talend Studio. This involves ensuring
                        the smooth operation of these systems and promoting jobs to the Production environment after assessing their feasibility for success.
                    </li>
                    <li className="m-all-10 ">
                        Managed Talend installed LINUX servers, including maintaining and upgrading remote engines and Talend Studio. This involves ensuring the
                        smooth operation of these systems and promoting jobs to the Production environment after assessing their feasibility for success.
                    </li>
                    </ul>
                </div>
            </div>
        </div>
            <div className="ml-20 skills-border-div">
                <h1 className={`fs-15 font-mo`}>Skills</h1>
                <div className="d-flex f-d-column">
                    <div className="d-flex">
                        <div className="m-all-10">
                            <h2 className={`project-heading-div ${headingDivColor}`}>Tech stacks</h2>
                            <div className="margin-top-10">
                                <ul className="ul-disc">
                                <li className="m-all-10 ">
                                    HTML, CSS
                                </li>
                                <li className="m-all-10 ">
                                    Javacript
                                </li>
                                <li className="m-all-10">
                                    React JS
                                </li>
                                <li className="m-all-10 ">
                                    Node JS
                                </li>
                                <li className="m-all-10 ">
                                    Mysql
                                </li>
                                <li className="m-all-10 ">
                                    jQuery
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="m-all-10">
                            <h2 className={`project-heading-div ${headingDivColor}`} >Programming Languages</h2>
                            <div className="margin-top-10">
                                <ul className="ul-disc">
                                <li className="m-all-10 ">
                                    C
                                </li>
                                <li className="m-all-10 ">
                                    C++
                                </li>
                                <li className="m-all-10">
                                    Python
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="m-all-10">
                            <h2 className={`project-heading-div ${headingDivColor}`}>Version Control</h2>
                            <div className="margin-top-10">
                                <ul className="ul-disc">
                                <li className="m-all-10 ">
                                    Git
                                </li>
                                <li className="m-all-10 ">
                                    Git Hub
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="m-all-10">
                            <h2 className={`project-heading-div ${headingDivColor}`}>IDE</h2>
                            <div className="margin-top-10">
                                <ul className="ul-disc">
                                <li className="m-all-10 ">
                                    VS Code
                                </li>
                                <li className="m-all-10">
                                    Eclipise
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
});
export default Skills;
