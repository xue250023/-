import React, { Component } from 'react'
import Dingdanitem from '../compontent/Dingdanitem'
import axios from 'axios'
import Qs from 'qs'
export default class Dingdan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dingdaninfo:[]
        }
        this.updata= this.updata.bind(this)
    }
    componentDidMount(){
        //请求订单信息
        var _this=this;
        var data1 = {
            cmd: 'getjiesuan'
        }
        axios({
            method: 'post',
            url: 'http://localhost:1188/jiesuan',
            data: Qs.stringify(data1)
        }).then(function (res) {

            _this.setState( { dingdaninfo:res.data});
        }).then(function () {
            // console.log(res.data.carinfo)
           _this.updata()
           console.log(_this.state)
        })
       
    }
    updata(){
        this.setState({'a':'a'})
    }
    render() {
        const item=this.state.dingdaninfo.map((item,index)=>{
            return  <Dingdanitem  itemname={item.itemname} imgdata={item.imgdata}  nowprice={item.nowpric} perprice={item.perprice} />
        })
        return (
            <div>
                <div class="headerbox">
                    <div class="header">
                        <div class="headerL">
                            <a onclick="javascript:history.back(-1)" class="goback"><img src={require('../static/images/' + 'goback.png')} /></a>
                        </div>
                        <div class="headerC">
                            <p>我的订单</p>
                        </div>
                        <div class="headerR"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="hbox"></div>
                <div class="myddstatu">
                    <ul>
                        <li class="on">
                            <a href="#">全部</a>
                        </li>
                        <li>
                            <a href="#">待发货</a>
                        </li>
                        <li>
                            <a href="#">待收货</a>
                        </li>
                        <li>
                            <a href="#">待评价</a>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
                <div class="myddcon">
                   {item}
                </div>
            </div>
        )
    }
}
