import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import '../static/css/style.css'
// import '../static/js/banner'
class Likebox extends Component {
    render() {
        const likeinfo = [
            { 'imgdata': require("../static/images/O1C.png"), 'perprice': '￥200.0', 'nowpric': '￥150.0', 'itemname': '储物柜 ', 'itemid': 'i1001' },
                { 'imgdata': require("../static/images/O2C.jpg"), 'perprice': '￥60.0', 'nowpric': '￥45.0', 'itemname': '北欧简洁台灯 ', 'itemid': 'i1002' },
                { 'imgdata': require("../static/images/O3C.jpg"), 'perprice': '￥40.0', 'nowpric': '￥30.0', 'itemname': ' 抱枕 ', 'itemid': 'i1003' },
                { 'imgdata': require("../static/images/O4C.jpg"), 'perprice': '￥70.0', 'nowpric': '￥50.0', 'itemname': '镜子', 'itemid': 'i1004' },
                { 'imgdata': require("../static/images/O5C.jpg"), 'perprice': '￥155.0', 'nowpric': '￥135.0', 'itemname': '落地灯 ', 'itemid': 'i1005' },
                { 'imgdata': require("../static/images/O6C.jpg"), 'perprice': '￥100.0', 'nowpric': '￥50.0', 'itemname': '置物架 ', 'itemid': 'i1006' },
                { 'imgdata': require("../static/images/O7C.jpg"), 'perprice': '￥25.0', 'nowpric': '￥20.0', 'itemname': '毛巾', 'itemid': 'i1007' },
                { 'imgdata': require("../static/images/O8C.jpg"), 'perprice': '￥23.0', 'nowpric': '￥15.0', 'itemname': '绿植', 'itemid': 'i1008' }]
        const likeitem = likeinfo.map((item, index) => {
            return <li>
                <NavLink exact to={{ pathname: `/xq/${item.itemid}` }} onClick={() => { window.location.replace('http://localhost:3000' + `/xq/${item.itemid}`) }}>
                    <p>{item.name}</p>
                    <img src={`${item.imgdata}`} class="proimg" />
                    <p class="tit">{item.itemname}</p>
                    <p class="price">{item.nowpric}<span>{item.perprice}</span><img src={require("../static/images/f3.png")} /></p>
                </NavLink>
            </li>
        })
        return (
            <div>
                <div class="likebox">
                    <div class="likeTit">
                        <img src={require('../static/images/' + 'heart.png')} /><span>猜你喜欢</span>
                    </div>
                    <ul>
                        {likeitem}
                    </ul>
                </div>
                <div class="clear"></div>
                <div class="kbox bottomkbox" ></div>
            </div>
        )

    }
}

export default (props) => <Likebox  />