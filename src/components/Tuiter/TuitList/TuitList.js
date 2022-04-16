import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as service from '../services/tuits-service';
import TuitItem from "./TuitItem";
import {deleteTuit, findAllTuits, createTuit, updateTuit} from "../actions/tuits-actions";
const TuitList = () => {
    const tuits = useSelector(
        state => state.tuitsReducer);
    const dispatch = useDispatch();
    useEffect(() =>
        findAllTuits(dispatch), []);
    return (<div className="list-group">
                {
                    tuits.map && tuits.map(t =>
                        return(
                            <TuitItem data={t}/>
                        );
                    })
                }
            </div>
            );
}


export default TuitList;