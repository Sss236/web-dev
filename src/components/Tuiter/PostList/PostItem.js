import React from "react";
import "./PostList.css";
import { useDispatch } from "react-redux";

const PostItem = ({tuit}) => {
    const dispatch = useDispatch();

    const likeClickHandler = () => {
        dispatch({
            type: 'like-tuit',
            tuit
        })
    }

    const deleteTuitClickHandler = () => {
        dispatch({
            type: 'delete-tuit',
            tuit
        })
    }

    return(
        <div className="list-group-item d-flex justify-content-start background-color-black">
            <div className="d-flex flex-column mt-2">
                <img className="profile-icon-img" src={tuit.profilePic}/>
            </div>
            <div className="d-flex flex-column flex-grow-1">
                <div className="row mb-2 mt-2">
                    <span className="d-flex justify-content-start">{tuit.authorName}
                        <i className="fas fa-check-circle"></i>
                        <span className="text-muted fw-normal">
                            {tuit.handle} - {tuit.date}
                        </span>
                        <span className="ms-auto"><i className="fa fa-remove" onClick={deleteTuitClickHandler}></i></span>
                    </span>
                    <span className="no-link-decor" dangerouslySetInnerHTML={ {__html: tuit.headLink} }>
                    </span>
                    {tuit.subheading !== "" && <p className="mt-0 mb-1 pt-2"> {tuit.subheading} </p>}
                                    {tuit.subheading === "" && ''}
                </div>

               {tuit.postImage !== "" &&
            <div className="row border border-round ms-1 me-1 mb-3">

                    {tuit.postImage !== "" &&  <img className= "img-fluid ps-0 pe-0 border border-round border-left-0 border-right-0 border-top-only post-img"
                        src={tuit.postImage}/>}
                    {tuit.postImage === "" && <span className= "ps-0 pe-0" />}
                    <div className="">
                    {tuit.subheading !== "" && <p className="mt-0 mb-1 pt-2"> {tuit.subheading} </p>}
                    {tuit.subheading === "" && ''}


                    {tuit.desc !== "" && <p className="text-muted mb-1"> {tuit.desc}</p>}
                    {tuit.desc === "" && ''}

                    {tuit.link !== "" && <span className="mb-2"> <i className="fas fa-link"></i> {tuit.link} </span>}
                    {tuit.link === "" && ''}
                    </div>

                </div>}
                <div className="d-flex d-row mb-2 ms-2">
                    <span className="flex-grow-1"><i className="far fa-comment"></i> {tuit.Comments}</span>
                    <span className="flex-grow-1"><i className="fas fa-retweet"></i> {tuit.reTweets}</span>
                    <span onClick={likeClickHandler}
                        className="flex-grow-1">
                        {tuit.liked && <i className="fas fa-heart" style={{color:'red'}}></i>}
                        {!tuit.liked && <i className="far fa-heart"></i>}
                        {tuit.Likes}
                    </span>
                    <span className="flex-grow-1"><i className="fas fa-sign-out fa-rotate-270"></i></span>
                </div>
            </div>

        </div>
    );
}

export default PostItem;