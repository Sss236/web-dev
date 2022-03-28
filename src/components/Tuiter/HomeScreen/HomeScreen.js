import React from "react";
import PostList from "../PostList/index.js";
import WhatsHappening from "../whats-happening/index.js";
import './homescreen.css';

const HomeScreen = () => {
    return(
        <>
                <div className="col">
                    <WhatsHappening/>
                    <PostList/>
                </div>
        </>
    );

};

export default HomeScreen;
