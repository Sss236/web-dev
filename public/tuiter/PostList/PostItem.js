import ImgHandle from "./ImgHandle.js";

const  PostItem = (post) => {
    return(`

            <div class="wd-row">
            <div class="wd-col-twentyPercent col-2">
                <img src="${post.profilePic}" class="wd-col-twentyPercent">
            </div>
            <div class="wd-col-eightyPercent col-10" >
                <div class="wd-author col-10">
                    <p id="author-name">${post.authorName}</p>
                    <p id="author-handle">${post.handle}</p>
                    <p id="author-date-post">${post.date}</p>
                    <i class="fa fa-ellipsis-h " style="float: right"></i>
                </div>
                <br>
                <div class="wd-content">
                    <p> ${post.preHeading} <a href="#" class="wd-blue" style="color: blue">${post.headLink}</a> ${post.postHeading}</p>
                </div>

            <div class="wd-border wd-main-image">
            <div>
                <img src="${post.postImage}" class="img-fluid wd-main-image">
            </div>
                ${ImgHandle(post)}
            </div>

                <div class="wd-post-response">
                    <div class="wd-single-response">
                        <a href="#" class="wd-white">
                            <div class="wd-para-row">
                                <i class="far fa-comment wd-para-col"></i><p class="wd-para-col">${post.Comments}</p>
                            </div>
                        </a>
                    </div>
                    <div class="wd-single-response">
                        <a href="#" class="wd-white">
                            <div class="wd-para-row">
                                <i class="fa fa-retweet wd-para-col"></i><p class="wd-para-col">${post.reTweets}</p>
                            </div>
                        </a>
                    </div>
                    <div class="wd-single-response">
                        <a href="#" class="wd-white">
                            <div class="wd-para-row">
                                <i class="far fa-heart wd-para-col"></i><p class="wd-para-col">${post.Likes}</p>
                            </div>
                        </a>
                    </div>
                    <div class="wd-single-response">
                        <a href="#" class="wd-white">
                            <div class="wd-para-row">
                                <i class="fas fa-arrow-up wd-para-col"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    `);
}

export default PostItem;