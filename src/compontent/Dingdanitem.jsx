import React, { Component } from 'react'

export default class Dingdanitem extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div class="myddcon1">
                    <div class="dpbox">
                        <div class="dpL">
                            <span>家居旗舰店</span>
                            <img src={require('../static/images/' + 'mre1.png')} />

                        </div>
                        <div class="dpR"><a href="shouhuoNo.html">待收货</a></div>
                    </div>
                    <div class="shopbox">
                        <div class="shopboxL">
                            <img src={require('../' + `${this.props.imgdata}`)} />
                        </div>
                        <div class="shopboxR">
                            <div class="shopboxR_1">
                                <div class="sbr1_1">{this.props.itemname}</div>
                                <div class="sbr1_2">
                                    <p class="p1">{this.props.perprice}</p>
                                    <p class="p2">{this.props.nowprice}</p>
                                </div>
                            </div>
                            <div class="shopboxR_2">
                                <p class="p3">颜色：白色；尺码：均码；</p>
                            </div>
                        </div>
                    </div>
                    <div class="dphjbox">
                        <p class="p5">合计:<span>{this.props.nowprice}</span></p>
                    </div>
                    <div class="dpbtn">
                        <div class="dpbtn1">
                            <img src={require('../static/images/' + 'dat.png')} />
                            <span>剩余9天05小时16分</span>
                        </div>
                        <div class="dpbtn2">
                            <a href="paySuccess.html">确认收货</a>
                        </div>
                        <div class="dpbtn3">
                            <a href="wuliu.html">查看物流</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
