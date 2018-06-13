import React, { Component } from "react";
import Button from '@material-ui/core/Button';

//gestion des routes
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

//appel css
import './app.css'

class App extends Component {
  render() {
    return <div>
        <ul>
          <Link to="/">Home</Link> / <Link to="/about">About</Link>
        </ul>
        <h1>LA route des vins</h1>
        <p className="test">Ceci est un test</p>
        <p color="primary"> abcdefghijklmnopqrstuvwxyz</p>
        <Button variant="contained" color="secondary">OK</Button>
        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>;
  }
}

export default App;
