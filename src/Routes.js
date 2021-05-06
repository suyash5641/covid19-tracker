import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Details from "./Details";


import Details from './Details';
import State from './State';

function Routes()
{
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Details} />
                    <Route path="/" exact component={State} />
                    
                </Switch>
            </Router>
        )
    
}