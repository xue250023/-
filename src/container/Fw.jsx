import React, { Component } from 'react'
import Xq1 from '../compontent/Xq1'
import Xq2 from '../compontent/Xq2'
import Xq0 from '../compontent/Xq0'
import $ from 'jquery'
import Qs from 'qs'
import Xq3 from '../compontent/Xq3'
import Fangwuzuling from '../compontent/Fangwuzuling'
import axios from 'axios'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
export default class Fw extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'flag': '立即租住',
            'currentid': '0',
            'data': [{
                'address': '碑林-南稍门南关正街',
                'value': '1000',
                'scale': '三室一厅',
                'area': '21平米',
                'imgurl': 'https://3vj-render.3vjia.com//UpFile_Render/C00000022/PMC/DesignSchemeRenderFile/201910/1001073817/6500ed31a0d345e0a14c9eeefc24330b.jpg?x-oss-process=image/resize,m_fill,h_730,w_1220',
                'otherinfo': ['合租', '朝南', '电梯', '二号线'],
                'id': 'f10000'

            }, {
                'address': '未央-方新村 萧家巷,近萧家南巷',
                'value': '950',
                'scale': '三室一厅',
                'area': '19平米',
                'imgurl': 'https://3vj-render.3vjia.com//UpFile_Render/C00000098/DesignSchemeRenderFile/39480692/324939896/324939896.jpg?x-oss-process=image/resize,m_fill,h_730,w_1220',
                'otherinfo': ['合租', '朝南', '二号线'],
                'id': 'f10001'
            }, {
                'address': '碑林-南稍门 长安北路',
                'value': '850',
                'scale': '三室一厅',
                'area': '20平米',
                'imgurl': 'https://3vj-render.3vjia.com//UpFile_Render/C00002063/DesignSchemeRenderFile/202001/8/39260370/8aa1b3794c684131891b0577bea47f83.jpg?x-oss-process=image/resize,m_fill,h_730,w_1220',
                'otherinfo': ['合租', '朝南', '电梯', '二号线'],
                'id': 'f10002'
            }, {
                'address': '碑林-南稍门 长安北路',
                'value': '850',
                'scale': '三室一厅',
                'area': '20平米',
                'imgurl': 'https://3vj-render.3vjia.com//UpFile_Render/C00000098/DesignSchemeRenderFile/39480692/324939896/324939896.jpg?x-oss-process=image/resize,m_fill,h_730,w_1220',
                'otherinfo': ['合租', '朝北', '电梯', '二号线'],
                'id': 'f10003'
            }]

        }
        this.updata = this.updata.bind(this);
        this.zuzhu = this.zuzhu.bind(this)
    }
    zuzhu() {
        //加入购物车
        var _this = this;
        var data = {
            'cmd': 'zuzhu',
            'id': this.state.currentitemid,
            'index': this.state.currentid,
            'info': this.state.data[this.state.currentid]
        }
        axios({
            method: 'post',
            url: 'http://localhost:1188/fw',
            data: Qs.stringify(data)
        }).then(function (res) {
            // console.log(res.data.carinfo)
            //_this.setState(res.data)
        })
            .catch(function (res) { console.log(res); })

        this.setState({ flag: '租住成功' })




    }

    componentDidMount() {
        this.updata()
    }

    updata() {
        const id2index = window.location.pathname.split('/')[2]
        this.setState({
            'currentitemid': id2index,
            'currentid': id2index[id2index.length - 1]
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div class="headerbox">
                        <div class="header">
                            <div class="headerL">
                                <a onclick="javascript:history.back(-1)" class="goback"><img src={require('../static/images/' + 'goback.png')} /></a>
                            </div>
                            <div class="headerC">
                                <p>房屋租赁</p>
                            </div>
                            <div class="headerR"></div>
                        </div>
                    </div>
                    <div class="hbox"></div>
                    <div class='Fwxq'>
                        <img src={this.state.data[this.state.currentid].imgurl} class="proimg" />
                        <p class="tit">{this.state.data[this.state.currentid].address}</p>
                        {this.state.data[this.state.currentid].otherinfo.map((infoitem, index) => { return <span className={'cls-' + index}>  {infoitem + ' '} </span> })}

                    </div>
                    <div class="clear"></div>
                    <div class="kbox"></div>
                    <div class="xqdp">
                        <div class="xqdp_1">
                            <div class="xqdp1_1">
                                <div class="dpimg"> <img src={require("../static/images/tx.png")} /></div>
                                <div class="dptxt">
                                    <p class="p1">房产经纪人</p>
                                    <p class="p2">推荐量：1368  收藏数：987</p>
                                </div>
                            </div>
                            <div class="xqdp1_2">
                                <div class="scbox" onClick={this.collction}>
                                    <img src={require("../static/images/xq4.png")} />
                                    <span>收藏店铺</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="clear"></div>
                    <div class="kbox"></div>
                    <div class="clear"></div>
                    <a name="m2"><div class="kbox"></div></a>
                    <div class="xqtab">
                        <div class="Menubox">
                            <ul>
                                <li><NavLink exact to={{ pathname: '/fw/' + `${this.state.data[this.state.currentid].id}` }}>图文详情</NavLink></li>
                                <li><NavLink to={{ pathname: '/fw/' + `${this.state.data[this.state.currentid].id}/canshu` }}>房屋信息</NavLink></li>
                                <li><NavLink to={{ pathname: '/fw/' + `${this.state.data[this.state.currentid].id}/remai` }}>热门推荐</NavLink></li>
                            </ul>
                        </div>
                        <div class="Contentbox">
                            <Route exact path={'/fw/' + `${this.state.data[this.state.currentid].id}`} component={Xq0} />
                            <Route path={'/fw/' + `${this.state.data[this.state.currentid].id}/canshu`} component={() => <Xq3 jiage={this.state.data[this.state.currentid].value} dizhi={this.state.data[this.state.currentid].address} guige={this.state.data[this.state.currentid].scale} pingmi={this.state.data[this.state.currentid].area} huohao={this.state.data[this.state.currentid].id} />} />
                            <Route path={'/fw/' + `${this.state.data[this.state.currentid].id}/remai`} component={Fangwuzuling} />
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="xqbotbox">
                        <div class="xqbotbox0">
                            <div class="xqbotboxL">
                                <ul>
                                    <li>
                                        <a href="javascript:void()">
                                            <img src={require("../static/images/xqf1.png")} />
                                            <p>客服</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="dpxq.html">
                                            <img src={require("../static/images/xqf2.png")} />
                                            <p>更多</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void()">
                                            <img src={require("../static/images/xqf3.png")} />
                                            <p>收藏</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="xqbotboxR">
                                <a class="a2 sizetype">立即联系</a>
                                <a class="a1 sizetype" onClick={this.zuzhu.bind(this)}>{this.state.flag}</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

