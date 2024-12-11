// import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
// import DogsTable from "../components/home/DogsTable";
// import DogsCard from "../components/home/DogsCard";

export default function Home() {

  let dogData = useLoaderData();
  let categories = []
  dogData.data.forEach((cat, index) => {
    categories.push(cat.category)
  });

  return (
    <div className="homeDiv">
      <div className="tabBox" id="kennelBox">
        <div className="tabs">
          <ul className="tabsList">
            {categories.map((cat, index) => { return <li key={index} className="tabListItem"><NavLink className="navLinkTabs" to={`${cat}`}>{cat}</NavLink></li> })}
          </ul>
        </div>
        <div className="categoryContent">
          <Outlet context={dogData.data} />
        </div>
      </div>
    </div>
  )
};

export const kennelLoader = async () => {
  let res = await fetch(`http://localhost:3000/dogs`);
  let data = await res.json();
  return data
}