import React from "react";
import {Link} from 'react-router-dom';
import "./LandingPage.css";

export default function LandingPage(){
    return(
        <div className="container">
            <h1 className="tittle">Welcome to my Poke App...</h1>
            <Link to ='/home'>
               <button>Enter</button>
            </Link>
        </div>
    )
}