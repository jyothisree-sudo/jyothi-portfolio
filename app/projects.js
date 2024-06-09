'use client'
import React, { forwardRef } from "react";
const Projects = forwardRef((props) => {
    const {isBlackBg} = props;
    const headingDivColor = isBlackBg ? 'pd-underline-black' : 'pd-underline-white';
     return(
        <div className={`p-all-10 ${isBlackBg ? 'bg-dark-white':'bg-blue'}`}  id='projects-parent-div'>
            <div>
                <h2 className="fs-15 font-mo">Projects</h2>
            </div>
            
            <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw ">
                    <div className={`${headingDivColor}`}>
                        <h2 className={`project-heading-div project-name-div`}> Importable Wishlist Widget with Zustand</h2>
                    </div>
                    <h2  className={`project-heading-div project-du-div ${headingDivColor}`}>Jan, 2024 - March, 2024</h2>
                </div>
                <div className="margin-top-10">
                    <ul className="ul-disc w-78">
                    <li className="m-all-10">
                        Developed a flexible wishlist widget using React JS and Zustand, effectively encapsulating all event handling and API interactions within it.
                    </li>
                    <li className="m-all-10">
                        This widget enables developers to effortlessly integrate it into any part of the project, facilitating the convenient display of wishlist icons.
                    </li>
                    <li className="m-all-10">
                        Implemented a global state management system to handle wishlisted products throughout the entire project, ensuring uniformity and efficiency.
                    </li>
                    <li className="m-all-10">
                        Simplified the codebase by consolidating extensive lines of code into a single, cohesive component, thereby improving readability and maintainability.
                    </li>
                    </ul>
                </div>
            </div>
            <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw">
                <div className={`${headingDivColor}`}>
                    <h2 className="project-heading-div project-name-div">Real-Time Bank Downtime Tracker Widget on Zivame's checkout page</h2>
                    </div>
                    <h2 className={`project-heading-div project-du-div ${headingDivColor}`}>Dec, 2023 - Nov, 2024</h2>
                </div>
                <div className="margin-top-10">
                    <ul className="ul-disc w-78">
                    <li className="m-all-10">
                    Developed a robust real-time notification system that promptly alerts users to any selected bank, card, UPI, net banking, and saved cards.
                    </li>
                    <li className="m-all-10 ">
                    This involved integrating Firebase to retrieve prompts from the Firestore database and implementing jQuery to enhance the interactive features on the client-side, ensuring a seamless user experience.
                    </li>
                    <li className="m-all-10 ">
                    The implementation of this bank downtime widget significantly enhances the checkout process, providing users with timely updates and ensuring transparency regarding potential payment issues. By leveraging
                     Firebase and jQuery, we've streamlined the user journey, promoting trust and confidence in the platform's reliability.
                    </li>
                    </ul>
                </div>
            </div>
            <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw ">
                    <div className={`${headingDivColor}`}>
                        <h2 className="project-heading-div project-name-div">Survey Page of Delivered Orders</h2>
                    </div>
                    <h2 className={`project-heading-div project-du-div ${headingDivColor}`}>Oct, 2023 - Dec, 2024</h2>
                </div>
                <div className="margin-top-10">
                    <ul className="ul-disc w-78">
                    <li className="m-all-10">
                        Designed and implemented a survey page using React JS with server-side rendering capabilities.
                    </li>
                    <li className="m-all-10">
                    Created event triggers and logic to dynamically update the UI based on user ratings and preferences, ensuring a tailored and responsive experience
                    </li>
                    <li className="m-all-10">
                        Enhanced customer engagement and satisfaction by providing a user-friendly platform for feedback, contributing to improved service quality and customer retention.
                    </li>
                    <li className="m-all-10 text-underline pointer">
                        <a target="_blank" href='https://www.zivame.com/survey/questions' className="f-italic">You can visit my survey page by clicking here</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw ">
                <div className={`${headingDivColor}`}>

                    <h2 className="project-heading-div project-name-div">Growthbook Integration for A/B Testing </h2>
                </div>
                    <h2 className={`project-heading-div project-du-div ${headingDivColor}`}>Apr, 2023 - May, 2023</h2>
                </div>
                <div className=" margin-top-10">
                    <ul className="ul-disc w-78">
                    <li className="m-all-10">
                    Integrated Growthbook, an A/B testing tool, into the project's React JS client-side and Node JS server-side environments. This integration
                     facilitated the segmentation of customers into groups for experimentation and the collection of user interaction data.
                    </li>
                    <li className="m-all-10">
                    Conducted various experiments, such as displaying videos and adjusting widget positions for different user groups.
                     Collected experiment data through Google Tag Manager and visualized insights on the MoEngage dashboard.
                    </li>
                    <li className="m-all-10">
                    This integration enables developers to easily initiate experiments and obtain valuable
                     data insights for specific project features or widgets, fostering informed decision-making and continuous improvement.
                    </li>
                    </ul>
                </div>
            </div>
            <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw ">
                <div className={`${headingDivColor}`}>

                    <h2 className="project-heading-div project-name-div">View similar widget on Zivame's Product Page. </h2>
                </div>
                    <h2 className={`project-heading-div project-du-div ${headingDivColor}`}>June, 2022 - June, 2022</h2>
                </div>
                <div className="margin-top-10">
                    <ul className="ul-disc w-78">
                    <li className="m-all-10">
                        Developed a 'View Similar' widget using React JS for the client side and Node JS for the server side. This widget helps users discover products similar to the ones they're viewing, with filters for style, brand, price, and color.
                    </li>
                    <li className="m-all-10">
                    To ensure smooth functionality, I employed React JS's create portal feature to seamlessly manage interactions between icons and screens across two separate components.
                    </li>
                    <li className="m-all-10">
                        One of the key accomplishments was adapting the widget's UI to fit various screen sizes, including mobile sites and desktop layouts.
                        Additionally, I implemented robust error handling to gracefully manage scenarios like when no products match the selected filters.
                    </li>
                    <li className="m-all-10">
                        Overall, the widget enhances the user experience by providing intuitive access to related products, regardless of device or filter criteria."
                    </li>
                    <li className="m-all-10 text-underline pointer">
                        <a target="_blank" href='https://www.zivame.com/rosaline-serenity-woven-pyjama-set-jet-set.html?productId=812403&trksrc=category&trkid=Nightwear&trkorder=best-sellers' className="f-italic">You can visit my view similar widget by clicking here</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="p-all-10">
                <div className="d-flex al-center justify-space-btw ">
                <div className={`${headingDivColor}`}>

                    <h2 className="project-heading-div project-name-div">Automated Seller Registration System with Google Forms Integration</h2>
                </div>
                    <h2 className={`project-heading-div project-du-div ${headingDivColor}`}>Dec, 2023 - Feb, 2024</h2>
                </div>
                <div className="margin-top-10">
                    <ul className="ul-disc w-78">
                    <li className="m-all-10">
                    Developed a seamless registration system for sellers on the Zivame platform, allowing them to register effortlessly by submitting basic details.
                    </li>
                    <li className="m-all-10">
                    Leveraged React JS for the frontend and integrated Google Forms with backend Java scripts to automate the process of capturing and storing user data securely.
                    </li>
                    <li className="m-all-10">
                    The system ensures a smooth user experience while maintaining data integrity and security.
                    </li>
                    <li className="m-all-10 text-underline pointer">
                        <a target="_blank" href='https://www.zivame.com/seller.html' className="f-italic">You can visit my seller form by clicking here</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
});
export default Projects;
