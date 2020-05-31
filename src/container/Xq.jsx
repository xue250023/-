import React, { Component } from 'react'
import $ from 'jquery'
import axios from 'axios'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import Xq1 from '../compontent/Xq1'
import Xq2 from '../compontent/Xq2'
import Xq0 from '../compontent/Xq0'
import Qs from 'qs'
export class Xq extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'flag':'加入购物车',
            'currentid': '0',
            'iteminfo': [{ 'imgdata': "static/images/O1C.png", 'perprice': '￥200.0', 'nowpric': '￥150.0', 'itemname': '储物柜 ', 'itemid': 'i1001' },
            { 'imgdata':"static/images/O2C.jpg", 'perprice': '￥60.0', 'nowpric': '￥45.0', 'itemname': '北欧简洁台灯 ', 'itemid': 'i1002' },
            { 'imgdata': "static/images/O3C.jpg", 'perprice': '￥40.0', 'nowpric': '￥30.0', 'itemname': ' 抱枕 ', 'itemid': 'i1003' },
            { 'imgdata': "static/images/O4C.jpg", 'perprice': '￥70.0', 'nowpric': '￥50.0', 'itemname': '镜子', 'itemid': 'i1004' },
            { 'imgdata': "static/images/O5C.jpg", 'perprice': '￥155.0', 'nowpric': '￥135.0', 'itemname': '落地灯 ', 'itemid': 'i1005' },
            { 'imgdata': "static/images/O6C.jpg", 'perprice': '￥100.0', 'nowpric': '￥50.0', 'itemname': '置物架 ', 'itemid': 'i1006' },
            { 'imgdata': "static/images/O7C.jpg", 'perprice': '￥25.0', 'nowpric': '￥20.0', 'itemname': '毛巾', 'itemid': 'i1007' },
            { 'imgdata': "static/images/O8C.jpg", 'perprice': '￥23.0', 'nowpric': '￥15.0', 'itemname': '绿植', 'itemid': 'i1008' }],
            'evaluate': [{ 'userid': 'id0', 'usertx': require("../static/images/tx.png"), 'userecomment': '收到了,物美价廉。摆在家里特别适合~', 'ordernumber': 'order0' },
            { 'userid': 'id1', 'usertx': require("../static/images/tx.png"), 'userecomment': '收到了,物美价廉。摆在家里特别适合~', 'ordernumber': 'order1' },
            { 'userid': 'id2', 'usertx': require("../static/images/tx.png"), 'userecomment': '收到了,物美价廉。摆在家里特别适合~', 'ordernumber': 'order2' },
            { 'userid': 'id3', 'usertx': require("../static/images/tx.png"), 'userecomment': '收到了,物美价廉。摆在家里特别适合~', 'ordernumber': 'order3' }
            ]
        }
        this.collction = this.collction.bind(this);
        this.updata = this.updata.bind(this);
        this.setTab = this.setTab.bind(this)
        this.addcar = this.addcar.bind(this)
    }
    addcar() {
        //加入购物车
        var _this=this;
       var data={
           'cmd':'addcar',
           'id':this.state.currentitemid,
           'index':this.state.currentid,
           'info':this.state.iteminfo[this.state.currentid]
       }
        axios({
            method: 'post',
            url: 'http://localhost:1188/xq',
            data: Qs.stringify(data)
          }).then(function(res){
            // console.log(res.data.carinfo)
            //_this.setState(res.data)
            })
          .catch(function(res){console.log(res);})
          this.setState({flag:'已加入'})




    }
    collction() {
        //收藏
        alert('shoucang')
    }
    componentDidMount() {
        $('.hdbox_2 ul li').click(function () {
            $('.hdbox_2 ul li').removeClass('on');
            $(this).addClass('on');
        })
        this.updata()
    }
    setTab(name, cursel, n) {
        for (var i = 1; i <= n; i++) {
            var menu = document.getElementById(name + i);
            var con = document.getElementById("con_" + name + "_" + i);
            menu.className = i == cursel ? "hover" : "";
            con.style.display = i == cursel ? "block" : "none";
        }
    }
    updata() {
        const id2index = window.location.pathname.split('/')[2]
        this.setState({
            'currentitemid':id2index,
            'currentid': id2index[id2index.length - 1] - 1
        })
    }
    render() {
        const recommditem = this.state.iteminfo.map((item, index) => {
            return index < 4 ? <li onClick={this.updata.bind(this)}><NavLink to={{ pathname: '/xq/' + `${item.itemid}` }}>
                <img src={require(`../${item.imgdata}`)} />
                <div class="tit"><span>{item.nowpric}</span></div>
            </NavLink></li> : ''

        })
        return (
            <div>
                <div class="hdbox">
                    <div class="hdbox0">
                        <div class="hdbox_1"><a onclick="javascript:history.back(-1)" class="goback"><img src={require("../static/images/goback.png")} /></a></div>
                        <div class="hdbox_2">
                            <ul>
                                <li class="on"><a href="#m1">商品</a></li>
                                <li><a href="#m2">详情</a></li>
                                <li><a href="#m3">评价</a></li>
                            </ul>
                        </div>
                        <div class="hdbox_3">
                            <a onclick="javascript:history.back(-1)"><img src={require("../static/images/goback.png")} /></a>
                            <a onclick="javascript:history.back(-1)"><img src={require("../static/images/goback.png")} /></a>
                        </div>
                    </div>
                </div>
                <div class="hbox"></div>
                <a name="m1">
                    <div class="xqbox1">
                        <img src={  require(`../${this.state.iteminfo[this.state.currentid].imgdata}`)} width="100%" />
                        <p class="tit">{this.state.iteminfo[this.state.currentid].itemname}</p>
                        <div class="qita">
                            <p class="p1">{this.state.iteminfo[this.state.currentid].nowpric}<span>新品促销</span></p>
                            <p class="p2">全国包邮   |   销量48</p>
                        </div>
                    </div>
                </a>

                <div class="clear"></div>
                <div class="kbox"></div>
                <a name="m3">
                    <div class="xqpj">
                        <div class="xqpjtit">
                            <div class="xqbox2L">
                                <span>商品评价(99)</span>
                            </div>
                            <div class="xqbox2R">
                                <img src={require("../static/images/more.png")} />
                            </div>
                        </div>
                        <div class="xqpjbox">
                            <div class="pj1">
                                <img src={require("../static/images/tx.png")} />
                                <span>喵星人</span>
                            </div>
                            <div class="pj2">{this.state.evaluate[0].userecomment}</div>
                            <div class="pj3">2015-12-28  颜色：白色  </div>
                        </div>
                        <div class="morepj">
                            <a href="pingjialist.html">查看更多评价</a>
                        </div>
                    </div>
                </a>
                <div class="clear"></div>
                <div class="kbox"></div>
                <div class="xqdp">
                    <div class="xqdp_1">
                        <div class="xqdp1_1">
                            <div class="dpimg"><img src={require("../static/images/dp1.png")} /></div>
                            <div class="dptxt">
                                <p class="p1">家居馆</p>
                                <p class="p2">总销量：1368  收藏数：987</p>
                            </div>
                        </div>
                        <div class="xqdp1_2">
                            <div class="scbox" onClick={this.collction}>
                                <img src={require("../static/images/xq4.png")} />
                                <span>收藏店铺</span>
                            </div>
                        </div>
                    </div>
                    <div class="dpdengji">
                        <ul>
                            <li>
                                <div class="v1">描述相符<span>4.7</span></div>
                                <div class="v2">高</div>
                            </li>
                            <li>
                                <div class="v1">质量满意<span>4.7</span></div>
                                <div class="v2">高</div>
                            </li>
                            <li>
                                <div class="v1">价格合理<span>4.7</span></div>
                                <div class="v2">高</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="kbox"></div>
                <div class="xgtj">
                    <div class="tjtit" >相关推荐</div>
                    <div class="tjcon">
                        <ul>
                            {recommditem}
                        </ul>
                    </div>
                </div>
                <div class="clear"></div>
                <a name="m2"><div class="kbox"></div></a>

                <div class="xqtab">
                    <div class="Menubox">
                        <ul>
                            <li><NavLink exact to={{ pathname: '/xq/' + `${this.state.iteminfo[this.state.currentid].itemid}` }}>图文详情</NavLink></li>
                            <li><NavLink to={{ pathname: '/xq/' + `${this.state.iteminfo[this.state.currentid].itemid}/canshu` }}>产品参数</NavLink></li>
                            <li><NavLink to={{ pathname: '/xq/' + `${this.state.iteminfo[this.state.currentid].itemid}/remai` }}>热卖推荐</NavLink></li>
                        </ul>
                    </div>
                    <div class="Contentbox">
                        <Route exact path={'/xq/' + `${this.state.iteminfo[this.state.currentid].itemid}`} component={Xq0} />
                        <Route path={'/xq/' + `${this.state.iteminfo[this.state.currentid].itemid}/canshu`}  component={() => <Xq1 huohao={this.state.iteminfo[this.state.currentid].itemid} />}  />
                        <Route path={'/xq/' + `${this.state.iteminfo[this.state.currentid].itemid}/remai`} component={Xq2} />
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
                                        <p>店铺</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void()">
                                        <img src={require("../static/images/xqf3.png")}  onClick={this.collction.bind(this)}/>
                                        <p>收藏</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="xqbotboxR">
                            <a class="a2 sizetype">立即购买</a>
        <a class="a1 sizetype" onClick={this.addcar.bind(this)}>{this.state.flag}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Xq
