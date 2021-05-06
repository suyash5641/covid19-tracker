import React from 'react';
import { Link } from "react-router-dom";
import State from './State';
function Countries(props)
{

    
    return(
        <>
          <tr>
              <td>{props.country[props.id].Country}</td>
              <td>{props.country[props.id].NewConfirmed}</td> 
              <td>{props.country[props.id].TotalRecovered}</td>
              <td>{props.country[props.id].TotalDeaths}</td>
          </tr>
           
          
          
       </>
    );
}
export default Countries;