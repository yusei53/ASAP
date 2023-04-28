import React from "react";

import { Link } from "react-router-dom";

export const WelcomePage = (props) =>{
    return(
        <>
    <div>
    ssssssssss
    </div>
    <Link to='/home'>{props.children}</Link>
    </>
    )
}