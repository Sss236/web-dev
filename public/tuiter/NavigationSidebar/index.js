import ExploreItem from "./ExploreItem.js";
import ListItems from "../NavigationSidebar/ListItems.js";
const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                <!-- continue the rest of the list -->
                    <a href="https://twitter.com" class="list-group-item list-group-item-action wd-dark-mode"><i class="fab fa-twitter fa-2x"></i> </a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode"><i class="fas fa-home"></i> Home</a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode fw-bolder" aria-current="true"> <i class="fas fa-hashtag" style="font-weight: bolder"></i> Explore</a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode"><i class="fas fa-bell"></i> Notifications</a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode"><i class="fas fa-envelope"></i> Messages</a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode"><i class="fas fa-bookmark"></i>  Bookmarks</a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode"><i class="fas fa-list"></i> Lists </a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode"><i class="fas fa-user-alt"></i> Profile</a>
                    <a href="#" class="list-group-item list-group-item-action wd-dark-mode"><i class="fas fa-circle fa-inverse"></i> More</a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

