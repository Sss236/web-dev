import React from "react";
import "../navigation.css";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    return(
        <>
            <div className="list-group" >

                    <a href="https://twitter.com" className="list-group-item list-group-item-action" >
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="../tuiter/home" className="list-group-item list-group-item-action">
                        <i className="fas fa-home"></i>  Home
                    </a>
                    <a href="../tuiter/explore" className="list-group-item list-group-item-action " aria-current="true">
                        <i className="fas fa-hashtag" ></i>  Explore
                    </a>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <i className="fas fa-bell"></i>  Notifications
                    </a>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <i className="fas fa-envelope"></i>  Messages
                    </a>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <i className="fas fa-bookmark"></i>  Bookmarks
                        </a>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <i className="fas fa-list"></i>  Lists
                    </a>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <i className="fas fa-user-alt"></i>  Profile
                    </a>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <i className="fas fa-circle fa-inverse"></i>  More
                    </a>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;

