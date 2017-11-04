import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import "../style/pub.scss"
import Index from '../components/Index';
import List from '../components/List';
import Login from '../components/Login';
import Register from '../components/Register';
import More from '../components/More';
import Help from '../components/Help';
import Safe from '../components/Safe';
import Recharge from '../components/Recharge';
import Invest from '../components/Invest';
import Signin from '../components/Signin';
import Loan from '../components/Loan';
import Intro from '../components/Intro';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index}/>
      <Route path="/list" component={List}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/more" component={More}/>
      <Route path="/help" component={Help}/>
      <Route path="/safe" component={Safe}/>
      <Route path="/recharge" component={Recharge}/>
      <Route path="/invest" component={Invest}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/loan" component={Loan}/>
      <Route path="/intro" component={Intro}/>


      <ul className="route">
        <li>
          <NavLink to="/" activeclassname="on">
            <dl>
              <dt className="shouye"></dt>
              <dd>首页</dd>
            </dl>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list">
            <dl>
              <dt className="touzi"></dt>
              <dd>投资</dd>
            </dl>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <dl>
              <dt className="denglu"></dt>
              <dd>登录</dd>
            </dl>
          </NavLink>
        </li>
        <li>
          <NavLink to="/more">
            <dl>
              <dt className="wode"></dt>
              <dd>我的</dd>
            </dl>
          </NavLink>
        </li>
      </ul>
    </div>
  </Router>
)
export default App