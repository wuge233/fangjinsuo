import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/list.scss";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
class ListUI extends Component {
	componentDidMount() {

	}
	render() {
		var arr = ["17032900025857","17020600025596","17011500025522","16112100025223","16102800025169","ALC2016101400025089","ALC2016101400025086","ALC2016101400025090"];
		var items = arr.map((item, index)=>{
      		return <li key={item}>
						<div className="ui-pro">
							<h2 className="pro-title">房金所+</h2>
							<section className="section1">
								<div className="pro-data-r">
									<p className="ui-num">
										5.90%
									</p>
								</div>
							</section>
							<section className="section2">
								<p className="ui-num">
									<span className="ui-data-p">58天</span>
								</p>
							</section>
							<section className="section3">
								<button className="ui-invest">
									<Link to={"/detail/" + item}>
										售罄
									</Link>
								</button>
							</section>
						</div>
					</li>
      			
    	})
		return (
			<div id="list">
				<form className="index-nav">
					<input type="text" className="tab" value="理财" unselectable="on" readonly="readonly"/>
					<input type="text" className="tab" value="网贷" unselectable="on" readonly="readonly"/>
					<input type="text" className="tab" value="债权转让" unselectable="on" readonly="readonly"/>
				</form>
				<ul className="ui-list">
					<li>
						<a>
							<span>默认</span>
						</a>
					</li>
					<li>
						<a>
							<span>利率</span>
						</a>
					</li>
					<li>
						<a>
							<span>期限</span>
						</a>
					</li>
				</ul>

				<ul class="pro-list">
					{items}
				</ul>
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

const List = connect(mapStateToProps, mapDispatchToProps)(ListUI);

export default List;