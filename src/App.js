import React from 'react';

import Form from './component/Form';
import Add from './component/Add';
import Navbar from './component/Navbar';
import { useState } from 'react';
import Axios from 'axios';
import RecipieTile from './RecipieTile'
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {

// const [data,setData] = useState([]);

// const FetchData = (values) =>{
//   setData([...data,values]);
// }

// const deletedData = (id) =>{
//   let filtered = data.filter((p,index)=> index!=id);
//   setData(filtered)
// }
const APP_ID = "2d127b98";
const APP_KEY = "0cc940895b878761bf5c111a876f043d";
const [query,setQuery] = useState('');
const [recipie,setRecipie] = useState([])

var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

async function onClick(){
    var result = await Axios.get(url);
    setRecipie(result.data.hits);
    console.log(result.data);
}
function onChange (a){
    a.preventDefault()
    onClick();
}

  return (

<div className='App'>
    <div>
    <h1 className='App'>Recipe App</h1>
    <form onSubmit={onChange}>
      <input
      type='text'
       placeholder='Enter Text'
       value={query}
       onChange={(a)=>setQuery(a.target.value)}/>
       <button className='btn btn-outline-light'>Search</button>
    </form>
    </div>

    <div className='App_reciepies'>
      {recipie.map((recipie)=>{
        return (
          <RecipieTile  recipe = {recipie}/>
        )
      })}
    </div>
    </div>
    
    
    
 
    // <BrowserRouter>
    // <Navbar/>
    //   <Routes>
    //     <Route  path="/" element={<Add datas= {data} deleteFn = {deletedData}/>} />
    //     <Route  path="/Form" element={<Form fetch = {FetchData}/>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
