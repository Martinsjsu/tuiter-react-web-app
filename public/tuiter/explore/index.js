/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js"
function exploreComponent() {
    $('#wd-explore').append(`

   <div class="row mt-2">
   <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2">
    <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('Explore')}
   </div>
   <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
   <!--<h3>ExploreComponent</h3>-->
    ${ExploreComponent()}
   </div>
   
   <div class="col-xl-4 col-lg-4 d-none d-lg-block">
    <!--<h3>WhoToFollowList </h3>-->
    ${WhoToFollowList()}
   </div>
  </div>
   `);
}
$(exploreComponent);