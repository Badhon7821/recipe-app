import React from 'react';


const Add = (props) =>{
    return(
        <div className='container'>
        <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
    
        
      {/* {JSON.stringify(props.datas)} */}
          {props.datas.map((el,ind)=>{

return(
  <tr key={ind}>
  <th scope="row">{ind+1}</th>
  <td>{el}</td>
  <td><button className='btn btn-dark'>Edit</button><button className='btn btn-success' onClick={()=>props.deleteFn(ind)}>Delete</button></td>
</tr>

)
})} 
           
         
          
        </tbody>
      </table>
      </div>
    )
}


export default Add;