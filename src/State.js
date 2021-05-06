import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Summary from './Summary';
function State()
{
    const [Item,setItems]=useState("");
    const [inputLists,setInputLists]=useState(""); 
    const[dateList,setDateList]=useState("");
    const[d,setD]=useState("");
    const x="2020-01-23T00:00:00Z";
    const [a,setVals]=useState([]);
    function AddItem()
    {  
        setItems(inputLists);
       setD(dateList);
       if(Item!=="")
        {
       // console.log(Item);
       // console.log(dateList);
       // console.log("https://api.covid19api.com/live/country/"+Item);
    const result=fetch("https://api.covid19api.com/live/country/"+Item) 
    .then((data)=>data.json())
    .then((data)=>{ 
        console.log(data[0].Confirmed);
       // console.log(zw);
        setVals(data);
          }) 
        }
//console.log(d);
//console.log(a);
   
}
     return <>
       <div className="form">
       <div>
       <label for="country">Enter Country </label>
       <input type="text" id="country" placeholder="enter country"  value={inputLists} onChange={event=>setInputLists(event.target.value)}/>
       </div>
       <div>
       <label for="date">Enter  Date   </label>
       <input type="text" id="date" placeholder="enter date"  onChange={e=>setDateList(e.target.value)}/>
       </div>
       <button onClick={AddItem}>search</button> 
       </div>
       
       <table>
              <thead>
                  <tr>
                      <th>State</th>
                      <th>Date</th>
                      <th>Active</th>
                      <th>Confirmed</th>
                      <th>Deaths</th>
                   </tr>
              </thead>
              <tbody>
              {a.filter((x,y)=>a[y].Date==(d+"T00:00:00Z")).map(u=>(
                
                 <>
                 <tr>
                  
                 <td>{u.Province}</td>
                 <td>{u.Date.substring(0,10)}</td>
                 <td>{u.Active}</td>
                 <td>{u.Confirmed}</td>
                 <td>{u.Deaths}</td>
            
                 </tr>
                </>
               ))}
              </tbody>
          </table>
      
       </>   
}
export default State;