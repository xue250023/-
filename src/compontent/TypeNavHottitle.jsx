import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import '../static/css/style.css'
// import '../static/js/banner'
class TypeNavHottitle extends Component {
    render() {
        const imgPath = '../static/images/';
        const typeNavinfo = [
            { 'name': '今日特惠', 'icon': 'typeicon1.png', 'path': '/shoplist' },
            { 'name': '全球购', 'icon': 'typeicon2.png', 'path': '/shoplist' },
            { 'name': '充值中心', 'icon': 'typeicon3.png', 'path': '/' },
            { 'name': '我的积分', 'icon': 'typeicon4.png', 'path': '/points' },
            { 'name': '签到', 'icon': 'typeicon5.png', 'path': '/' },
            { 'name': '优惠券', 'icon': 'typeicon6.png', 'path': 'coupon' },
            { 'name': '水电费', 'icon': 'typeicon7.png', 'path': '/water' },
            { 'name': '分类', 'icon': 'typeicon8.png', 'path': '/shoptype' }]
        const typeNav = typeNavinfo.map((item, index) => {
            return <li>
                <NavLink exact to={{ pathname: `${item.path}` }} onClick={() => { window.location.replace('http://localhost:3000' + `${item.path}`) }}>
                    <img src={require('../static/images/' + `${item.icon}`)} />
                    <p>{item.name}</p>
                </NavLink>

            </li>
        })


        return (
            <div>
                <div class="typeNav">
                    <ul>
                        {typeNav}
                    </ul>
                </div>
                <div class="clear"></div>
                <div class="hotTit">
                    <div class="hotTitL">
                        <img src={require('../static/images/' + 'hotit.png')} />
                    </div>
                    <div class="hotTitR">
                        <p>热门房源！家居商品等你来挑！</p>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="kbox"></div>
                <div class="hotMarket">
                    <div class="hotM_2">
                        <p><span>热门</span>商品</p>
                        <i>太热门啦，要挤爆了</i>
                        <NavLink to={{ pathname: `/shoplist` }} onClick={() => { window.location.replace('http://localhost:3000/shoplist') }} className='more'> 更多</NavLink>
                    </div>
                    <div class="hotM_4">
                        <div class="hotM_4L">
                            <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/O8C.jpg") + ")" }}></div>
                            <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/12.png") + ")" }}></div>
                        </div>
                        <div class="hotM_4R">
                            <div class="hotM_4R_1">
                                <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT1.jpg") + ")" }}></div>
                            </div>
                            <div class="hotM_4R_1 br">
                                <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT0.jpg") + ")" }}></div>
                            </div>
                            <div class="hotM_4R_1">
                                <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT3.jpg") + ")" }}></div>
                            </div>
                            <div class="hotM_4R_1 br">
                                <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT4.jpg") + ")" }}></div>
                            </div>
                        </div>
                    </div>
                    <div class="hotM_5">
                        <div class="hotM_5L">
                            <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT5.jpg") + ")" }}></div>
                        </div>
                        <div class="hotM_5L">
                            <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT6.jpg") + ")" }} ></div>
                        </div>
                        <div class="hotM_5L">
                            <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT7.jpg") + ")" }}></div>
                        </div>
                        <div class="hotM_5L br">
                            <div class='hotCommen' style={{ backgroundImage: "url(" + require("../static/images/HOT8.jpg") + ")" }}></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="kbox"></div>
            </div>
        )

    }
}

export default (props) => <TypeNavHottitle  />