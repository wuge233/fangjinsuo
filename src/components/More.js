import React, {Component} from 'react';
import {connect} from 'react-redux';
class MoreUI extends Component {
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

const More = connect(mapStateToProps, mapDispatchToProps)(MoreUI);

export default More;