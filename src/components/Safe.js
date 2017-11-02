import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../style/safe.scss";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SafeUI extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div id="safe">
				
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

const Safe = connect(mapStateToProps, mapDispatchToProps)(SafeUI);

export default Safe;