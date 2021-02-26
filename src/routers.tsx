import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Index';
import About from './Pages/About/Index';


function Routers(){


return(
     <BrowserRouter>
     <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
     </Switch>
     </BrowserRouter>
     )
}
export default Routers;