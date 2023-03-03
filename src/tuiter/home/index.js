import React from "react";
import postsArray from "../PostList/post.json";
import PostItem from "../PostList/post-item";

function HomeComponent() {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
}

export default HomeComponent