import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/recharge.scss";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Help from '../components/Help';

class RechargeUI extends Component {
	constructor(){
		super();
		this.change = this.change.bind(this);
		this.change1 = this.change1.bind(this);
		this.state = {
			zhuangtai: false,
			zhuangtai1: false
		}
	}
	componentDidMount() {
	}
	change(){
		this.state.zhuangtai = !this.state.zhuangtai;
		if(this.state.zhuangtai){
			document.querySelector(".safe-2").style.display = "block";
			document.querySelector(".s2").innerHTML = "-";
		}else{
			document.querySelector(".safe-2").style.display = "none";
			document.querySelector(".s2").innerHTML = "+";
		}
		this.setState({
  			zhuangtai: this.state.zhuangtai
		}, () => {
  			
		});	
	}
	change1(){
		this.state.zhuangtai1 = !this.state.zhuangtai1;
		if(this.state.zhuangtai1){
			document.querySelector(".safe-1").style.display = "block";
			document.querySelector(".s1").innerHTML = "-";
		}else{
			document.querySelector(".safe-1").style.display = "none";
			document.querySelector(".s1").innerHTML = "+";
		}
		this.setState({
  			zhuangtai1: this.state.zhuangtai1
		}, () => {
  			
		});	
	}
	render() {
		return (
			<div id="recharge">
				<header>
					<div className="header">
						<Link to="/help" className="header-back">
							<i className="icon"></i>
						</Link>
						<div className="header-title">帮助中心</div>
						<div className="header-placeholder"></div>
					</div>
				</header>

					<ul className="recharge-list">
						<li onClick={this.change1}>
							<a>
								<div>
									<strong className="s1">+</strong>
									<span>如何修改新浪支付认证手机？</span>
								</div>
							</a>
							<div className="safe-1">
								<p>操作步骤：</p>
								<p>1、在安全中心“支付密码”一行，点击【找回】或者【修改】，进入新浪支付修改支付密码页。</p>
								<p>2、点击页面右上角用户姓名【XXX】，出现下拉菜单“安全中心”，点击【安全中心】进入新浪支付安全中心页。</p>
								<p>3、在新浪支付安全中心“认证手机”一行后方点击【查看】，进入认证手机详情页。</p>
								<p>4、如您原认证手机可以接收验证码短信，请点击【修改】，使用验证码验证身份后设置新手机号码。如您原认证手机不能接收验证码短信，请点击【找回】，使用支付密码、身份证号验证身份后设置新手机号码。</p>
							</div>
						</li>
						<li onClick={this.change}>
							<a>
								<div>
									<strong className="s2">+</strong>
									<span>房金所认证手机如何修改？</span>
								</div>
							</a>
							<div className="safe-2">
								<p>1、如您原认证手机仍可接收短信。</p>
								<p>操作步骤：点击【获取验证码】，填入短信验证码后点击【下一步】，进行认证新手机页，填入新手机号码及相应短信验证码，点击【下一步】，修改认证手机号码完成，页面跳转至安全中心。修改认证手机完成后，使用新手机号码作为账号，登录密码保持不变。</p>
								<p>2、如您原认证手机无法接收短信，但记得投资密码。</p>
								<p>操作步骤：点击【其他方式修改】，进入身份验证页，输入身份证号及投资密码，点击【下一步】，进行认证新手机页面，填入新手机号码及相应短信验证码，点击【下一步】，修改认证手机号码完成，页面跳转至安全中心。修改认证手机完成后，使用新手机号码作为账号，登录密码保持不变。</p>
								<p>3、如您无法通过上述两种方式修改认证手机，请致电10101818通过人工方式修改。</p>
								<p>操作步骤：请致电客服10101818说明情况，客服将通过客服邮箱cs@fangjs.com邮件向您提供《更换认证手机号-申请书》电子版文件。请您按照下述要求向客服邮箱cs@fangjs.com邮件提供相应材料，房金所收件后24个工作小时内使用上海座机与您核实身份信息，请保持手机畅通。</p>
								<p>人工修改认证手机资料：</p>
								<p>1）身份证正反面扫描件/照片，清晰可见。</p>
								<p>2）手持身份证照片，清晰可见。</p>
								<p>3）手签《更换认证手机号-申请书》扫描件/照片，清晰可见。</p>
							</div>
						</li>
					</ul>

					<footer>
						<div className="footer-link">
							<div className="left">
								<span>客服热线:</span>
								<a href="#">10101818</a>
							</div>
							<Link to="/help" className="right">
								帮助中心
							</Link>
						</div>
						<p>©房金所 fangjs.com 沪ICP备14023837号-2</p>
					</footer>
					<Route path="/help" component={Help}/>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getData: function(){
		}
	}
}


const Recharge = connect(mapStateToProps, mapDispatchToProps)(RechargeUI);

export default Recharge;