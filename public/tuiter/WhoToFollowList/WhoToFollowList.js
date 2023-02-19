import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
       return (`
           <div class="container" style="padding-left: 0; padding-right: 0">
           <ul class="list-group">
           <li class="list-group-item  wd-font-bold">Who to follow</li>
           <!-- continue here -->
           ${
           who.map(who => {
               return(WhoToFollowListItem(who));
           }).join('')
       }
           </ul>
           </div>
           
`); }

export default WhoToFollowList;