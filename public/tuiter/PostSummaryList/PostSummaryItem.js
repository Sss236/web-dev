const PostSummaryItem = (post) => {
    return(`                  
            <a class="list-group-item">
                <div class="row">
                    <div class="col-10 wd-suggested-posts">
                        <p class="wd-para-font p-0 m-0">${post.topic}</p>
                        <h6 class="p-0 m-0 ">${post.userName}
                        <i class="fas fa-check-circle"></i>
                        <p class="wd-para-font d-inline wd-color-dark-gray small "> - ${post.time}</p>
                        </h6>
                        <p class="fw-bold p-0 m-0">${post.title}</p>

                    </div>
                    <div class="col-2">
                        <img class="rounded mx-auto d-block img-fluid"
                        src="${post.image}" id="wd-main-img">
                    </div>
                </div>
            </a>

    `);
}

export default PostSummaryItem;