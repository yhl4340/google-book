import React from "react";
import "./style.css";
// import Books from "./components/Books";

function ResultCard(props) {
  return (
    <div className="card">
      
      <p><img
        className="card-img-top"
        src={props.image}
        id={props.id}
        alt={props.title}
      />
      
      <div className="card-body">
        <h5 className="card-title">Title:{props.title}</h5>
        <p className="card-text">Summary:{props.summary}</p>
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
      </div>
        </p>
      
    </div>
  );
}
export default ResultCard;
/* volumeInfo.title for title */
