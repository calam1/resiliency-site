import DarkToggle from "./DarkToggle";
import { useState } from "react";
import Link from "next/link";
import LogoAcme from "./logo/LogoAcme";


export default function TopNav() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
    return (
        <div className="container flex flex-shrink ken-customizations items-center justify-between py-2 px-2">
            <div className="px-5">
                <Link href="/">
                    <a>
                        <LogoAcme/>
                    </a>
                </Link>
            </div>
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
                                <Link href="/about">
                                    <a>About App</a>
                                </Link>
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

                <div className="hidden container md:flex md:flex-row md:items-center md:justify-centers w-auto">
                    <div className="relative group">
                        <button
                            className="flex flex-row items-center w-full h-8 px-4 text-sm text-gray-600 text-left md:w-auto md:inline md:mt-0 focus:outline-none font-sans">
                            <a href="/about">About</a>
                        </button>
                    </div>

                    <div className="relative group hover:border-gray-600 border-b border-transparent border-0  ">
                        <button
                            className="flex flex-row items-center w-full h-8 px-4 text-sm text-gray-600 text-left md:w-auto md:inline md:mt-0 focus:outline-none font-sans">
                            <span>Resiliency Reviews</span>
                        </button>
                        <div>
                            <ul className="hidden absolute z-10 group-hover:block bg-grey-200 shadow-lg group-hover:block">
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="reviews">App Reviews</a></li>
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="reviewprocess">Review Process</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group hover:border-gray-600 border-b border-transparent border-0 ">
                        <button
                            className="flex flex-row items-center w-full h-8 px-4 text-sm text-gray-600 text-left md:w-auto md:inline md:mt-0 focus:outline-none font-sans">
                            <span>Third Dropdown</span>
                        </button>
                        <div>
                            <ul className="hidden absolute z-10 group-hover:block bg-grey-200 shadow-lg group-hover:block">
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="#">Home</a></li>
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="#">Nowhere some</a></li>
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="#">Away</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative group hover:border-gray-600 border-b border-transparent border-0 ">
                        <button
                            className="flex flex-row items-center h-8 px-4 text-sm text-gray-600 text-left md:w-auto md:inline md:mt-0 focus:outline-none font-sans">
                            <span className="">Fourth Dropdown</span>
                        </button>
                        <div>
                            <ul className="hidden absolute z-10 group-hover:block bg-grey-200 shadow-lg group-hover:block">
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="#">Home</a></li>
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="#">Nowhere some</a></li>
                                <li className="hover:bg-gray-500 hover:text-white font-light text-sm px-4 pt-2 pb-2"><a href="#">Away</a></li>
                            </ul>
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
        width: 100% !important;
        max-width: 100% !important;
      }
      .chris-customizations {
        justify-content: center !important; 
        width: 800px !important;
        max-width: 1000px !important;
      }
      span {
        white-space: nowrap;
      }
    `}</style>
        </div>
    );


}
