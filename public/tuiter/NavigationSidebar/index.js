const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a href="#" class="list-group-item list-group-item-action d-block d-xl-none">
                <i class="fa-solid fa-house"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block">
                <i class="fa-solid fa-house"></i>
                Home</a>
            <a href="#" class="list-group-item list-group-item-action active d-block d-xl-none">
                <i class="fa fa-solid fa-hashtag"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action active d-none d-xl-block">
                <i class="fa fa-solid fa-hashtag"></i>
                Explore</a>
            <a href="#" class="list-group-item list-group-item-action d-block d-xl-none">
                <i class="fa fa-solid fa-bell"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block">
                <i class="fa fa-solid fa-bell"></i>
                Notifications</a>
            <a href="#" class="list-group-item list-group-item-action d-block d-xl-none">
                <i class="fa fa-solid fa-envelope"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block">
                <i class="fa fa-solid fa-envelope"></i>
                Messages</a>
            <a href="#" class="list-group-item list-group-item-action d-block d-xl-none">
                <i class="fa fa-solid fa-bookmark"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block">
                <i class="fa fa-solid fa-bookmark"></i>
                Bookmarks</a>
            <a href="#" class="list-group-item list-group-item-action d-block d-xl-none">
                <i class="fa fa-solid fa-list"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block">
                <i class="fa fa-solid fa-list"></i>
                Lists</a>
            <a href="#" class="list-group-item list-group-item-action d-block d-xl-none">
                <i class="fa fa-solid fa-user"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action d-none d-xl-block">
                <i class="fa fa-solid fa-user"></i>
                Profile</a>
            <a href="#" class="list-group-item list-group-item-action mb-2 d-block d-xl-none">
                <i class="fa-solid fa-ellipsis"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action mb-2 d-none d-xl-block">
                <i class="fa-solid fa-ellipsis"></i>
                more</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;