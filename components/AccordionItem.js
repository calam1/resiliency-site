import {useRef, useState} from "react";

const AccordionItem = ({faq, active, onToggle}) => {
    const {question, app, version, answer, updated, incidents, fmea, gremlin} = faq;
    const contentEl = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <>


            <div className="">
                <li className={`accordion_item ${active ? "active" : ""}`}>
                    <button className="button" alt={question} onClick={onToggle}>
                        <span className="percentage">{question}</span>
                        <span>{app}</span>
                        <span>{version}</span>
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

                        <div className="answer hidden md:flex md:flex-col " alt={question}>
                            <div id="myTable" className="">
                                <div className="text-xs font-thin text-left">Overall Score</div>
                                <div className="text-xs font-thin text-center">FMEA</div>
                                <div className="text-xs font-thin text-center">Gremlin</div>
                                <div className="text-xs font-thin text-center">Updated</div>
                                <div className="text-xs font-thin text-center">Incidents</div>
                            </div>
                            <div id="myTable" className="md:flex">
                                <div className="block">
                                    <span className="mr-1.5">{question}</span>
                                    <span className="passfail" alt={answer}>{answer}</span>
                                </div>
                                <div className="text-center">{fmea}</div>
                                <div className="text-center">{gremlin}</div>
                                <div className="text-center">{updated}</div>
                                <div className="text-center">{incidents}</div>
                            </div>
                        </div>

                        <div className="md:hidden lg:hidden sm:flex md:flex flex justify-between">
                            <div>
                                <div className="text-md font-thin text-left">Overall Score</div>
                                <div className="text-md font-thin text-left">FMEA</div>
                                <div className="text-md font-thin text-left">Gremlin</div>
                                <div className="text-md font-thin text-left">Updated</div>
                                <div className="text-md font-thin text-left">Incidents</div>
                            </div>
                            <div id="">
                                <div className="block text-right">
                                    <span className="mr-1.5">{question}</span>
                                    <span className="passfail" alt={answer}>{answer}</span>
                                </div>
                                <div className="text-right">{fmea}</div>
                                <div className="text-right">{gremlin}</div>
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
