import PostSummaryList from "./index.js";
/* eslint-env jquery */

$('#wd-post').append(`
   <div class="container">
       ${PostSummaryList()}
   </div>
`);

