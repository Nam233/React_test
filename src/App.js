import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch,Redirect,NavLink} from 'react-router-dom';
//BrowserRouter 路由容器 as 别名
import './App.css';
import './jobItem.css';
import './mine.css';
import './Detail.css';

import App_index from './App_index';
import Login from './pages/Login';
import Regist from './pages/Regist';
import Detail from './pages/Detail';
//import NavLink from './pages/NavLink'

class App extends Component {
  render() {

    return (
     <div className = "router">
        <Router>
          <Switch> 
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/regist" component={Regist}></Route>
              <Route exact path="/detail" component={Detail}></Route>
              <Route path="/" component={App_index}></Route>
          </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
