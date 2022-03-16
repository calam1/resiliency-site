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