import React, { useState } from "react";
import "./Header2.css";
import { mycontext } from "../Context/Mycontext";
import { useContext } from "react";
function Header2() {

const{filterData,setFilteredData,wholedata,setwholedata}=useContext(mycontext)
const [cities,setcity]=useState("");
const[date,setdate]=useState();
const[price,setprice]=useState();
const[propertyType,setPropertyType]=useState();


const filterDataAgain=(city,date,price,propertyType)=>{
  let filteredDataa = wholedata.filter((item) => {
    if (item.city.toLowerCase().includes(cities.toLowerCase()) ) {
      return true;
    }
    return false;
  });
  setFilteredData(filteredDataa);
}



  return (
    <>
      <div className="header2">
        <div className="one">
          <h2>Enter city</h2>
          <input type="text" placeholder="Enter city" value={cities} onChange={(e)=>{
            setcity(e.target.value)
          }}/>
        </div>
        <div className="one">
          <h2>Date</h2>
          <input type="date" value={date} onChange={(e)=>{
            setdate(e.target.value)
          }}/>
        </div>
        <div className="one">
          <h2> Price</h2>
          <select name={price} id="" value={price} onChange={(e)=>{
            setprice(e.target.value)
          }}>
           <option value="">0-3000</option>
           <option value="RS. 0-500">RS. 0-500</option>
           <option value="RS. 500-1000">RS. 500-1000</option>
           <option value="RS. 1000-1500">RS. 1000-1500</option>
           <option value="RS. 1500-2000">RS. 1500-2000</option>
           <option value="RS. 2000-2500">RS. 2000-2500</option>
           <option value="RS. 2500-3000">RS. 2500-3000</option>
          </select>
        </div>
        <div className="one">
          <h2>Property type</h2>
          <select name="" id="" value={propertyType} onChange={(e)=>{
            setPropertyType(e.target.value)
          }}>
           <option value="ALL">ALL</option>
           <option value="House">House</option>
           <option value="Pg">Pg</option>
           <option value="Farmhouse">Farmhouse</option>
           <option value="Villa">Villa</option>
           <option value="Hotel">Hotel</option>
           <option value="OYO">OYO</option>
          </select>
        </div>
        <button className="submitBut" onClick={()=>{
          filterDataAgain();
        }}>Submit</button>
      </div>
    </>
  );
}

export default Header2;

