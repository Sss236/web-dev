import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js"
const WhoToFollowList = () => {
    return (`
            <div class="list-group">
            <a class="list-group-item" href="/"><h6 class="p-0 m-0">Who to follow</h6></a>
            <!-- continue here -->
            ${who.map(who => {
        return(WhoToFollowListItem(who));
    }).join('')
    }
            </div>
`); }

export default WhoToFollowList;

