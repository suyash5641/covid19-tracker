import React from 'react';
function Summary(props)
{
 return (
      <div className="row"> 
      <div className="NewConfirmed"> 
          <h4>NEW CONFIRMED</h4>
          <h1>{props.summary.NewConfirmed}</h1> 
          <h4>{new Date(props.cd).toString()}</h4>

      </div>
      <div className="TotalConfirmed">
          <h4>Total confirmed</h4> 
          <h1>{props.summary.TotalConfirmed}</h1>
      </div>
      <div className="NewDeaths">
          <h4>New Deaths</h4> 
          <h1>{props.summary.NewDeaths}</h1>
      </div>  
      <div className="TotalDeaths">
          <h4>Total Deaths</h4> 
          <h1>{props.summary.TotalDeaths}</h1>
      </div>
      <div className="TotalRecovered">
          <h4>TotalRecovered</h4> 
          <h1>{props.summary.TotalRecovered}</h1>
      </div>
      </div> 
      
 );
}
export default Summary;