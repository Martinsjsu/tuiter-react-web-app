import PostSummaryList  from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            
           <div class="row mb-2"> 
            <!-- search field and cog -->
                <div class="col-11">
                            <ul clas="list-group" style="margin-bottom: 0; padding-left: 0">
                                <li class="list-group-item rounded-pill bg-white" style="
                                padding-top: 8px; 
                                padding-bottom: 8px;
                                padding-left: 16px;
                                padding-right: 16px">
                                    <label for="search">
                                        <i class="fa-solid fa-magnifying-glass d-inline "></i>
                                    </label>
                                    <input type="text"
                                           placeholder="Search Tuiter"
                                           class="wd-font-15  border-0 d-line p-0 bg-white"
                                           id = "search"
                                    >
                                </li>
                            </ul>
                     </div>
                <div class="col-1 mt-1">
                        <a href="explore-setting.html">
                            <i class="fa-solid fa-gear fa-2x float-end"></i>
                        </a>
                    </div>   
            </div>
                           
           <div class="container wd-font-15 p-0 mb-2">
           <ul class="nav nav-tabs ">
                    <!-- tabs -->
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
                    </li>
                </ul>
           </div>

           <!-- image with overlaid text -->
           <div class="container position-relative p-0">
                <img src="space-x.jpg"
                     class="img-fluid"
                >
                <div class="position-absolute text-left p-2" style="bottom: 0; color: white; font-size: 30px">
                    SpaceX's Starship
                </div>
            </div>
            
           <div class="container p-0">
            ${PostSummaryList()}
            </div>
           
    `);
}
export default ExploreComponent;
