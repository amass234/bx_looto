import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Login from './Login'
import Home from './Home/Home'

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Route path="/posts" component={Post} />
        <Route path="/projects" component={Project} /> */}
    </div>
    );
  }
}

export default App;
