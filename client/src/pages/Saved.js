import React from 'react';
import { Link } from "react-router-dom";
 function Saved (props){
     return(
        <div className="card text-center">
        <img className="card-img-top" src={props.image} alt={props.title}></img>
        <div className="card-header">
          <h2>title</h2>
        </div>
        <div className="card-body">{props.children}</div>
      </div>
     )
 }
 export default Saved;