import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {createTuit} from "../actions/tuits-actions";

const WhatsHappening = () => {
    let[whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        var newTuit = {
            "dislikes":0,
            "likes":0,
            "tuit":whatsHappening,
            "postedBy":{"username" : "Me"},
        };
        createTuit(dispatch,newTuit);
    }

    return (
        <div className="d-flex justify-content-start">
            <div className="d-flex flex-column mt-1">
                <img className="small-img-icon me-0" src="https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png"/>
            </div>

            <div className="d-flex flex-column flex-grow-1">
                <div className="row mb-2 mt-2 me-1 ms-2">
                    <textarea value={whatsHappening}
                        onChange={(event) =>
                        setWhatsHappening(event.target.value)}
                        className="text-area-custom border-color-gray"
                        placeholder="What's Happening?">
                    </textarea>
                </div>

                <div className="d-flex d-row mb-2 justify-content-between">
                    <div className="d-flex ms-2">
                        <span className="me-2"><i className="far fa-image text-primary"></i></span>
                        <span className="me-2"><i className="fas fa-chart-line text-primary"></i></span>
                        <span className="me-2"><i className="fas fa-smile text-primary"></i></span>
                        <span className="me-2"><i className="far fa-calendar text-primary"></i></span>
                    </div>
                    <button onClick={tuitClickHandler}
                        className="btn btn-primary me-1 rounded-pill">
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WhatsHappening;