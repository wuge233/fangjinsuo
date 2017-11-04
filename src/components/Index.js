import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import "../style/index.scss"
import { Carousel, WhiteSpace } from 'antd-mobile';
import More from '../components/More';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class IndexUI extends Component {
	componentDidMount() {
		this.props.getImgs();
	}
	render() {
		return (
			<div id="index">
				<header>
					<div className="title">房金所</div>
					<Link to="/more">
            <div className="user"></div>
          </Link>
				</header>

				<div className="banner">
				    <Carousel
				      className="my-carousel" autoplay={true} infinite dots={true}>
				      {this.props.list.map(ii => (
				        <a href="#" key={ii.title}><img src={ii.image} /></a>
				      ))}
				    </Carousel>
  				</div>

  				<section className="gonggao">
  					<i></i>
  					<span className="gonggao_title">最新公告:</span>
  					<a className="gonggao_word">房金贷+部分借款提前还款公告</a>
  				</section>

  				<div className="round">
  					<div className="round_circle">
  						<div className="round_circle_mask">
  						</div>
  					</div>
  					<div className="round_center">
  						<div className="yield">
  							预期年化收益率
  						</div>
  					    <div className="precent">
  					    	<span>5.90</span>
  					    	<span>%</span>
  					    </div>
  					</div>
  				</div>

  				<ul className="f_list">
  					<li>
  						<i className="money"></i>
  						<span>1000元起投</span>
  					</li>
  					<li>
  						<i className="date"></i>
  						<span>期限58天</span>
  					</li>
  					<li>
  						<i className="bao"></i>
  						<span>一次性还本付息</span>
  					</li>
  				</ul>

  			    <div className="btn">
  			    	<a href="#">立即投资</a>
  			    </div>
            <Route path="/more" component={More}/>
			</div>
		)
	}
}

function getData(dispatch) {
	axios.get("/mobile/api/v1/banners")
		.then((res)=>{
			dispatch({
				type: "GET_IMGS",
				payload: res.data
			})
			
 		})
}

const mapStateToProps = (state)=>{
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getImgs: ()=>{
			getData(dispatch)
		}
	}
}

const Index = connect(mapStateToProps, mapDispatchToProps)(IndexUI);

export default Index;