import React, { Component } from 'react';
// ES6 (Webpack) Destructuring syntax
import { Route, BrowserRouter as Router, Link} from 'react-router-dom';
// Replaces
// import ReactRouterDom from 'react-router-dom';
// const Route = ReactRouterDom.Router;
// const Router = ReactRouterDom.BrowserRouter;

// If we were to add server side routing, to distinguish client routers from server routes
// We should use the HashRouter not the BrowserRouter.

// Page components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Animals from './pages/Animals/Animals';
import Details from './pages/Details/Details';
import Search from './pages/Search/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/animals">Animals</Link></li>
            <li><Link to="/details/47">Details</Link></li>
            <li><Link to="/search?legs=1000&type=insect">Search</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/animals" component={Animals} />
          <Route path={`/search`} component={Search} />
          <Route exact path={`/details/`} component={Search} />
          <Route exact path={`/details/:id`} component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
