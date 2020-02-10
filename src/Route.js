import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ContextComponents from './components/context/ParentComp';
import Home from './components/home/Index';
import HeigherOrderComponent from './components/HOC/ParentComp';
import HooksComponents from './components/Hooks/ParentComp';

function RouteStack() {
    return (
        <Router>
            <Switch>
                <Route path="/react-context" component={ContextComponents} />
                <Route path="/react-HOC" component={HeigherOrderComponent} />
                <Route path="/react-Hooks" component={HooksComponents} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

function Header() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse ">
            &ensp;
        <Link to="/"><button className='badge list-group-item'><h6 className="text-dark">Home</h6></button></Link>
            &ensp;
         <Link to="/react-context"><button className='badge list-group-item'><h6 className="text-dark">Context</h6></button></Link>
            &ensp;
         <Link to="/react-HOC"><button className='badge list-group-item'><h6 className="text-dark">HOC</h6></button></Link>
            &ensp;
         <Link to="/react-Hooks"><button className='badge list-group-item'><h6 className="text-dark">Hooks</h6></button></Link>

        </nav>

    )
}

export { RouteStack, Header };
