import Accordion from "../components/Accordion";

function HomePage() {
    // const styles = {
    //     fontFamily: "Roboto"
    // };

    // return (
    //     <div style={styles}>
    //         <Accordion title="Click Me!" content="this is content 1" />
    //         <Accordion title="Click Me!" content="this is content 2" />
    //     </div>
    // );

    return (
        <div className="container">
            <div className="text-4xl">Resiliency Reviews</div>
            <p className="font-thin text-left pt-10 pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>

            <Accordion />
        </div>
    );
}

export default HomePage;

//
// import React from "react";
// import ReactDOM from "react-dom";
//
// import App from "./components/App";
// // styles
// import "./App.css";
//
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root")
// );