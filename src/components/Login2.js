import React, {Component} from 'react';
import {connect} from 'react-redux';
class LoginUI extends Component {
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

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);

export default Login;