import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/help.scss";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Safe from '../components/Safe';

class HelpUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="help">
				<header>
					<div className="header">
						<a href="#" className="header-back">
							<i className="icon"></i>
						</a>
						<div className="header-title">帮助中心</div>
						<div className="header-placeholder"></div>
					</div>
				</header>

				<ul className="help-list">
					<li>
						<a href="#">1、充值提现</a>
						<div className="help-icon"></div>
					</li>
					<li>
						<Link to={`${this.props.match.url}/detail/safe`}>
							<a href="#">2、安全中心</a>
							<div className="help-icon"></div>
						</Link>
					</li>
					<li>
						<a href="#">3、投资收益</a>
						<div className="help-icon"></div>
					</li>
					<li>
						<a href="#">4、注册登录</a>
						<div className="help-icon"></div>
					</li>
					<li>
						<a href="#">5、我要借款</a>
						<div className="help-icon"></div>
					</li>
				</ul>
				<Route path={`${this.props.match.url}/safe`} component={Safe} />
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