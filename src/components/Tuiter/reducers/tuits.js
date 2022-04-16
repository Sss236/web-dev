import initialState from "../data/tuits.json"

const tuits = (state = initialState, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked == true) {
                        tuit.liked = false;
                        tuit.Likes--;
                    } else {
                        tuit.liked = true;
                        tuit.Likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'delete-tuit':
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const tuit = {
                "_id": (new Date()).getTime() + '',
                "topic": "Web Development",
                "authorName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "date": "2h",
                "link": "",
                "storyCaption": "",
                "subheading": action.tuit,
                "desc": "",
                "profilePic": "https://cdn.iconscout.com/icon/free/png-256/react-2752089-2284906.png",
                "postImage": "",
                "Comments" :111,
                "reTweets": 222,
                "Likes": 333,
            };
            return ([
                    tuit,
                    ...state,
                ]
            );
        default:
            return(state);
    }

};

export default tuits;