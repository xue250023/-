import React, { Component } from 'react';
import axios from 'axios'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import $ from 'jquery'
import '../static/css/style.css'
import Gwc0 from './Gwc0'
// import '../static/js/banner'
import Qs from 'qs'
class Gwc1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'totprice': `0`,
            'countnum': '',
            'i1001': { 'num': 0, 'checked': true, 'nowpric': '150', 'perprice': '200' },
            'i1002': { 'num': 0, 'checked': true, 'nowpric': '45', 'perprice': '60' },
            'i1003': { 'num': 0, 'checked': true, 'nowpric': '30', 'perprice': '40' },
            'i1004': { 'num': 0, 'checked': true, 'nowpric': '50', 'perprice': '70' },
            'i1005': { 'num': 0, 'checked': true, 'nowpric': '135', 'perprice': '155' },
            'i1006': { 'num': 0, 'checked': true, 'nowpric': '50', 'perprice': '100' },
            'i1007': { 'num': 0, 'checked': true, 'nowpric': '20', 'perprice': '25' },
            'i1008': { 'num': 0, 'checked': true, 'nowpric': '15', 'perprice': '23' },
            'carinfo': [
                { 'imgdata': "static/images/O1C.png", 'perprice': '￥200.0', 'nowpric': '￥150.0', 'itemname': '储物柜 ', 'itemid': 'i1001' }]
        };
        this.delitem = this.delitem.bind(this);
        this.additem = this.additem.bind(this);
        this.reduceitem = this.reduceitem.bind(this);
        this.check = this.check.bind(this);
        this.updata = this.updata.bind(this);
        this.jiesuan=this.jiesuan.bind(this)
    }

    componentDidMount() {
        const _this = this;
        $('.gwccheck').click(function () {
            if ($(this).attr("class") == "gwccheck on") {
                $(this).removeClass('on');
            } else {
                $(this).addClass('on');
            }
        })

        var data1 = {
            cmd: 'getinfo'
        }
        axios({
            method: 'post',
            url: 'http://localhost:1188/',
            data: Qs.stringify(data1)
        }).then(function (res) {
            // console.log(res.data.carinfo)
            _this.setState(res.data);
        }).then(function (res) {
            _this.updata();
        })

    }
    updata() {
        var totnowprice = this.state.i1001.nowpric * this.state.i1001.num + this.state.i1002.nowpric * this.state.i1002.num +
            this.state.i1003.nowpric * this.state.i1003.num + this.state.i1004.nowpric * this.state.i1004.num +
            this.state.i1005.nowpric * this.state.i1005.num + this.state.i1006.nowpric * this.state.i1006.num +
            this.state.i1007.nowpric * this.state.i1007.num + this.state.i1008.nowpric * this.state.i1008.num
        this.setState({
            totprice: totnowprice
        })
    }
    jiesuan(){
        var data1 = {
            info:this.state.carinfo,
            cmd: 'jiesuan'
        }
        axios({
            method: 'post',
            url: 'http://localhost:1188/jiesuan',
            data: Qs.stringify(data1)
        })

    }
    delitem(id, index) {
        //删除这个数组的某一项
        // arr.splice(index,0)
        this.state[id].num = 0
        this.state.carinfo.splice(index, 1)
        //return 出来的是被弹出来的那个
        var changecarinfo = this.state.carinfo
        this.setState({
            [id]: this.state[id],
            carinfo: changecarinfo
        })
        //忘了上传给后台了 
        this.updata();

    }
    additem(id) {
        //增加某项
        this.state[id].num++
        //setstate左边如何把id取到？字符串
        this.setState({
            [id]: this.state[id]
        })
        this.updata();
    }
    reduceitem(id) {
        this.state[id].num--
        if (this.state[id].num == -1) {
            this.state[id].num = 0;
        }
        this.setState({
            [id]: this.state[id]
        })
        this.updata();
    }
    check(id) {
        //
        this.state[id].checked = !this.state[id].checked
        if (this.state[id].checked == false) { this.state[id].num = 0; }
        this.setState({
            [id]: this.state[id]
        })
        this.updata();
    }
    render() {
        //axios yemianshuaxin 就获取数据
        const caritem = this.state.carinfo.map((item, index) => {
            return <div class="gwcone" key={index}>
                <div class="go1">
                    <div class="gwccheck on" onClick={this.check.bind(this, item.itemid)}></div>
                </div>
                <div class="go2"><NavLink to={{ pathname: '/xq/' + `${item.itemid}` }}><img src={require(`../${item.imgdata}`)} /></NavLink></div>
                <div class="go3">
                    <div class="go3_1">
                        <NavLink to={{ pathname: '/xq' + `${item.itemid}` }}><p class="p1">{item.itemname}</p></NavLink>
                        <p class="p2">{item.perprice}</p>
                    </div>
                    <div class="go3_2">
                        <p class="p3">颜色：白色；</p>
                        <p class="p4">{item.nowpric}</p>
                    </div>
                    <div class="go3_3">
                        <div class="num1" onClick={this.reduceitem.bind(this, item.itemid)}>-</div>
                        <div class="num2">{this.state[`${item.itemid}`].num}</div>
                        <div class="num3" onClick={this.additem.bind(this, item.itemid)}>+</div>
                        <div class="del" onClick={this.delitem.bind(this, item.itemid, index)}><img src={require('../static/images/' + 'del.png')} /></div>
                    </div>
                </div>
            </div>
        })

        return (
            <div>
                <div>
                    <div class="headerbox">
                        <div class="header">
                            <div class="headerL">
                                <a class="goback"><img src={require("../static/images/goback.png")} /></a>
                            </div>
                            <div class="headerC">
                                <p>购物车</p>
                            </div>
                            <div class="headerR"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="hbox"></div>
                    <div class="kbox"></div>
                    <div class="gwcbox">
                        <div class="gwcbox_1">
                            <div class="gwc1_1">
                                <div class="g1">
                                    <div class="gwccheck on"></div>
                                </div>
                                <div class="g2">
                                    <NavLink exact to={{ pathname: '/xq' }} onClick={() => { window.location.replace('http://localhost:3000/xq') }}>
                                        <span>家居旗舰店</span>
                                        <img src={require('../static/images/' + 'mre1.png')} />
                                    </NavLink>
                                </div>
                                <div class="g3">
                                    <img src={require('../static/images/' + 'quanicon.png')} />
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="gwc1_2">
                                {caritem}
                            </div>
                        </div>
                    </div>
                    <div class="fbox1"></div>
                    <div class="hejiBox">
                        <div class="heji">
                            <div class="heji_3"><p>合计：<span>￥{this.state.totprice}</span></p></div>
                            <div class="heji_5" onClick={this.jiesuan.bind(this)}>
                                <NavLink to={{ pathname: '/jiesuan' }} onClick={() => { window.location.replace('http://localhost:3000/jiesuan') }}>去结算</NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="footbox">
                        <div class="footer">
                            <ul>
                                <li>
                                    <NavLink to={{ pathname: '/' }}>
                                        <img src={require('../static/images/' + 'f01.png')} />
                                        <p>首页</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={{ pathname: '/message' }}>
                                        <img src={require('../static/images/' + 'f02.png')} />
                                        <p>发现</p>
                                    </NavLink>
                                </li>
                                <li class="on">
                                    <NavLink to={{ pathname: '/gwc' }}>
                                        <img src={require('../static/images/' + 'f3.png')} />
                                        <p>购物车</p>
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to={{ pathname: '/my' }}>
                                        <img src={require('../static/images/' + 'f04.png')} />
                                        <p>我的</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        )

    }
}

export default (props) => <Gwc1 />