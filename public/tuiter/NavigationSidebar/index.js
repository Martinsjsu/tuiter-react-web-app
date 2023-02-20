/* eslint-env jquery */
const NavigationSidebar = (hightlight = 'Home') => {
    const sections = [
        {label:'Home',href:'../HomeScreen/index.html', icon: '<i class="fa-solid fa-house"></i>'},
    {label:'Explore', href:'../explore/index.html', icon: '<i class="fa fa-solid fa-hashtag"></i>'},
    {label:'Notifications', href:'../notifications.html', icon: '<i class="fa fa-solid fa-bell"></i>'},
    {label:'Messages', href:'../messages.html', icon: '<i class="fa fa-solid fa-envelope"></i>'},
    {label:'Bookmarks', href:'../bookmarks/index.html', icon: '<i class="fa fa-solid fa-bookmark"></i>'},
    {label:'Lists', href:'../lists.html', icon: '<i class="fa fa-solid fa-list"></i>'},
    {label:'Profile', href:'../profile.html', icon:'<i class="fa fa-solid fa-bookmark"></i>'},
    {label:'More', href:'../more.html', icon: '<i class="fa-solid fa-ellipsis"></i>'},]

    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       ${
        sections.map(section=>
            `<div>
                <a class="d-block d-xl-none list-group-item ${section.label === hightlight ? 'active':''}"
                   href=${section.href}>${section.icon}</a>
                <a class="d-none d-xl-block list-group-item ${section.label === hightlight ? 'active':''}" 
                   href=${section.href}>${section.icon}</i>
                ${section.label}</a>
            </div>
            `).join('')
    }
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tuit</a>
   </div>
 `);
}
export default NavigationSidebar;

$('#navigation-sidebar').append(`
<div class="container">
    <h1>Navagation Side bar</h1>
    ${NavigationSidebar()}
</div>
   `);