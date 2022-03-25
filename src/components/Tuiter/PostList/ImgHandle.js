const ImgHandle = (
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
    }) => {
    if(post.postHeading == "" && post.desc =="" && post.link=="")
        return ""
    else
        return(
            <div class="wd-pad">
                <p id="sub-title">{post.subheading}</p>
                <p>{post.desc}</p>
                <a><i class="fas fa-link"></i>{post.link}</a>
            </div>
        )
};

export default ImgHandle;