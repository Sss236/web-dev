import NavigationSidebar from "../NavigationSideBar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

(function ($) {

    $('#wd-home').append(`
         <div class="row mt-2 mb-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class="col-10 col-lg-7 col-xl-6 col-xxl-6 ">
            ${PostList()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 p-0">
            ${PostSummaryList()}
        </div>
        </div>
    `);

//    const addClass= $("#Home");
//    addClass.addClass('active');
})($);
