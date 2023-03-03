const PostItem  = (post) => {
    return(`
       <li class="list-group-item">
       <div class="row">
             <div class="col-2">
             <img src=${post.userImg}
             class="wd-img-50x50 wd-img-circular"
             >
        </div>
             <div class="col-10">
                <p class="mb-0  wd-font-bold">
              ${post.userName}
              <i class="fa-solid fa-circle-check"></i>
              <span class="wd-font-no-bold wd-text-color-lightgray wd-font-13">@ ${post.handle} - ${post.time}</span>
            </p>
            <p>
              ${post.post}
            </p>
          
           <div class="container position-relative p-0">
               <div class="wd-border-thin wd-border-solid wd-border-color-lightgrey wd-rounded-corners-all-around">
               <img src=${post.image}
                     class="img-fluid"
                     style="border-radius: 5%"
                >
                <div class="text-left p-2" style="color: white">
                    <p class="m-0">
                    ${post.title}
                 </p>
                    <p class="wd-text-color-lightgray wd-font-13">
                    ${post.content}
                 </p>
                </div>               
              </div>
                
            </div>
            <div class="row">
            <div class="col-3">
            <i class="fa-regular fa-comment col-3"></i>
            ${post.comments}
            </div>
            <div class="col-3">
            <i class="fa-solid fa-retweet col-3"> </i>
            ${post.retweet}
            </div>
            <div class="col-3">
            <i class="fa-regular fa-heart col-3"> </i>
            ${post.like}
            </div>
            <div class="col-3">
            <i class="fa-solid fa-arrow-up-from-bracket col-3"></i>
            </div>
            </div> 
           </div>
           </div>                          
       </li>
   `);
}
export default PostItem;