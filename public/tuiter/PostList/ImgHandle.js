const ImgHandle = (post) => {
    if(post.postHeading == '' && post.desc =='' && post.link=='')
        return ''
    else
        return(`

            <div class="wd-pad">
                <p id="sub-title">${post.subheading}</p>
                <p>${post.desc}</p>
                <a><i class="fas fa-link"></i>${post.link}</a>
            </div>

        `)
};

export default ImgHandle;