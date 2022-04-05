import { useState } from "react";
import { appScores } from "../pages/dataSingle";
import SummaryAccordionItem from "./SummaryAccordionItem";

const SummaryAccordion = () => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <ul className="accordion">
            {/* <li className="flex flex-row justify-between text-xs font-light "> */}
            {/* <span className="ml-3">Score</span><span className="-mx-10">App name</span><span className="">External deps</span><span></span> */}
            {/* </li> */}
            {appScores.map((appScores, index) => (

                <SummaryAccordionItem
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                    key={index}
                    appScores={appScores}
                />
            ))}
        </ul>
    );
};

export default SummaryAccordion;
