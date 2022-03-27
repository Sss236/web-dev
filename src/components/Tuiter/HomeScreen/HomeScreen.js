import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";
import "../navigation.css";

const HomeScreen = () => {
    return(
        <>
             <div className="row mt-2 mb-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6 col-xxl-6 ">
                    <PostList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 p-0">
                    <PostSummaryList/>
                </div>
             </div>
        </>
    );

};

export default HomeScreen;
