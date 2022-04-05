import { useRef, useState } from "react";
import Kafka from "./logo/Kafka";
import Mongodb from "./logo/Mongodb";
import Postgresql from "./logo/Postgresql";

const SummaryAccordionItem = ({ appScores, active, onToggle }) => {
    const { score, app, version, passfail, updated, incidents, fmea, gremlin, gamedays } = appScores;
    const contentEl = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <>
            <div>

                <li className={`${active ? "active" : ""}`}>
                    <button className="button" alt={score} onClick={onToggle} control>
                        <span className="ml-16 font-bold">Summary</span>
                        <div className="flex flex-row justify-evenly">
                        </div>
                        <span className="control mr-5 font-bold">{active ? "—" : "+"} </span>

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

                        <div id="subInfo" className="text-sm answer hidden md:flex md:flex-col" alt={score}>
                            Very simply, the audit looks for the following declarations from the developer's site. With these declarations, it is reasonable to trust the smart contracts.
                            <ul className="px-3">
                                <li>Here is my smart contract on the blockchain</li>
                                <li>You can see it matches a software repository used to develop the code</li>
                                <li>Here is the documentation that explains what my smart contract does</li>
                                <li>Here are the tests I ran to verify my smart contract</li>
                                <li>Here are the audit(s) performed to review my code by third party experts</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </div>
        </>
    );
};


export default SummaryAccordionItem;
