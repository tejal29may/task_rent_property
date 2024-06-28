import React from 'react'
import Header1 from '../Pages/Header1'
import Header2 from '../Pages/Header2'
import { LikedContext } from '../Context/likeContext'
import { useContext } from 'react'
import Card from './Card'
function LikedPage() {
  const{liked}=useContext(LikedContext)
  return (
    <>
    <Header1/>
    <Header2/>
    {
      <div className="cards">
      {
         liked.map((ele,index)=>{
             return (
                 
                     <Card data={ele} index={index}/>
                
             )
         })
      }
       </div>
    }
    </>
  )
}

export default LikedPage