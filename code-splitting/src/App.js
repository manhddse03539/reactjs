import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <Router>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ol>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Suspense>
    </Router>
  );
}

export default App;
