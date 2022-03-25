import React from "react";
import ImgHandle from "./ImgHandle";

const  PostItem = (
    {
        post = {
                    "profilePic": "../images/falcon9.jpeg",
                    "authorName": "Elon Musk",
                    "handle": "@elonmusk",
                    "date" : "23h",
                    "preHeading" :"Amazing show about",
                    "headLink" : "@Inspiration4x",
                    "postHeading" : "mission!",
                    "postImage":"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSTVj5DHrlahOykYCHrcwL63gTkGzcXodPQgvrJXFqQMFg4Ktgtxmh_fGFJbsMF9BwmIbdW4L17YdJejrxJNwqyEnAP-.jpg?r=3d5",
                    "subheading":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                    "desc":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all civilian orbital space ...",
                    "link":"www.netflix.com",
                    "Comments":"4.2K",
                    "Likes":"37.5K",
                    "reTweets":"3.5K"
        }
    }
    ) => {
    return(
        <>
            <div className="wd-row">
                <div className="wd-col-twentyPercent col-2">
                    <img src={post.profilePic} className="wd-col-twentyPercent"/>
                </div>
                <div className="wd-col-eightyPercent col-10" >
                    <span className="d-flex justify-content-start"> {post.authorName}
                                        <i className="fas fa-check-circle icon-spacing"></i>
                                        <span className="text-muted fw-normal">
                                            {post.handle} - {post.date}
                                        </span>
                                        <span className="ms-auto"><i className="fas fa-ellipsis-h"></i></span>
                    </span>
                    <div className="wd-content">
                        <p> {post.preHeading} <a href="#" className="wd-blue" style={{"color": "blue"}}>{post.headLink}</a> {post.postHeading}</p>
                    </div>
                    <div className="wd-border wd-main-image">
                        <div>
                            <img src={post.postImage} className="img-fluid wd-main-image"/>
                        </div>
                        {ImgHandle(post)}
                    </div>

                    <div className="wd-post-response">
                        <div className="wd-single-response">
                            <a href="#" className="wd-white">
                                <div className="wd-para-row">
                                    <i className="far fa-comment wd-para-col"></i><p className="wd-para-col">{post.Comments}</p>
                                </div>
                            </a>
                        </div>
                        <div className="wd-single-response">
                            <a href="#" className="wd-white">
                                <div className="wd-para-row">
                                    <i className="fa fa-retweet wd-para-col"></i><p className="wd-para-col">{post.reTweets}</p>
                                </div>
                            </a>
                        </div>
                        <div className="wd-single-response">
                            <a href="#" className="wd-white">
                                <div className="wd-para-row">
                                    <i className="far fa-heart wd-para-col"></i><p className="wd-para-col">{post.Likes}</p>
                                </div>
                            </a>
                        </div>
                        <div className="wd-single-response">
                            <a href="#" className="wd-white">
                                <div className="wd-para-row">
                                    <i className="fas fa-arrow-up wd-para-col"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostItem;