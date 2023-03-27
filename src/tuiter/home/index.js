import React from "react";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";


function HomeComponent() {
    return(
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
}

export default HomeComponent