import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">
                <div className="d-none d-xl-block">
                    <i className="bi bi-twitter"></i>
                    Tuiter
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-twitter"></i>
                </div>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-house-door-fill"></i>
                   Home
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-house-door-fill"></i>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-hash"></i>
                    Explore
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-hash"></i>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className="d-none d-xl-block">
                    <i className="bi bi-funnel-fill"></i>
                    Labs
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-funnel-fill"></i>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-bell-fill"></i>
                    Notifications
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-bell-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-envelope-open-fill"></i>
                    Messages
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-envelope-open-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-bookmark-fill"></i>
                    Bookmarks
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-bookmark-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-list-task"></i>
                    Lists
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-list-task"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-person-fill"></i>
                    Profile
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-person-fill"></i>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="d-none d-xl-block">
                    <i className="bi bi-three-dots"></i>
                    More
                </div>
                <div className="container  d-block d-xl-none">
                    <i className="bi bi-three-dots"></i>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;