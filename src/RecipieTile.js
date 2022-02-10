import React from 'react'

import './App.css';

const RecipieTile = ({recipe}) =>{
    return(
        <div className='Card'>
            <img src = {recipe["recipe"]["image"]} />
             <p>{recipe["recipe"]["label"]}</p>
        </div>
       
    )
}


export default RecipieTile;