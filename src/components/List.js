import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/list.scss";
import axios from 'axios';
class ListUI extends Component {
	componentDidMount() {
		this.props.getlists();
	}
	render() {
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
							<span>默认</span>
						</a>
					</li>
					<li>
						<a>
							<span>默认</span>
						</a>
					</li>
				</ul>

				<ul class="list-list">
					
				</ul>
			</div>


			



		)
	}
}

function getData(dispatch) {
	axios.get("")
		.then((res)=>{
			dispatch({
				type: "GET_LIST_DATA",
				payload: res.data
			})
			
 		})
}

const mapStateToProps = (state)=>{
	return {
		list1: state.list1
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		getlists: ()=>{
			getData(dispatch)
		}
	}
}

const List = connect(mapStateToProps, mapDispatchToProps)(ListUI);

export default List;