import {useRef, useState} from "react";

const AccordionItem = ({faq, active, onToggle}) => {
    const {question, app, version, answer, updated, incidents, fmea, gremlin} = faq;
    const contentEl = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <>
            <section className="flex md:hidden lg:hidden">
                <div>
                <li className={`accordion_item ${active ? "active" : ""}`}>
                    <button className="button" onClick={onToggle}>
                        <span className="">{question}</span>
                        <span>{app}</span>
                        <span>{version}</span>
                        <span className="control">{active ? "Details —" : "Details +"} </span>
                    </button>
                    <div
                        ref={contentEl}
                        className="answer_wrapper_mobile"
                        style={
                            active
                                ? {height: contentEl.current.scrollHeight}
                                : {height: "0px"}
                        }
                    >
                        test

                        {/*<div className="answer" alt={question}>*/}
                        {/*    <div id="myTable">*/}
                        {/*        <div className="text-xs font-thin text-left">Mobile Score</div>*/}
                        {/*        <div className="text-xs font-thin text-center">FMEA</div>*/}
                        {/*        <div className="text-xs font-thin text-center">Gremlin</div>*/}
                        {/*        <div className="text-xs font-thin text-center">Updated</div>*/}
                        {/*        <div className="text-xs font-thin text-center">Incidents</div>*/}
                        {/*    </div>*/}
                        {/*    <div id="myTable">*/}
                        {/*        <div className="block">*/}
                        {/*            <span className="mr-1.5">{question}</span>*/}
                        {/*            <span className="passfail" alt={answer}>{answer}</span>*/}
                        {/*        </div>*/}
                        {/*        <div className="text-center">{fmea}</div>*/}
                        {/*        <div className="text-center">{gremlin}</div>*/}
                        {/*        <div className="text-center">{updated}</div>*/}
                        {/*        <div className="text-center">{incidents}</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </li>
            </div>
            </section>







            <div className="hidden container">
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

                        <div className="answer" alt={question}>
                            <div id="myTable">
                                <div className="text-xs font-thin text-left">Overall Score</div>
                                <div className="text-xs font-thin text-center">FMEA</div>
                                <div className="text-xs font-thin text-center">Gremlin</div>
                                <div className="text-xs font-thin text-center">Updated</div>
                                <div className="text-xs font-thin text-center">Incidents</div>
                            </div>
                            <div id="myTable">
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
                    </div>
                </li>
            </div>
        </>
    );
};


export default AccordionItem;
