import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/help.scss";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Safe from '../components/Safe';
import Recharge from '../components/Recharge';
import Invest from '../components/Invest';
import Signin from '../components/Signin';
import Loan from '../components/Loan';

class HelpUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="help">
				<header>
					<div className="header">
						<Link to="/more" className="header-back">
							<i className="icon"></i>
						</Link>
						<div className="header-title">帮助中心</div>
						<div className="header-placeholder"></div>
					</div>
				</header>

				<ul className="help-list">
					<li>
						<Link to={"/recharge"}>
							<a href="#">1、充值提现</a>
							<div className="help-icon"></div>
						</Link>
					</li>
					<li>
						<Link to={"/safe"}>
							<a href="#">2、安全中心</a>
							<div className="help-icon"></div>
						</Link>
					</li>
					<li>
						<Link to={"/invest"}>
							<a href="#">3、投资收益</a>
							<div className="help-icon"></div>
						</Link>
					</li>
					<li>
						<Link to={"/signin"}>
							<a href="#">4、注册登录</a>
							<div className="help-icon"></div>
						</Link>
					</li>
					<li>
						<Link to={"/loan"}>
							<a href="#">5、我要借款</a>
							<div className="help-icon"></div>
						</Link>
					</li>
				</ul>
				<Route path={"/safe"} component={Safe} />
				<Route path={"/recharge"} component={Recharge} />
				<Route path={"/invest"} component={Invest}/>
				<Route path={"/signin"} component={Signin}/>
				<Route path={"/loan"} component={Loan}/>
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

const Help = connect(mapStateToProps, mapDispatchToProps)(HelpUI);

export default Help;