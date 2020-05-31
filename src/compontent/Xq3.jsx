import React, { Component } from 'react'

export default class Xq3 extends Component {
    render() {
        return (
            <div>
                <div id="con_two_2">
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">价格</p>
                             <p class="pr">{this.props.jiage}</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">货号</p>
                            <p class="pr">{this.props.huohao}</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">地址</p>
                            <p class="pr">{this.props.dizhi}</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">规格</p>
                            <p class="pr">{this.props.guige}</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">平米</p>
                            <p class="pr">{this.props.pingmi}</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">上市年份</p>
                            <p class="pr">2015年冬季</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
