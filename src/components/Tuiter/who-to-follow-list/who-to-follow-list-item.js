import React from "react";
const WhoToFollowListItem = (
  {
     who = {
         avatarIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/2048px-NASA_Wormball_logo.svg.png",
         userName: 'NASA',
         handle: 'NASA',
     }
  }) => {
     return(
         <li className="list-group-item p-0 m-0 ps-3 pe-3">
             <div className="row mt-2">
                 <div className="col-2 mt-auto mb-auto p-1">
                     <img src = {who.avatarIcon} className="img-fluid rounded-circle"
                            style = {
                                {
                                    width : "48px",
                                    height : "48px"
                                }
                            }/>
                 </div>
                 <div className="col-6 m-0 ps-1">
                     <p className="fw-bold m-0 p-0">{who.userName}<i className="fas fa-check-circle ms-2"></i></p>
                     <p className="m-0 p-0">{who.handle}</p>
                 </div>
                 <div className="col-4">
                      <button className="btn btn-primary rounded-pill">Follow
                     </button>
                 </div>
             </div>
         </li>
     );
 }
 export default WhoToFollowListItem;