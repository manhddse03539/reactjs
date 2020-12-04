import './Option.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
const All = lazy(() => import('../galleries/All'));
const Nature = lazy(() => import('../galleries/Nature'));
const People = lazy(() => import('../galleries/People'));
const Computer = lazy(() => import('../galleries/Computer'));
const Food = lazy(() => import('../galleries/Food'));


const Option = (props) => {
    return (
        <Router>
            <div className="Option container">
                <div className="col-9 col-sm-12 px-0">
                    <h4> We are Photo Perfect, A Digital Photography Studio.</h4>
                </div>
                <div className="col-sm-12 Option-btn">
                    <NavLink exact to="/">All</NavLink>
                    <NavLink to="/nature">Nature</NavLink>
                    <NavLink to="/people">People</NavLink>
                    <NavLink to="/computer">Computer</NavLink>
                    <NavLink to="/food">Food</NavLink>
                </div>
            </div >
            <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={All} />
                <Route path="/nature" component={Nature} />
                <Route path="/people" component={People} />
                <Route path="/computer" component={Computer} />
                <Route path="/food" component={Food} />
            </Suspense>
        </Router>
    );
}

export default Option;