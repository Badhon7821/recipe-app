import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = (props) =>{


const [text,setText] = useState('');
const navigate = useNavigate();

const sendData = () =>{
    props.fetch(text);
    navigate('/')
}

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                <input type="text" placeholder='Enter Text' 
                value={text}
                onChange={(a)=>setText(a.target.value)}/>
                </div>
            </div>
            <button type="submit" className='btn btn-success' onClick={sendData}>Submit</button>
        </div>
    )
}


export default Form;