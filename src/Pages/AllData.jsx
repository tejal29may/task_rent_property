import React from 'react'
import '../assets/Data'
import Card from '../Components/Card'
// import { data } from '../assets/Data'
// import "../Components/Card.css"

import { useContext } from "react";
import { mycontext } from "../Context/Mycontext";

function AllData() {
  const {wholedata,filteredData}=useContext(mycontext)
//    console.log(data);
  return (
    <>
    <div className="cards">
     {
        filteredData.map((ele,index)=>{
            return (
                
                    <Card data={ele} index={index}/>
               
            )
        })
     }
      </div>
    </>
  )
}

export default AllData