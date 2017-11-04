import React, { Component } from 'react';
import '../style/register.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = { 
          username: '',
          password: ''
      }
      // this.saveUser.bind(this);
  }

   // phonenumber(data){
   //  this.setState({
   //    phonenumber: data
   //  })
   // }
   // password(data){
   //  this.setState({
   //    password: data
   //  })
   // }
   // changeUsername(e){
   //  let uname = e.target.value;
   //  this.setState({
   //    userName: uname
   //  })
   //  console.log(this.state.userName);
   // }
   // changePassword(e){
   //  let upwd = e.target.value;
   //  this.setState({
   //    userPswwword: upwd
   //  })
   // }
   register(username,password,that){
    // alert(111)
    // console.log(this.state.phonenumber);
    // console.log(this.state.password);
    // var userRegex = /^1[3,4,5,7,8]\d{9}$/;
    // var pwRegex = /^[A-Za-z0-9_]{8,20}$/;
    // if(this.state.phonenumber==''){
    //   this.setState({
    //     unameHelp: "用户名不能为空"
    //   })
    // }else{
    //   if(!userRegex.test(this.state.phonenumber)){
    //     this.setState({
    //       unameHelp: "请输入正确的11位电话号"
    //     })
    //   }else{
    //     this.setState({
    //       unameHelp:""
    //     })
    //   }
    // }
    // if(this.state.password==''){
    //   this.setState({
    //     upwdHelp: "密码不能为空"
    //   })
    // }else{
    //   if(!pwRegex.test(this.state.password)){
    //     this.setState({
    //       upwdHelp: "请输入8-20个字符（字母、数字，区分大小写）"
    //     })
    //   }else{
    //     this.setState({
    //       upwdHelp: ""
    //     })
    //   }

      //alert(username);
      //alert(password);
    
             axios.post('/api/register','username='+username+'&password='+password)
          .then(function(res){
            if(res.data){
              that.props.history.push("/login")
              //alert(111)
            }else{
              alert("用户名已存在")
            }
          })
     
    
    
    // axios.post("/api/register",{
    //   username: this.state.phonenumber,
    //   password: this.state.password
    // }).then(res=>{console.log(res);
    //   if(this.state.unameHelp==''&&this.state.upwdHelp==''){
    //     if(res.data===false){
    //       alert('用户已存在')
    //     }else{
    //       this.props.history.push('/login')
    //     }
    //   }
    // }).catch(error=>{console.log(error);
    // })
   }

  render() {
    console.log(this)
    return (
      <div className="Register FM-main">
        <header className="myhead">
          <Link to="/" className="left tohome">&lt;</Link>
          <div className="left title">注册</div>
        </header>
        <section className='bgc'></section>
          <div className="ui-form">
            <div className="ui-form-item ui-form-item-small-mg ui-border-b">
              <label>手机号码</label>
              <input type="tel" placeholder="请输入手机号码" maxLength="11" ref="user"/>
              <i className="icon-phone"></i>
            </div>
            <div className="ui-form-item ui-form-item-vcode ui-form-item-small-mg ui-border-b">
              <label>图形验证码</label>
              <input type="text" placeholder="请输入图形验证码" maxLength="4"/>
            </div>
            <div className="ui-form-item ui-form-item-small-mg ui-border-b">
              <label>验证码</label>
              <input type="text" placeholder="请输入验证码" maxLength="6"/>
              <button className="ui-form-vcode-btn">免费获取</button>
            </div>
            <div className="ui-form-item ui-form-item-small-mg ui-border-b">
              <label>登录密码</label>
              <input type="password" placeholder="请设置登录密码" maxLength="20" ref="pw"/>
            </div>
            <div className="ui-form-item ui-form-item-small-mg ui-border-b">
              <label>确认密码</label>
              <input type="password" placeholder="请确认登录密码" maxLength="20"/>
            </div><div className="ui-form-item ui-form-item-small-mg">
              <label>邀请码</label>
              <input type="text" placeholder="请输入邀请码（选填）" maxLength="20"/>
            </div>
          </div>
          <p className="ui-form-hint">*8-20个字符（字母、数字），区分大小写</p>
          <p className="text-left ui-form-line-single"> 
            <span>已有账号，</span>
            <Link className="" to="/login">直接登录&gt;</Link>
          </p>
          <div className="ui-btn-wrap">
          <button className="ui-btn-lg ui-btn-danger" onClick={()=>this.register(this.refs.user.value,this.refs.pw.value,this)}>
            提交注册</button>
          </div>
          <p className="ui-form-line-notop">
            <span>注册代表同意</span>
            <a className="" href="/mobile/docs/agreement/55f28296a05dbef1390b5537">《房金所平台服务协议》
            </a>
            <span>、</span>
            <a className="" href="/mobile/docs/agreement/56289503a420bfc8444f761a">《新浪支付服务使用协议》
            </a>
            <span>、</span>
            <a className="" href="/mobile/docs/agreement/592951ead451ae22b9c6e25a">《上海华瑞银行资金存管三方协议》
            </a>
          </p>
      </div>
    );   
  }
}

// class PhoneNumber extends Component{
//   constructor(prop){
//     super(prop);
//   }
//   render{
//     var that = this;
//     return <input ref="phone" type="text" placeholder="请输入手机号码"
//     _this.props.phonenumbertext(ev.target.value)}}/>
//   }
// }

// class Password extends Component{
//   constructor(prop){
//     super(prop);
//    }
//    render(){
//     var that = this;
//     return <input ref="pw" type="password" placeholder="请输入密码"
//      _this.props.phonenumbertext(ev.target.value)}}/>
//    }
//    }


export default Register;
