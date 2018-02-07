import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch,Redirect,NavLink} from 'react-router-dom';
//BrowserRouter 路由容器 as 别名
import Search from './pages/Search';
import Mine from './pages/Mine';
import Job from './pages/Job';
//import NavLink from './pages/NavLink'

class App_index extends Component {
  render() {
    return (
      <div className="wrap">
        <Router>
          <div className="App">
            <header>拉勾网</header>
            <div className = "content">
              <Route path="/job" component={Job}></Route>
              <Route path="/search" component={Search}></Route>
              <Route path="/mine" component={Mine}></Route>
            </div>
            <ul className = "footer">
                <li><NavLink to="/job" >职位</NavLink></li>
                <li><NavLink to="/search">搜索</NavLink></li>
                <li><NavLink to="/mine">我的</NavLink></li>
            </ul>
          </div>
        </Router>
      </div>
    );
  }
}

export default App_index;