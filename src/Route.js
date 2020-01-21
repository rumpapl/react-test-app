import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ContextComponents from './components/context/ParentComp';
import Home from './components/home/Index';
import HeigherOrderComponent from './components/HOC/ParentComp';

function RouteStack(){
    return(
        <Router>
            <Switch>
                <Route path="/react-context" component={ContextComponents}/>
                <Route path="/react-HOC" component={HeigherOrderComponent}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

function Header() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse ">
          &ensp;
        <Link to="/"><button className='badge list-group-item'><h7 className="text-dark">Home</h7></button></Link>
        &ensp;
         <Link to="/react-context"><button className='badge list-group-item'><h7 className="text-dark">Context</h7></button></Link>
         &ensp;
         <Link to="/react-HOC"><button className='badge list-group-item'><h7 className="text-dark">HOC</h7></button></Link>
      </nav>
  
    )
  }
  
  export { RouteStack, Header };
