import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Summary from './Summary';
function Track()
{
    const [Items,setItem]=useState("");
    const [inputList,setInputList]=useState(""); 
    const [arr,setVal]=useState([]);
    function AddItems()
    {  
        setItem(inputList);
         if(Items!=="")
        {
       // console.log(Items);
        // console.log("https://api.covid19api.com/dayone/country/"+Items);
    const re=fetch("https://api.covid19api.com/dayone/country/"+Items) 
    .then((z)=>z.json())
    .then((z)=>{ 
        console.log(z[0].Confirmed);
        setVal(z);
        })
        .catch(err=>{
            alert("no data found for current country");
        }) 
    }
}
    return <>
        <div className="form">
       <div>
       <label for="Country">Enter Country </label>
       <input type="text" id="Country"placeholder="enter country"  value={inputList} onChange={event=>setInputList(event.target.value)}/>
       </div>
       <button onClick={AddItems}>search</button> 
       </div>
       <table>
              <thead>
                  <tr>
                      <th>Country</th>
                      <th>Date</th>
                      <th>Active</th>
                      <th>Recovered</th>
                      <th>Confirmed</th>
                      <th>Deaths</th>
                      
                  </tr>
              </thead>
              <tbody>
              {arr.map((w,k)=>(
                 <>
                 <tr>
                 <td>{arr[k].Country}</td>
                 <td>{arr[k].Date.substring(0,10)}</td>
                 <td>{arr[k].Active}</td>
                 <td>{arr[k].Recovered}</td>
                 <td>{arr[k].Confirmed}</td>
                 <td>{arr[k].Deaths}</td>
            
                 </tr>
                </>
               ))}
              </tbody>
          </table>
      
       </>   
}
export default Track;