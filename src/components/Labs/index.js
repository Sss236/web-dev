import React from "react";
import Classes from "./Classes";
import {Link} from "react-router-dom";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList"


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