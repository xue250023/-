import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import '../static/css/style.css'
import Messagefooter from '../compontent/Messagefooter'
import HomeFooter from '../compontent/HomeFooter'
class Message extends Component {
    render() {


        const Messageinfo = [
            { 'imgdata': require('../static/images/' + 'message1.png'), 'messagename': '商城活动', 'messagetime': '昨天', 'messaecontact': '年货节超级优惠，全场年货买二送一...' },
            { 'imgdata': require('../static/images/' + 'message2.png'), 'messagename': '物流', 'messagetime': '12:36', 'messaecontact': '您购买的商品已发货...' },
            { 'imgdata': require('../static/images/' + 'message3.png'), 'messagename': '优惠券', 'messagetime': '昨天', 'messaecontact': '您有一张优惠券即将过期...' },
            { 'imgdata': require('../static/images/' + 'message4.png'), 'messagename': '系统通知', 'messagetime': '昨天', 'messaecontact': '感谢选择本商城...' }]
        const Messageitem = Messageinfo.map((item, index) => {
            return <div class="message_1">
                <div class="meL">
                    <img src={item.imgdata} />
                </div>
                <div class="meR">
                    <div class="meR_1">
                        <p>{item.messagename}</p>
                        <span>{item.messagetime}</span>
                    </div>
                    <div class="meR_2">{item.messaecontact}</div>
                </div>
            </div>
        })
        return (
            <div>
                <div class="headerbox">
                    <div class="header">
                        <div class="headerL">
                            <a onclick="javascript:history.back(-1)" class="goback"><img src={require('../static/images/' + 'goback.png')} /></a>
                        </div>
                        <div class="headerC">
                            <p>消息中心</p>
                        </div>
                        <div class="headerR"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="hbox"></div>
                <div class="massegeBox">
                   {Messageitem}
                </div>
                <Messagefooter/>
            </div>
        )

    }
}

export default Message
