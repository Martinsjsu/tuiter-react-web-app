import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const LikedTuit = (tuit) => {
    const dispatch = useDispatch();

    return (
        <div className="wd-font-13 w-25 text-danger" onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            liked: false,
            likes: tuit.likes - 1
        }))}>
            <i className="bi bi-heart-fill me-2"></i>
            <span>{tuit.likes}</span>
        </div>
    )
}

const UnlikedTuit = (tuit) => {
    const dispatch = useDispatch();

    return (
        <div className="wd-font-13 text-muted w-25" onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            liked: true,
            likes: tuit.likes + 1
        }))}>
            <i className="bi bi-heart me-2"></i>
            <span>{tuit.likes}</span>
        </div>
    )
}

const DislikedTuit = (tuit) => {
    const dispatch = useDispatch();

    return (
        <div className="wd-font-13 text-muted w-25 text-black" onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            disliked: false,
            dislikes: tuit.dislikes - 1
        }))}>
            <i className="bi bi-hand-thumbs-down-fill me-2"></i>
            <span>{tuit.dislikes}</span>
        </div>
    )
}

const UnDislikedTuit = (tuit) => {
    const dispatch = useDispatch();

    return (
        <div className="wd-font-13 text-muted w-25" onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            disliked: true,
            dislikes: tuit.dislikes + 1
        }))}>
            <i className="bi bi-hand-thumbs-down me-2"></i>
            <span>{tuit.dislikes}</span>
        </div>
    )
}

const TuitStats = (tuit) => {
    return (
        <div className="d-flex justify-content-between m-0">
            <div className="wd-font-13 text-muted w-25">
                <i className="bi bi-chat me-2"></i>
                <span>{tuit.replies}</span>
            </div>

            <div className="wd-font-13 text-muted w-25">
                <i className="bi bi-arrow-repeat me-2"></i>
                <span>{tuit.retuits}</span>
            </div>

            {tuit.liked ? LikedTuit(tuit) : UnlikedTuit(tuit)}

            {tuit.disliked ? DislikedTuit(tuit) : UnDislikedTuit(tuit)}

            <div className="wd-font-13 text-muted">
                <i className="bi bi-upload me-2"></i>
            </div>
        </div>
    );
};

export default TuitStats;