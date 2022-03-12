import DarkToggle from "./DarkToggle";
import { useState } from "react";
import Link from "next/link"; // import state
import LogoAcme from "./logo/LogoAcme";


export default function TopNav() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (
        <div className="container flex flex-shrink ken-customizations items-center justify-between py-2 px-2">

            {/*<div className="ml-2.5 px-5">*/}
            {/*<LogoAcme isLink={true} scale="0.7" />*/}
            <LogoAcme/>
            {/*<div className="relative px-5">*/}
            {/*    <Link href="/">*/}
            {/*        /!*<img  src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />*!/*/}
            {/*        <img src="" alt="ACME" width="120" />*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/*<a href="/">*/}
            {/*    <img src="https://designbygio.it/images/logo.png" alt="logo"/>*/}
            {/*    <img  src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />*/}
            {/*</a>*/}
            <nav>
                <section className="MOBILE-MENU flex md:hidden lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/about">About</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/portfolio">Portfolio</a>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </section>

                {/*<ul className="DESKTOP-MENU hidden space-x-8 lg:flex">*/}
                {/*    <li>*/}
                {/*        <a href="/about">About</a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="/portfolio">Portfolio</a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="/contact">Contact</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}


                <div className="hidden container md:flex md:flex-row md:items-center md:justify-centers w-auto">
                    <div className="relative group">
                        <button
                            className="flex flex-row items-center w-full py-4  text-sm text-gray-600 text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-sans">
                            <span>First Dropdown</span>
                        </button>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">

                            <div className="px-4 pt-2 pb-2 bg-white bg-white shadow-lg">
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Home</a>
                                </div>
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Away</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            className="flex flex-row items-center w-full py-4  text-sm text-gray-600 text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-sans">
                            <span>Second Dropdown</span>
                        </button>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">

                            <div className="px-4 pt-2 pb-2 bg-white bg-white shadow-lg">
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Home</a>
                                </div>
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Away</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            className="flex flex-row items-center w-full py-4  text-sm text-gray-600 text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-sans">
                            <span>Third Dropdown</span>
                        </button>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">

                            <div className="px-4 pt-2 pb-2 bg-white bg-white shadow-lg">
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Home</a>
                                </div>
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Away</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button
                            className="flex flex-row items-center w-full py-4  text-sm text-gray-600 text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-sans">
                            <span>Fourth Dropdown</span>
                        </button>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">

                            <div className="px-4 pt-2 pb-2 bg-white bg-white shadow-lg">
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Home</a>
                                </div>
                                <div className="py-1 grid grid-cols-1 gap-4 md:grid-cols-2 text-sm font-light">
                                    <a href="#"
                                        className="block md:inline-block text-gray-600 hover:bg-red-50 ">Away</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex px-6">
                        <DarkToggle />
                    </div>
                </div>


            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      @media (min-width: 767px) { 
      .ken-customizations {
        justify-content: center !important; 
       }
       }
      .ken-customizations {
        width: 100% !important;
        max-width: 100% !important;
      }
      span {
        white-space: nowrap;
      }
    `}</style>
        </div>
    );


}
