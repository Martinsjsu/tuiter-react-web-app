import React from "react";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import PostSummaryItem
    from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuitsData.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;