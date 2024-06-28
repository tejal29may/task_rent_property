import React, { useState } from "react";
import "./Header1.css";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { mycontext } from "../Context/Mycontext";

function Header1({ index }) {
  const { wholedata, setFilteredData, liked, setLiked } = useContext(mycontext);

  function filterData(names) {
    let filteredData = wholedata.filter((item) => {
      if (item.name.toLowerCase().includes(names.trim().toLowerCase())) {
        return true;
      }
      return false;
    });
    setFilteredData(filteredData);
  }
  return (
    <>
      <div className="header1">
        <div className="left">
          <NavLink to="/">
            <svg
              stroke="currentColor"
              fill="green"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="mb-1 text-success"
              height="3em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
            </svg>
          </NavLink>
        </div>
        <div className="mid">
          <h1>Search properties to rent</h1>
        </div>
        <div className="right">
          <input
            type="text"
            onChange={(e) => {
              filterData(e.target.value);
            }}
            placeholder="Enter house name"
          />
          <button>Search</button>
          <NavLink to="/liked">
            <button> Liked</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header1;
