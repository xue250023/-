import React, { Component } from 'react'

export class Mypart extends Component {
    render() {
        return (
            <div>
                <div class="mypart1">
                    <ul>
                        <li>
                            <a href="jifen.html">
                                <p class="p1">0</p>
                                <p class="p2">我的积分</p>
                            </a>
                        </li>
                        <li>
                            <a href="quanNews1.html">
                                <p class="p1">0</p>
                                <p class="p2">优惠券</p>
                            </a>
                        </li>
                        <li>
                            <a href="dingdan" onClick={() => { window.location.replace('http://localhost:3000/dingdan')}}>
                                <p class="p1">0.00</p>
                                <p class="p2">订单数量</p>
                            </a>
                        </li>
                        <li>
                            <a  href="dingdan" onClick={() => { window.location.replace('http://localhost:3000/dingdan')}}>
                                <p class="p1">0.00</p>
                                <p class="p2">支付订单</p>
                            </a>
                        </li>
                        <li>
                            <a href="dingdan" onClick={() => { window.location.replace('http://localhost:3000/dingdan')}}>
                                <img src={require('../static/images/' + 'my01.png')} />
                                <p class="p2">消费记录</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="kbox"></div><div class="kbox"></div>
                <div class="clear"></div>
                <div class="mypart2">
                    <div class="con">
                        <div class="pa2_tit">
                            <p>我的订单</p>
                            <a href="dingdan" onClick={() => { window.location.replace('http://localhost:3000/dingdan')}}>查看更多订单 ></a>
                        </div>
                        <ul>
                            <li>
                                <a href="dingdan" onClick={() => { window.location.replace('http://localhost:3000/dingdan')}}>
                                    <div class="ddimg">
                                        <img src={require('../static/images/' + 'my02.png')} />
                                    </div>
                                    <p>待付款</p>
                                </a>
                            </li>
                            <li>
                                <a href="allDdfhno.html">
                                    <div class="ddimg">
                                        <img src={require('../static/images/' + 'my03.png')} />
                                    </div>
                                    <p>待发货</p>
                                </a>
                            </li>
                            <li>
                                <a href="allDdshno.html">
                                    <div class="ddimg">
                                        <img src={require('../static/images/' + 'my04.png')} />
                                    </div>
                                    <p>待收货</p>
                                </a>
                            </li>
                            <li>
                                <a href="allDdpjno.html">
                                    <div class="ddimg">
                                        <img src={require('../static/images/' + 'my05.png')} />
                                        <div class="num">2</div>
                                    </div>
                                    <p>待评价</p>
                                </a>
                            </li>
                            <li>
                                <a href="dingdan" onClick={() => { window.location.replace('http://localhost:3000/dingdan')}}>
                                    <div class="ddimg">
                                        <img src={require('../static/images/' + 'my06.png')} />
                                    </div>
                                    <p>退款/售后</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="kbox"></div><div class="kbox"></div>
                <div class="clear"></div>
                <div class="mypart2">
                    <div class="con">
                        <div class="pa2_tit">
                            <p>我的优惠券</p>
                            <a href="quanNews1.html">查看更多订单 ></a>
                        </div>

                    </div>
                </div>
                <div class="clear"></div>
                <div class="kbox"></div><div class="kbox"></div>
                <div class="clear"></div>
                <div class="mypart3">
                    <ul>
                        <li>
                            <a href="javascript:void()">
                                <img src={require('../static/images/' + 'my11.png')} />
                                <p>我的活动</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void()">
                                <img src={require('../static/images/' + 'my12.png')} />
                                <p>社区</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void()">
                                <img src={require('../static/images/' + 'my13.png')} />
                                <p>客户服务</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void()">
                                <img src={require('../static/images/' + 'my14.png')} />
                                <p>京东超市</p>
                            </a>
                        </li>
                        <li>
                            <a href="quanNews1.html">
                                <img src={require('../static/images/' + 'my7.png')} />
                                <p>我的优惠券</p>
                            </a>
                        </li>
                        <li>
                            <a href="addressGL.html">
                                <img src={require('../static/images/' + 'my8.png')} />
                                <p>收获地址</p>
                            </a>
                        </li>
                        <li>
                            <a href="jifen.html">
                                <img src={require('../static/images/' + 'my9.png')} />
                                <p>我的积分</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void()">
                                <img src={require('../static/images/' + 'my10.png')} />
                                <p>我的客服</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
                <div class="kbox"></div><div class="kbox"></div>
                <div class="clear"></div>
                <div class="kbox"></div>
            </div>
        )
    }
}

export default Mypart
