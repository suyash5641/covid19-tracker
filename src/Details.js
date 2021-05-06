import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Summary from './Summary';
import Countries from './Countries';
import State from './State';
function Details()
{
    const [count,setCountries]=useState([]);
    const [global,setGlobal]=useState([]);
    const[currentDate,setCurrentDate]=useState(null);
  //  const[loading,setLoading]=useState('true');

   
     useEffect(() => {
         axios
         .get("https://api.covid19api.com/summary")
         .then(response=>{
            setCountries(response.data.Countries);
            setGlobal(response.data.Global);
            setCurrentDate(response.data.Date);
           console.log(response);

         })
         axios
         .get("https://api.covid19api.com/live/country/india")
         .then(r=>{
            
            console.log(r);

         })
         
       // console.log(response);
        //console.log(response.data.Countries);
       // const[...item]=response.data.Countries;
       // console.log(item);
 },[]) 
    return(
         <>
           <Summary summary={global} cd={currentDate} />
        <table>
              <thead>
                  <tr>
                      <th>Country</th>
                      <th>New Confirmed</th>
                      <th>Total Recovered</th>
                      <th>Total Deaths</th>
                  </tr>
              </thead>
              <tbody>
                  {count.map((c,k)=>(
                      <>
                  <Countries country={count} id={k} /> 
                  
                  </>
                  
                ))}
              </tbody>
          </table>
         </>
    );
   
}

export default Details;