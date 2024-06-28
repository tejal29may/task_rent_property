import React, { useState } from 'react'
import './App.css'
import MainPage from './Pages/MainPage'
import { Route,Router,BrowserRouter,Routes } from 'react-router-dom'
import LikedPage from './Components/LikedPage'
import { mycontext } from './Context/Mycontext'
import { data } from './assets/Data';
import { LikedProvider } from './Context/likeContext';

function App() {
  
  const[wholedata,setwholedata]=useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [liked, setLiked] = useState(false);
  return (
   <>
   <LikedProvider>
   <mycontext.Provider value={{wholedata,setwholedata,filteredData, setFilteredData,liked, setLiked}}>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/liked' element={<LikedPage/>}/>
   
   </Routes>
   </BrowserRouter>
   </mycontext.Provider>
   </LikedProvider>
   </>
  )
}

export default App
