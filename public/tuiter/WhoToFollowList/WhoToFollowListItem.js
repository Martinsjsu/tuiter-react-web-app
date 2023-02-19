const WhoToFollowListItem  = (who) => {
    return(`
       <li class="list-group-item wd-font-13">
       <div class="row">
       <img src = ${who.avatarIcon}  class="wd-img-50x50 wd-img-circular p-1 col-2">
       <div class="p-0 col-7">
            <p class="mb-0  wd-font-bold">
              ${who.userName}
              <i class="fa-solid fa-circle-check"></i>
            </p>
            <p class="mb-0">
              @ ${who.handle}
            </p>
            </div>
       <button class=" btn-primary  wd-btn-corners-all-around wd-float-right col-3 mt-2 mb-2 ">Follow</button>
       </div>
       </li>
   `);
}
export default WhoToFollowListItem;