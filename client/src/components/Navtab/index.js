import React from "react";
import { Link } from "react-router-dom";

function Navtab(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav nav-item">
        <Link
          to="/saved"
          className={
            window.location.pathname === "/saved"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Saved
        </Link>
        {/* <a href='#search'
                onClick= {() => props.hanldPageChange('Search')}
                className={props.currentPage === "Search" ? 'nav-link active': 'nav-link'}>Search</a> */}
      </li>
      <li className="nav nav-item">
        <Link
          to="/search"
          className={
            window.location.pathname === "/search"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Search
        </Link>
        {/* <a href='#saved'
                onClick={()=> props.hanldPageChange('Saved')}
                className= {props.currentPage === 'Saved'? 'nav-link active': 'nav-link'}>Saved</a> */}
      </li>
    </ul>
  );
}
export default Navtab;
