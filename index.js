import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ErrorPage from './ErrorPage';
import ListView from './ListView/ListView';
import ListDetail from './ListView/ListDetail';

// Define all routes in one place
const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/listview", component: ListView },
  { path: "/listdetail/:id", component: ListDetail },
];

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Switch>
              {routes.map(({ path, exact, component }, idx) => (
                <Route 
                  key={idx} 
                  path={path} 
                  exact={exact} 
                  component={component} 
                />
              ))}
              {/* Fallback route */}
              <Route component={ErrorPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
