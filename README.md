This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In the project directory, you can run:

`npm start`  
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

`npm test`  
Launches the test runner in the interactive watch mode.

`npm run build`  
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Application Notes
Uses function components vs class components:

```JavaScript
import React from 'react';
const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
export default About;
```

vs

```JavaScript
import React, { Component } from 'react';
class StudentList extends Component {
  render() {
    return (
      <h2>Student Details</h2>
    ) 
  }
}
export default StudentList;
```

## Client-side Routing
This app uses the `BrowserRouter` from `react-router-dom` for client-side routing. 

```JavaScript
const Router = ReactRouterDom.BrowserRouter;
```

Then we can setup `Route`s with `Link`s to various components.
Example: 
```JavaScript
const Route = ReactRouterDom.Router;
const Link =  ReactRouterDom.Link;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/animals">Animals</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/animals" component={Animals} />
        </div>
      </Router>
    );
  }
}
```

>If we were to add server side routing, to distinguish client routers from server routes, then we should use the `HashRouter` instead so that our client-side routes use `/#/path` to distinguish them from the server-side routes.

## Deeper Links
If we have nested components, we may have nested routers as well. 

Instead of constantly repeating the full url we can use `props.match.url` which is set by `react-router-dom`.

For example:
```JavaScript
const Animals = ({ match }) => (
    <div>
        <h2>Animals</h2>
        <ul>
            <li><Link to="/animals/farm">Farm</Link></li>
            <li><Link to="/animals/forest">Forest</Link></li>
            <li><Link to="/animals/ocean">Ocean</Link></li>
        </ul>
        <Route exact path="/animals/farm" component={FarmAnimals} />
        <Route path="/animals/forest" component={ForestAnimals} />
        <Route path="/animals/ocean" component={OceanAnimals} />
    </div>
);
```

Can become:
```JavaScript
const Animals = ({ match }) => (
    <div>
        <h2>Animals</h2>
        <ul>
            <li><Link to={`${match.url}/farm`}>Farm</Link></li>
            <li><Link to={`${match.url}/forest`}>Forest</Link></li>
            <li><Link to={`${match.url}/ocean`}>Ocean</Link></li>
        </ul>
        <Route exact path={`${match.url}/farm`} component={FarmAnimals} />
        <Route path={`${match.url}/forest`} component={ForestAnimals} />
        <Route path={`${match.url}/ocean`} component={OceanAnimals} />
    </div>
);
```

## Query Strings
We can use query strings as well, but it is helpful to bring in another library to help with this.  We will use `query-string` for this.

Without query-string, we can see the search string in the props.location:
```JavaScript
class Search extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Search</h2>
                <pre>{JSON.stringify(this.props.match)}</pre>
                <h3>Search String</h3>
                <pre>{JSON.stringify(this.props.location.search)}</pre>
            </div>
        );
    }
};
```

Which for the url `http://localhost:3000/search?legs=1000&type=insect` would show something like:
```
Search
{"path":"/search","url":"/search","isExact":true,"params":{}}
Search String
"?legs=1000&type=insect"
```

By using query-string, we can parse that search string into an object:
```JavaScript
    render() {
        return (
            <div>
                <h2>Search</h2>
                <pre>{JSON.stringify(this.props.match)}</pre>
                <h3>Search Object using query-string</h3>
                <pre>{JSON.stringify(qs.parse( this.props.location.search) )}</pre>
            </div>
        );
    }
```

Which then shows:
```
Search
{"path":"/search","url":"/search","isExact":true,"params":{}}
Search Object using query-string
{"legs":"1000","type":"insect"}
```