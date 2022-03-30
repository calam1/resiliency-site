import { useState } from "react";
import { appScores } from "../pages/data";
import Details from "./Details";
// import TopNav from "./TopNav";

const DetailReview = () => {
    // const [clicked, setClicked] = useState("0");

    // const handleToggle = (index) => {
    //     if (clicked === index) {
    //         return setClicked("0");
    //     }
    //     setClicked(index);
    // };

    return (
        <ul className="details">
            {/* <li className="flex flex-row justify-between text-xs font-light ">
                <span className="ml-3">Score</span><span className="-mx-10">App name</span><span className="">External deps</span><span></span>
            </li> */}
            {/* {appScores.map((appScores, index) => ( */}

            {/* <TopNav /> */}
            <Details
            // onToggle={() => handleToggle(index)}
            // active={clicked === index}
            // key={index}
            // appScores={appScores}
            />
            {/* ))} */}
        </ul>
    );
};

export default DetailReview;
