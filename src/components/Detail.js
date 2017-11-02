import {connect} from 'react-redux';
import axios from 'axios';
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import "../style/detail.scss";
class DetailUI extends Component {
  componentDidMount() {
    
  }
  render() {  
    return(
      <div className="detail">
        <header>
          <div className="header">
            <a href="#" className="header-back">
              <i className="icon"></i>
            </a>
            <div className="header-title">帮助</div>
            <div className="header-placeholder"></div>
          </div>
        </header>
      </div>
    )
  }
}

const mapState2Props = (state, prop)=>{
  return {
    list: state.list
  }
}

const mapDispatch2Props = (dispatch)=>{
  return {
    getData: function(){
    }
  }
}

const Detail = connect(mapState2Props, mapDispatch2Props)(DetailUI);

export default Detail;