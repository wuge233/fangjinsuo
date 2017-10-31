import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Index from '../components/Index';
import List from '../components/List';
import Login from '../components/Login';
import More from '../components/More';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index}/>
      <Route path="/list" component={List}/>
      <Route path="/login" component={Login}/>
      <Route path="/more" component={More}/>
      <ul>
        <li><Link to="/">
            <p>首页</p>
        </Link></li>
        <li><Link to="/list">投资</Link></li>
        <li><Link to="/login">登录</Link></li>
        <li><Link to="/more">我的</Link></li>
      </ul>
    </div>
  </Router>
)
export default App