import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../style/more.scss";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Help from '../components/Help';

class MoreUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="more">
				<header>
					<div className="header">
						<a href="#" className="header-back">
							<i className="icon"></i>
						</a>
						<div className="header-title">更多</div>
						<div className="header-placeholder"></div>
					</div>
				</header>

				<div className="morebanner">
				</div>

				<ul className="morelist">
					<li>
						<a>
							<div className="list-icon server">
								
							</div>
							<div className="list-info">
								客服热线
							</div>
							<div className="list-txt">
								10101818
							</div>
							<div className="list-arrow">
							</div>
						</a>
					</li>
					<li>
						<a>
							<div className="list-icon weixin">
								
							</div>
							<div className="list-info">
								官方微信
							</div>
							<div className="list-txt">
								房金锁官微
							</div>
						</a>
					</li>
					<li>
						<a>
							<div className="list-icon weibo">
								
							</div>
							<div className="list-info">
								官方微博
							</div>
							<div className="list-txt">
								房金锁官博
							</div>
						</a>
					</li>
					<li>
						<a>
							<div className="list-icon guanwang">
								
							</div>
							<div className="list-info">
								官方网站
							</div>
							<div className="list-txt">
								www.fangjs.com
							</div>
						</a>
					</li>
					<li>
					<Link to={"/help"}>
						<a>
							<div className="list-icon help">
								
							</div>
							<div className="list-info">
								帮助中心
							</div>
							<div className="list-txt">
								
							</div>
							<div className="list-arrow">
							</div>
						</a>
					</Link>
					</li>
					<li>
						<a>
							<div className="list-icon jieshao">
								
							</div>
							<div className="list-info">
								房金锁介绍
							</div>
							<div className="list-txt">
								
							</div>
							<div className="list-arrow">
							</div>
						</a>
					</li>
				</ul>
				<Route path={"/help"} component={Help} />
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

const More = connect(mapStateToProps, mapDispatchToProps)(MoreUI);

export default More;