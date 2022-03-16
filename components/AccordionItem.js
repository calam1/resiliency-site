import { useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
    const { question, app, version, answer, updated, incidents, fmea, gremlin } = faq;

    const contentEl = useRef();

    return (
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
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >

                <div className="answer" alt={question}>
                    <div id="myTable">
                        <div className="text-xs font-thin text-center"> Overall Score</div>
                        <div className="text-xs font-thin text-center"> FMEA</div>
                        <div className="text-xs font-thin text-center"> Gremlin</div>
                        <div className="text-xs font-thin text-center"> <span>Updated</span></div>
                        <div className="text-xs font-thin text-center"> Incidents</div>
                    </div>
                    <div id="myTable">
                        <div className="inline-block">
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
    );
};

    // question: "95%",
    // app: "App 1",
    // version: "1.2.0",
    // answer: "PASS",
    // updated: "2019-01-01",
    // incidents: 1,
    // fmea: "YES",
    // gremlin: "NO",

export default AccordionItem;
