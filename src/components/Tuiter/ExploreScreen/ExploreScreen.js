import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../who-to-follow-list/index.js";
import "../tuiter.css";

const ExploreScreen = () => {
    return(
        <div className="row mt-2">

            <div style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>

        </div>
   );
};

export default ExploreScreen;