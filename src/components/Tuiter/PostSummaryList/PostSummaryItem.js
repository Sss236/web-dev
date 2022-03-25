const PostSummaryItem = (
        {
            post = {
                 topic: "Web Development",
                 userName: "ReactJS",
                 time: "2h",
                 title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                 image: "../../../images/react-blue.png"
            }
        }) => {
    return(
        <>                  
            <a className="list-group-item">
                <div className="row">
                    <div className="col-10 wd-suggested-posts">
                        <p className="wd-para-font p-0 m-0">{post.topic}</p>
                        <h6 className="p-0 m-0 ">{post.userName}
                        <i className="fas fa-check-circle"></i>
                        <p className="wd-para-font d-inline wd-color-dark-gray small "> - {post.time}</p>
                        </h6>
                        <p className="fw-bold p-0 m-0">{post.title}</p>
                    </div>
                    <div className="col-2">
                        <img className="rounded mx-auto d-block img-fluid"
                        src={post.image} id="wd-main-img"/>
                    </div>
                </div>
            </a>
        </>
    );
}

export default PostSummaryItem;