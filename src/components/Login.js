import React, { Component } from 'react';
import Register from '../components/Register';
import '../style/login.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import axios from 'axios'

class Login extends Component {
  constructor(){
    super();
  }
  register(username,password,that){
      //alert(username);
      //alert(password);
      axios.post('/api/logon','username='+username+'&password='+password)
      .then(function(res){
        if(res.data){
          that.props.history.push("/")
        }else{
          alert("账号密码不匹配")
        }
      })
    }
  render() {
    return (
      <div className="Login">
        <header className="myheader">
          <Link to="/" className="left tohome">&lt;</Link>
          <div className="left title">登录</div>
          <Link to="/register" className="right toregister">立即注册</Link>
        </header>
        <section className="bg"></section>
          <div className="ui-form">
            <div className="ui-form-item ui-form-item-small-mg ui-border-b">
              <label>手机号码</label>
              <input type="tel" placeholder="请输入手机号码" ref="user" />
              <i className="icon-phone"></i>
            </div>
            <div className="ui-form-item ui-form-item-small-mg">
              <label>登录密码</label>
              <input type="password" placeholder="请输入登录密码" ref="pw"/>
              <i className="icon-invisible"></i>
            </div>
          </div>
          <div className="ui-btn-wrap ui-form-t">
           
            <button type="submit" className="ui-btn-lg ui-btn-danger" onClick={()=>{this.register(this.refs.user.value,this.refs.pw.value,this)}}>
          登录
          </button>
          </div>
          <div className="login-link clearfix">
            <small className="pull-right">
              <a className="" href="javascript:;">忘记密码？</a>
            </small>
          </div>
          <ul className="login-tips">
            <li className="login-tip-item">
            *买房宝用户请用绑定的手机号作为用户名登录，登录密码不变(点击“忘记密码”可进行重置)。
            </li>
            </ul>
      </div>
    );
  }
}

export default Login;
