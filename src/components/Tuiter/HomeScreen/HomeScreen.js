import React from "react";
import PostList from "../PostList/index.js";
import TuitList from "../TuitList/TuitList.js";
import WhatsHappening from "../whats-happening/index.js";
import './homescreen.css';

const HomeScreen = () => {
    return(
        <>
                <div className="col">
                    <WhatsHappening/>
                    {/* <PostList/> */}
                    <TuitList/>
                </div>
        </>
    );

};

export default HomeScreen;
