import React, { useRef, useState, useEffect } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SummaryAccordion from "../components/SummaryAccordion";
import { appScores } from "../pages/data";


import { useMediaQuery } from "react-responsive";

function Details() {
    const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
    const container = "scrollContainer";

    const menuRef = useRef(null);
    const [menuHeight, setMenuHeight] = useState(0);

    const isMobile = useMediaQuery({
        query: "(max-width: 900px)"
    });


    return (
        <>

            <div className="flex relative right-0 bottom-0 left-0 top-0 justify-center mx-auto overflow-auto" >
                <div name="top" id={container} className="container-fluid justify-center mx-auto md:flex-row flex flex-col overflow-auto border border-box" style={{ flexBasis: "65%", flex: 2 }} >



                    <div ref={menuRef} className="md:w-44  border-r-2 sticky top-0 flex-shrink-0 ">
                        {/* <div ref={menuRef} className="md:w-64  border-r-2 sticky top-0 flex-shrink-0 "> */}


                        {/* <div className="w-60 h-full shadow-md bg-white px-1 absolute" id="sidenavExample "> */}
                        <ul className="relative">
                            <li className="relative" id="sidenavEx1">
                                <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="false" aria-controls="collapseSidenavEx1" to="top">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                                    </svg>
                                    <span>Overview</span>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                    </svg>
                                </Link>
                                {/* <div className="cursor-pointer m-2"><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} offset={isMobile ? - menuHeight : null} */}
                                {/* //                 duration={500} >Test 1</Link></div> */}
                                <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                    <li className="relative">
                                        <Link href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark" to="test1a">Scoring Appendix</Link>
                                    </li>
                                    <li className="relative">
                                        <Link activeClass="active" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" to="test1a" spy={true} smooth={true} offset={isMobile ? - menuHeight : null} duration={100} to="summary" >Summary</Link>

                                    </li>
                                    <li className="relative">
                                        <Link activeClass="active" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" to="test5a" spy={true} smooth={true} offset={isMobile ? - menuHeight : null} duration={100} >Test 5a</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative" id="sidenavEx2">
                                <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx2" aria-expanded="false" aria-controls="collapseSidenavEx2" to="test1">

                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                        <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                                    </svg>
                                    <span>FMEA</span>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                    </svg>
                                </Link>

                                <ul className="relative accordion-collapse collapse" id="collapseSidenavEx2" aria-labelledby="sidenavEx2" data-bs-parent="#sidenavExample">
                                    <li className="relative">
                                        <Link href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark" to="fmea_location">Spreadsheet</Link>
                                    </li>
                                    <li className="relative">
                                        <Link href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark" to="fmea_backlog">Backlog</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="relative" id="sidenavEx3">
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx3" aria-expanded="false" aria-controls="collapseSidenavEx3">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                                    </svg>
                                    <span>Click here 3</span>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                    </svg>
                                </a>
                                <ul className="relative accordion-collapse collapse" id="collapseSidenavEx3" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                                    <li className="relative">
                                        <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Link 5</a>
                                    </li>
                                    <li className="relative">
                                        <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Link 6</a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>







                    <div id={container} className="container justify-center mx-auto md:flex-row flex flex-col overflow-auto" style={{ flexBasis: "65%", flex: 2 }} >

                        <div style={{ flex: 1 }} className="">
                            <div>
                                <div className="px-3 ">
                                    Resiliency Review
                                </div>
                                <div className="px-3 text-3xl flex w-full justify-between">
                                    <div>Application One</div><div className="">95%</div>
                                </div>
                                <div className="px-3 text-sm font-thin">
                                    <td>Author:</td> <td>John Smith</td>
                                </div>
                                <div className="mb-20 px-3 text-sm font-thin">
                                    <td>Date:</td> <td>December 25, 2021</td>
                                </div>
                            </div>

                            <div name="test1" className="overflow-x-auto" >

                                <div>
                                    <div className="text-2xl">Scoring Appendix</div>
                                    <div className="text-sm font-thin">The final review score is indicated as a percentage. The percentage is calculated as Achieved Points due to MAX Possible Points. For each element the answer can be either Yes/No or a percentage. For a detailed breakdown of the individual weights of each question, please consult this document.</div>
                                </div>

                                <table key="test1a" id="test1a" className="container flex justify-center mx-auto flex-col " >
                                    <thead className="bg-gray-50 border">
                                        <tr className="whitespace-nowrap ">
                                            <th className="px-6 py-2 text-xs text-gray-500 border-r font-light">
                                                #
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500 w-full font-light">
                                                Question
                                            </th>
                                            <th style={{ fontSize: "10px" }} className="px-6 py-2 text-gray-500 font-light border-l">
                                                Answer
                                            </th>
                                        </tr>
                                    </thead>
                                    <div className="bg-black text-white px-20 py-2.5 h-10" >
                                        Failure Modes and Effects Analysis
                                    </div>
                                    <tbody className="bg-white border">
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-r">
                                                1
                                            </td>
                                            <td className="px-6 py-4 w-full border-r">
                                                <div className="text-sm text-gray-900">
                                                    Have you completed the FMEA?
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                100%
                                            </td>
                                        </tr>
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t border-r">
                                                2
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900 w-full border-r border-t">
                                                Do you have a backlog of work?
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                90%
                                            </td>
                                        </tr>
                                    </tbody>
                                    <div className="bg-black text-white px-20 py-2.5 h-10" >
                                        Gremlin CircleCi Automated tests
                                    </div>
                                    <tbody className="bg-white border">
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-r">
                                                3
                                            </td>
                                            <td className="px-6 py-4 w-full border-r">
                                                <div className="text-sm text-gray-900">
                                                    Do you have  Gremlin CircleCi Automated tests?
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                100%
                                            </td>
                                        </tr>
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t border-r">
                                                4
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900 w-full border-r border-t">
                                                Do you have k6 tests in your Gremlin pipeline?
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                90%
                                            </td>
                                        </tr>
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t border-r">
                                                5
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900 w-full border-r border-t">
                                                Are you running network, resource, and state tests?
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                90%
                                            </td>
                                        </tr>
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t border-r">
                                                6
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900 w-full border-r border-t">
                                                Are you using EC2s, and if so are you running Gremlin tests against them?
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                90%
                                            </td>
                                        </tr>
                                    </tbody>
                                    <div className="bg-black text-white px-20 py-2.5 h-10" >
                                        Performance Tests
                                    </div>
                                    <tbody className="bg-white border">
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-r">
                                                7
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900  w-full border-r">
                                                Do you run performance tests?
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                100%
                                            </td>
                                        </tr>
                                        <tr className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t border-r">
                                                8
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-900 w-full border-r border-t">
                                                Do you run load tests?
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 border-t ">
                                                90%
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div name="summary" className="container flex justify-center mx-auto flex-col" >
                                <SummaryAccordion />
                            </div>




                            <div name="fmea" className="container flex justify-center mx-auto flex-col text-sm">
                                <div className="bg-black text-white py-2 px-16">Failure Mode & Effects Analysis</div>
                                <div name="fmea_location" className="px-4 py-4" >
                                    <div className="text-bold">Was the Failure Mode & Effects Analysis conducted?</div>
                                    <div className="font-light bg-green-200">Answer: YES</div>
                                </div>
                                <div className="px-4 py-4">
                                    Score Guidance:
                                    <div className="bg-green-200 px-4 py-4">
                                        Yes
                                        There is a link in sharepoint with the FMEA spreadsheet.
                                    </div>
                                    <div className="px-4 py-4">
                                        No
                                        For teams with no FMEA, we recommend that you conduct a FMEA.
                                    </div>

                                </div>
                                <div name="fmea_backlog" className="px-4 py-4" >
                                    <div className="text-bold">Is there a prioritized backlog generated from Failure Mode & Effects Analysis?</div>
                                    <div className="font-light bg-green-200">Answer: YES</div>
                                </div>
                                <div className="px-4 py-4">
                                    Score Guidance:
                                    <div className="bg-green-200 px-4 py-4">
                                        Yes
                                        project is SREC
                                    </div>
                                    <div className="'px-4 py-4">
                                        No
                                        Genereate a prioritized backlog from FMEA.
                                    </div>

                                </div>
                            </div>




                        </div >
                    </div >




                </div>
                {/* </div> */}

                <style>{`
                @media (min-width: 1100px) { 
                `}</style>


            </div>


        </>





    );

}

export default Details;





