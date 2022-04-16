import React from "react";
import NavigationSidebar from "./NavigationSidebar/index.js";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer.js";
import {createStore} from "redux";

import "./tuiter.css";
import WhoToFollowList from "./who-to-follow-list/index.js";

const store = createStore(whoReducer);
const Tuiter = () => {
  return (

    <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        <NavigationSidebar/>
      </div>
      <div className="col-10 col-lg-7 col-xl-6">
        <Outlet />
      </div>
      <div className="d-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
    </div>

  );
};
export default Tuiter;