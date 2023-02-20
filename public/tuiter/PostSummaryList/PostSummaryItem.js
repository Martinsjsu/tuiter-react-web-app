const PostSummaryItem  = (post) => {
    return(`
       <li class="list-group-item">
       <div class="row">
         <div class="col-9">
           <p class="wd-text-color-110-118-125 mb-0">
              ${post.topic}
           </p>
           <p class="mb-0  wd-font-bold">
              ${post.userName}
           <i class="fa-solid fa-circle-check"></i>
           <span class="wd-text-color-110-118-125 wd-font-no-bold">
              - ${post.time}
           </span>
           </p>
           <p class="wd-font-bold mb-0">
              ${post.title}
           </p>
           <p class="wd-text-color-110-118-125 mb-0">
              
              ${post.tweets ? post.tweets+'Tweets' : ''}
           </p>
           </div>
           <div class="col-3">
              <img src=${post.image}
                  class="img-fluid"
                  style="border-radius: 15px"
                  >
               </div>
           </div>                          
       </li>
   `);
}
export default PostSummaryItem