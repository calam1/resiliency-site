import {useRef, useState} from "react";
import Kafka from "./logo/Kafka";
import Mongodb from "./logo/Mongodb";
import Postgresql from "./logo/Postgresql";

const AccordionItem = ({appScores, active, onToggle}) => {
    const {score, app, version, passfail, updated, incidents, fmea, gremlin, gamedays} = appScores;
    const contentEl = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <>
            <div>

                <li className={`accordion_item ${active ? "active" : ""}`}>
                    <button className="button" alt={score} onClick={onToggle}>
                        <span className="percentage font-bold">{score}</span>
                        <span>{app}</span>
                        <div className="flex flex-row justify-evenly">
                            <span><Kafka/></span><span><Mongodb/></span><span><Postgresql/></span>
                        </div>
                        <span className="control">{active ? "Details —" : "Details +"} </span>
                    </button>
                    <div
                        ref={contentEl}
                        className="answer_wrapper"
                        style={
                            active
                                ? {height: contentEl.current.scrollHeight}
                                : {height: "0px"}
                        }
                    >

                        <div className="answer hidden md:flex md:flex-col" alt={score}>
                            <div id="myTable">
                                <div className="text-xs font-thin text-left">Overall Score</div>
                                <div className="text-xs font-thin text-center">FMEA</div>
                                <div className="text-xs font-thin text-center">Gremlin</div>
                                <div className="text-xs font-thin text-center">Gamedays</div>
                            </div>
                            <div id="myTable" className="md:flex">
                                <div className="block">
                                    <span className="mr-1.5 text-xl">{score}</span>
                                    <span className="passfail" alt={passfail}>{passfail}</span>
                                </div>
                                <div className="text-center text-xl">{fmea}</div>
                                <div className="text-center text-xl">{gremlin}</div>
                                <div className="text-center text-xl">{gamedays}</div>
                            </div>
                        </div>
                        <div className="answer hidden md:flex justify-between" alt={score}>
                            <div>
                                <span className="text-xs font-thin text-gray-500 mr-1.5">Updated</span>
                                <span className="mr-4">{updated}</span>
                                <span className="text-xs font-thin mr-1.5 text-gray-500">Incidents</span>
                                <span className="">{incidents}</span>
                            </div>
                            <div>
                                <a className="border-2 p-1.5 text-white bg-black border-transparent" href='#'>Read report</a>

                            </div>
                        </div>

                        <div className="answer lg:hidden sm:flex md:flex flex justify-between" alt={score}>
                            <div>
                                <div className="text-md font-thin text-left">Overall Score</div>
                                <div className="text-md font-thin text-left">FMEA</div>
                                <div className="text-md font-thin text-left">Gremlin</div>
                                <div className="text-md font-thin text-left">Gamedays</div>
                                <div className="text-md font-thin text-left">Updated</div>
                                <div className="text-md font-thin text-left">Incidents</div>
                            </div>
                            <div id="">
                                <div className="block text-right">
                                    <span className="mr-1.5">{score}</span>
                                    <span className="passfail" alt={passfail}>{passfail}</span>
                                </div>
                                <div className="text-right">{fmea}</div>
                                <div className="text-right">{gremlin}</div>
                                <div className="text-right">{gamedays}</div>
                                <div className="text-right">{updated}</div>
                                <div className="text-right">{incidents}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </>
    );
};


export default AccordionItem;
