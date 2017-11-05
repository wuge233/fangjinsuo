import {connect} from 'react-redux';
import axios from 'axios';
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import "../style/detail.scss";
import List from '../components/List';
class DetailUI extends Component {
  componentDidMount() {
    this.props.getDetails();
  }
  getValueFromObj(obj, key) {
    if(obj != null && obj[key] != null) {
      return obj[key];
    }
    return null;
  }
  render() { 
     // var item1 = this.props.list1.product != null ? <h3 key={this.props.list1.product.name}>{this.props.list1.product.name}</h3> : null;
     var item1 = <h3>{this.getValueFromObj(this.props.list1.product, "name")}</h3>;
     var item2 = this.props.list1.product != null ? <span key={this.props.list1.product.availableAmount}>{this.props.list1.product.availableAmount}</span> : null;
     var item3 = this.props.list1.product != null ? <span key={this.props.list1.product.holdAmount}>{this.props.list1.product.holdAmount}</span> : null;
     var item4 = this.props.list1.product != null ? <span key={this.props.list1.product.period}>{this.props.list1.product.period}</span> : null;
     var item5 = this.props.list1.feature != null ? <span key={this.props.list1.feature.transDesc}>{this.props.list1.feature.transDesc}</span> : null;
     var item6 = this.props.list1.feature != null ? <span key={this.props.list1.feature.minDesc}>{this.props.list1.feature.minDesc}</span> : null;
     var item7 = this.props.list1.feature != null ? <span key={this.props.list1.feature.repayDesc}>{this.props.list1.feature.repayDesc}</span> : null;
     var item8 = this.props.list1.lender != null ? <dd key={this.props.list1.lender.name}>{this.props.list1.lender.name}</dd> : null;
     var item9 = this.props.list1.lender != null ? <dd key={this.props.list1.lender.sex}>{this.props.list1.lender.sex}</dd> : null;
     var item10 = this.props.list1.lender != null ? <dd key={this.props.list1.lender.age}>{this.props.list1.lender.age}</dd> : null;
     var item11 = this.props.list1.lender != null ? <dd key={this.props.list1.lender.mobile}>{this.props.list1.lender.mobile}</dd> : null;
     var item12 = this.props.list1.lender != null ? <dd key={this.props.list1.lender.identity}>{this.props.list1.lender.identity}</dd> : null;
     var item13 = this.props.list1.lender != null ? <dd key={this.props.list1.lender.usage}>{this.props.list1.lender.usage}</dd> : null;
     　
     
    return(
      <div className="detail">
        <header>
          <div className="header">
            <Link to="/list" className="header-back">
              <i className="icon"></i>
            </Link>
            <div className="header-title">产品详情</div>
            <div className="header-placeholder"></div>
          </div>
        </header>

          <div className="ui-overview">
            <i className="icon-SXD"></i>
            {item1}
            <div className="earn-wrapper">
              <div className="left">
                <strong>6.60%</strong>
              </div>
              <div className="left">
                预计年化收益率
              </div>
            </div>
            <section className="detail-data">
              <div className="data-item">
                <div className="item-title">
                  可投金额
                </div>
                <div className="item-count">
                    {item2}
                    <span>元</span>
                </div>
              </div>
              <div className="data-item">
                <div className="item-title">
                  标的总额
                </div>
                <div className="item-count">
                    {item3}
                    <span>元</span>
                </div>
              </div>
              <div className="data-item">
                <div className="item-title">
                  投资期限
                </div>
                <div className="item-count">
                    {item4}
                </div>
              </div>
            </section>
            <section className="feature-list">
              <div className="f-item">
                <i className="icon-transfer"></i>
                {item5}
              </div>
              <div className="f-item">
                <i className="icon-dollar"></i>
                {item6}
              </div>
              <div className="f-item">
                <i className="icon-interest"></i>
                {item7}
              </div>
            </section>
            <div className="ui-box">
              <h3 className="ui-box-tit">
                <i className="icon-huan"></i>
                <span>还款来源信息</span>
              </h3>
              <div className="ui-box-group">
                <dl>
                  <dt>还款来源:</dt>
                  <dd>
                    <p>1.借款人自有资金</p>
                    <p>2.借款人投资项目待收金额</p>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="ui-box-user"> 
              <h3 className="ui-box-tit">
                <i className="icon-huan"></i>
                <span>借款人信息</span>
              </h3>
              <div className="ui-box-user-count">
                <dl>
                  <dt>姓名:</dt>
                  {item8}

                  <dt>性别:</dt>
                  {item9}

                  <dt>年龄:</dt>
                  {item10}

                  <dt>手机:</dt>
                  {item11}

                  <dt>身份证:</dt>
                  {item12}

                  <dt>借款用途:</dt>
                  {item13}

                  

                </dl>
              </div>
            </div>
          </div>

      </div>
    )
  }
}

const mapState2Props = (state, prop)=>{
  return {
    list1: state.list1
  }
}

const mapDispatch2Props = (dispatch, props)=>{
  return {
    getDetails: ()=>{
      getData(dispatch, props)
    }
  }
}

function getData(dispatch, props) {
  axios.get(`/mobile/api/v1/products/${props.match.params.id}`)
  .then((res)=>{
    dispatch({
      type: "GET_DETAIL_DATA",
      payload: res.data
    })
  })
}

const Detail = connect(mapState2Props, mapDispatch2Props)(DetailUI);

export default Detail;