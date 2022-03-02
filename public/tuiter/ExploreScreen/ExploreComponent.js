import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
             <div class="row">
                <div class="col">
//<!--                    TODO: Fix search button -->
                    <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback " style="color: rgba(0,0,0,0.48)"></span>
                        <input type="text" class="form-control rounded-pill wd-search-link" placeholder="Search Twitter">
                    </div>
//<!--                    <input class="border-start-1 rounded-pill mr-1 wd-search-link mx-2 p-2" placeholder=" Search Twitter">-->
//<!--                    <div class="input-group-append">-->
//<!--                        <button class="btn btn-secondary" type="button">-->
//<!--                            <i class="fa fa-search"></i>-->
//<!--                        </button>-->
//<!--                    <a input class="form-control border-start-1 rounded-pill mr-1 wd-search-link mx-2" value =" Search Twitter"-->
//<!--                       type="search" id="example-search-input"> <i class="fas fa-search"></i> </a>-->
                </div>
                <div class="col-1 wd-float-left">
                    <a href="#" class="wd-float-left mt-2"> <i class="fas fa-cog fa-1x" style="color: #ffffff"></i> </a>
                </div>
            </div>
           <ul class="nav nav-tabs navbar-expand-sm navbar-expand-md navbar-expand-xl navbar-expand-xxl nav-style mx-2 mt-2">
                <li class="nav-item ">
                    <a class="nav-link active" style="background-color: black; color: white";
                    border-top: 0; border-left: 0; border-right:0;  border-bottom-color: #0a53be;
                    border-bottom-width: "thick" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-style" href="#">Trending</a> </li>
                <li class="nav-item">
                    <a class="nav-link nav-style" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-style" href="#">Sports</a>
                </li>
                <li class="nav-item d-sm-none d-md-block">
                    <a class="nav-link nav-style" href="#">Entertainment</a>
                </li>
            </ul>
//           <!-- image with overlaid text -->
            <div class="card mt-2 wd-dark-mode wd-card-style">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="card-img-top wd-card-style" alt="...">
                <div class="card-body wd-card-style">
                <div class="list-group">
                    ${PostSummaryList()}
                </div>
            </div>
            </div>
    `);
}
export default ExploreComponent;
