import WhoToFollowListItem from "./who-to-follow-list-item.js";
import {useSelector} from "react-redux";
import React from "react";

const selectAllFollows = (state) => state.who;
const WhoToFollowList = () => {
  const who = useSelector(selectAllFollows);
  return(
    <div className="list-group">
        <li className="list-group-item fw-bold border-0">Who to follow</li>
        {
            who.map(who => {
                return (
                    <WhoToFollowListItem who={who}/>
                );
            })
        }
    </div>
  );
};
export default WhoToFollowList;