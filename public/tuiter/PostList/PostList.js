import PostList from "./index.js";
/* eslint-env jquery */

$('#wd-post-list').append(`
   <div class="container">
       ${PostList()}
   </div>
`);