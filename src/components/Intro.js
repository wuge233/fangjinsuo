import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/intro.scss";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import More from '../components/More';

class IntroUI extends Component {
	componentDidMount() {
	}
	render() {
		return (
			<div id="intro">
				<header>
					<div className="header">
						<Link to="/more" className="header-back">
							<i className="icon"></i>
						</Link>
						<div className="header-title">关于我们</div>
						<div className="header-placeholder"></div>
					</div>
				</header>

				<div className="content first">
					<div className="pic1">

					</div>
					<p className="title">我是谁</p>
					<p className="txt">房金所是国内安全运营超过2年的</p>
					<p className="txt">互联网金融信息服务平台</p>
					<p className="txt">为投资人提供安全、透明、便捷的</p>
					<p className="txt">优选投资项目</p>
				</div>

				<div className="content">
					<div className="pic2">

					</div>
					<p className="title">我的成绩</p>
					<p className="txt">●中国互联网金融协会首批会员单位。</p>
					<p className="txt">●2016互联网金融领先企业十强。</p>
					<p className="txt">●2015互联网金融公司“投资者保护杰出贡献奖”。</p>
					<p className="txt">●运营2周年累计成交额20亿+。</p>
				</div>

				<div className="content">
					<div className="pic3">

					</div>
					<p className="title">我的愿景</p>
					<p className="txt">顺应互联网高速发展和金融改革发展的步</p>
					<p className="txt">伐，打造国内具有金融</p>
					<p className="txt">专业实力、互联网高效运营的互联网</p>
					<p className="txt">金融信息服务平台</p>
				</div>

				<div className="subcontent">
					<a href="#" className="subcontent-list">
						<i className="icon-boke"></i>
						<span>房金所官博</span>
					</a>
					<a href="#" className="subcontent-list">
						<i className="icon-weixin"></i>
						<span>房金所官微</span>
					</a>
				</div>

				<Route path="/more" component={More}/>	
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


const Intro = connect(mapStateToProps, mapDispatchToProps)(IntroUI);

export default Intro;