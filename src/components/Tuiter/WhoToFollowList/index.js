import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import who from "./who.json";


const WhoToFollowList = () => {
    return (
        <>
            <div className="list-group">
            <a class="list-group-item" href="/"><h6 className="p-0 m-0">Who to follow</h6></a>
            {
                who.map(who => {
                    return(<WhoToFollowListItem who={who}/>);
                })
            }
            </div>
        </>
    ); }

export default WhoToFollowList;

