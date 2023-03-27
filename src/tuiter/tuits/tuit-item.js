import React from "react";
import {useDispatch} from "react-redux";
import {likeToggle, deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuit = tuit || {}
    }
) => {

    const dispatch = useDispatch();
    // handle delete event
    // pass tuit's ID to reducer
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id))
    }
    const toggleLike = (tuit) => {
        dispatch(likeToggle(tuit))
    }
    return(
        <li className="list-group-item d-flex">
            <div className="col-1 float-start">
                <img width={48} height={48} className="rounded-circle d-flex" src={`/images/${tuit.image}`}/>
            </div>
            <div className="col-11 mt-2 ms-2 ps-2 float-end">
                <span className="wd-font-15  fw-bold">{tuit.userName}</span>
                <i className="bi bi-check-circle-fill text-primary ms-2"></i>
                <span className="wd-font-15 text-muted ms-2">{tuit.handle}</span>
                <span className="wd-font-15 text-muted ms-2">&middot; {tuit.time}</span>
                {/*The dispatcher sends the action object to the tuits reducer which we handle this particular type of
                   event in tuits/tuits-reducer.js*/}
                <i className="text-muted text-decoration-none float-end">
                    <i className="bi bi-x-lg" onClick={() => deleteTuitHandler(tuit._id)}></i>
                </i>
                <div className="wd-font-15 ">
                    {tuit.tuit}
                </div>
                <div className="nav navbar wd-font-13">
                    <a href="#" className="col-3 bi bi-chat text-muted text-decoration-none">
                        <span className="ms-2 text-muted wd-font-13">{tuit.replies}</span>
                    </a>
                    <a href="#" className="col-3 bi bi-arrow-repeat text-muted text-decoration-none">
                        <span className="ms-2 text-muted wd-font-13">{tuit.retuits}</span>
                    </a>
                    <i className={tuit.liked ? "col-3 bi bi-heart-fill text-danger text-decoration-none" :
                        "col-3 bi bi-heart text-muted text-decoration-none"}
                       onClick={() => toggleLike(tuit)}>
                        <span className="text-muted wd-font-13 ms-2">{tuit.likes}</span>
                    </i>
                    <a href="#" className="col-3 bi bi-arrow-bar-up text-muted text-decoration-none"></a>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;