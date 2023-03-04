import React from "react";
import './index.css'
const PostItem = (
    {
        post = {
            "userName": 'Elon Musk',
            "userImg":'../../images/musk.jpg',
            "handle": 'elonmusk',
            "time": '23h',
            "post": "Amazing show about <a href='x' class='text-primary text-decoration-none'>@inspriation4x</a> mission!",
            "image": '../../images/inspiration4.jpg',
            "title": 'Countdown:Inspriation4 Mission to Space | Netflix Spcial',
            "content":'From training to launch landing, this all-access docuseries rides along with the inspiration4 crew on the first all ...',
            "site": 'netflix.com',
            "comments":'4.2K',
            "retweet":'3.5K',
            "like": '37.5K',
            "retuit": "Somebody Famous Retuited"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="container wd-text-color-gray wd-font-13">
                {post.site?<i className="bi bi-arrow-repeat"></i>
                    : ""}
                {post.retuit}
            </div>
            <div className="row">
                <div className="col-2">
                    <img width={70} className="rounded-circle" src={`/images/${post.userImg}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold wd-font-15">{post.userName}</span>
                        <span className="wd-text-color-gray wd-font-13"> @ {post.handle} · {post.time} </span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: post.post}}></p>
                    <div className="container p-0">
                        <div className="wd-border-thin wd-border-solid wd-border-color-lightgrey wd-rounded-corners-all-around">
                            <img className="img-fluid rounded-3" src={`/images/${post.image}`}/>
                            <p className="m-0">
                                {post.title}
                            </p>
                            <p className="wd-text-color-gray wd-font-13 m-0">
                                {post.content}
                            </p>
                            <p className="wd-text-color-gray wd-font-13 m-0">
                                {post.site?<i className="bi bi-link-45deg"></i>
                                    : ""}
                                {post.site}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <i className="bi bi-chat"></i>
                            {post.comments}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-arrow-repeat"></i>
                            {post.retweet}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-heart"></i>
                            {post.like}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-arrow-bar-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;

