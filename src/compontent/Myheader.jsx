import React, { Component } from 'react'

export class Myheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': 'seeallgood',
            'saveitem': "0"
        };

    }
    render() {
        return (
            <div>
                <div class="m0myheader">
                    <div class="conbox">
                        <div class="conboxL">
                            <img src={require('../static/images/' + 'tx.png')} class="tt" />
                            <div class="btR">
                                <p class="p1">{this.state.username}</p>
                                <div class="v1">
                                    <img src={require('../static/images/' + 'mmm.png')} />
                                    <p>我的亲情账号 ></p>
                                </div>
                            </div>
                        </div>
                        <div class="conboxR">
                            <a href="shezhi.html">设置</a>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="conbox2">
                        <ul>
                            <li>
                                <a href="javascript:void()">
                                    <p class="p1">{this.state.saveitem}</p>
                                    <p class="p2">收藏夹</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void()">
                                    <p class="p1">0</p>
                                    <p class="p2">关注商品</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void()">
                                    <p class="p1">0</p>
                                    <p class="p2">浏览记录</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        )
    }
}

export default Myheader
