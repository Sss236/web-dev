import React from "react";
import Classes from "./Classes/index.js";
import {Link} from "react-router-dom";
import Styles from "./Styles/index.js";
import ConditionalOutput from "./ConditionalOutput/index.js";
import TodoList from "./Todo/TodoList.js"
import ReduxExamples from "./redux-examples";

//const Labs = () => {
//    return(
const Labs = () => {
     return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/tuiter/home">HomeScreen</Link> |<Link to="/tuiter1">Tuiter</Link>
            <ReduxExamples/>
        </div>
     )
    };
//    <>
//        <h1>Labs</h1>
//        <Classes />
//         <Link to="/labs">
//         Labs
//         </Link> |
//         <Link to="/tuiter">
//         Tuiter
//         </Link>
//    </>
//    )
//};

export default Labs;