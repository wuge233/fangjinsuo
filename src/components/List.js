import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/list.scss";
class ListUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="">

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