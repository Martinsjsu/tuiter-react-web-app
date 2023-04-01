import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item d-flex">
            <div className="col-1 float-start">
                <img width={48} height={48} className="rounded-circle d-flex" src={`/images/${tuit.image}`}/>
            </div>

            <div className="col-11 mt-2 ms-2 float-end">
                <div className="container ps-8 pe-8">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <span className="wd-font-15 fw-bold">{tuit.username}</span>
                    <i className="bi bi-check-circle-fill text-primary ms-2"></i>
                    <span className="wd-font-13 text-muted"> {tuit.handle} · {tuit.time}</span>
                    <br/>
                    {tuit.tuit}
                    {TuitStats(tuit)}
                </div>
            </div>
        </li>
    );
};
export default TuitItem;