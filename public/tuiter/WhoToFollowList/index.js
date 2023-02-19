import WhoToFollowList from "./WhoToFollowList.js"
/* eslint-env jquery */

$('#who-to-follow-list').append(`
   <div class="container">
       ${WhoToFollowList()}
   </div>
`);