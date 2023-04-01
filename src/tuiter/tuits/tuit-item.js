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

            <div className="col-11 mt-2 ms-2 ps-2 float-end">
                <div className="container">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <span className="wd-font-13">{tuit.userName}
                        <i className="fa-solid fa-circle-check"></i></span>
                    <span className="wd-font-13"> {tuit.handle} · {tuit.time}</span>
                    <br/>
                    {tuit.tuit}
                    {TuitStats(tuit)}
                </div>
            </div>
        </li>
    );
};
export default TuitItem;