import React, { Component } from 'react'

export default class Xq1 extends Component {
    render() {
        return (
            <div>
                <div id="con_two_2">
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">销售渠道类型</p>
                            <p class="pr">纯电商</p>
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
                            <p class="pl">品牌</p>
                            <p class="pr">家居店</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">颜色分类</p>
                            <p class="pr">白色</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">尺码</p>
                            <p class="pr">均码</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">上市年份</p>
                            <p class="pr">2015年冬季</p>
                        </div>
                    </div>
                    <div class="canshu">
                        <div class="canshu_1">
                            <p class="pl">材质</p>
                            <p class="pr">木材</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
