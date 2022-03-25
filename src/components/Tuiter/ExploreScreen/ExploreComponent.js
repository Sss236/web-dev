import PostSummaryList from "../PostSummaryList/index.js";
import "../navigation.css";
import React from "react";

const ExploreComponent = () => {
    return(
        <>
             <div className="row">
                <div className="col">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback "
                            style={
                                {
                                    color: "rgba(0,0,0,0.48)"
                                }
                            }
                        ></span>
                        <input type="text" className="form-control rounded-pill wd-search-link" placeholder="Search Twitter"/>
                    </div>
                </div>
                <div className="col-1 wd-float-left">
                    <a href="#" className="wd-float-left mt-2"> <i className="fas fa-cog fa-1x"
                        style={
                            {
                                color: "#ffffff"
                            }
                        }
                        ></i> </a>
                </div>
            </div>
           <ul className="nav nav-tabs navbar-expand-sm navbar-expand-md navbar-expand-xl navbar-expand-xxl nav-style mx-2 mt-2">
                <li className="nav-item ">
                    <a className="nav-link active"
                        style={
                            {backgroundColor: "black",
                             color: "white",
                             borderTop: "0",
                             borderLeft: "0",
                             borderRight:"0",
                             borderBottomColor: "#0a53be",
                             borderBottomWidth: "thick"}
                        } href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-style" href="#">Trending</a> </li>
                <li className="nav-item">
                    <a className="nav-link nav-style" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-style" href="#">Sports</a>
                </li>
                <li className="nav-item d-sm-none d-md-block">
                    <a className="nav-link nav-style" href="#">Entertainment</a>
                </li>
            </ul>

            <div className="card mt-2 wd-dark-mode wd-card-style">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="card-img-top wd-card-style" alt="..."/>
                <div className="card-body wd-card-style">
                    <div className="list-group">
                        <PostSummaryList/>
                    </div>
                </div>
            </div>
    </>
    );
}
export default ExploreComponent;
