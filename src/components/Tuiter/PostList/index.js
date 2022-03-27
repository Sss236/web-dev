import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json";
import "./PostList.css"

const PostList = () => {
    return(
            <div className="list-group">
                {
                    posts.map((post) => {
                        return(
                            <PostItem post={post}/>
                        );
                    })
                }
            </div>
    );
}
export default PostList;
