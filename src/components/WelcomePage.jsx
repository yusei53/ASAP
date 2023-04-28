import React from "react";

import { Link } from "react-router-dom";

export const WelcomePage = (props) =>{
    return(
    <>
    <input  />
    <input  />
    <input  />
    <input  />
    <Link to='/home'>{props.children}</Link>
    </>
    )
}