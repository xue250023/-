import React, { Component } from 'react'
import Likebox from '../compontent/Likebox'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
class Jiesuan extends Component {
    render() {
        return (
            <div>
                <div class="headerbox">
                    <div class="header">
                        <div class="headerL">
                            <a onclick="javascript:history.back(-1)" class="goback"><img src={require("../static/images/goback.png")}  /></a>
                        </div>
                        <div class="headerC">
                            <p>交易详情</p>
                        </div>
                        <div class="headerR"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="hbox"></div>
                <div class="kbox"></div>
                <div class="paysuccess">
                    <div class="pay1">
                        <div class="pay1_L">
                            <img src={require("../static/images/pay1.png")}/>
                        </div>
                        <div class="pay1_R">
                            <p class="p1">付款成功啦！</p>
                            <p class="p2">本商城不会以付款异常为由要求您退款，谨防诈骗</p>
                        </div>
                    </div>
                    <div class="pay2">
                        <NavLink to={{ pathname: '/dingdan'}} class="seedd" onClick={() => { window.location.replace('http://localhost:3000/dingdan') }} >查看订单</NavLink>
                        <NavLink to={{ pathname: '/'}} class="comeshop" onClick={() => { window.location.replace('http://localhost:3000/') }} >继续购物</NavLink>
                    </div>
                </div>
                <div class="kbox"></div>
                <Likebox/>
            </div>
        
        )
    }
}



export default Jiesuan

