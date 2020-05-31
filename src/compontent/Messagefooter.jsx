import React, { Component } from 'react'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'

export class Messagefoter extends Component {
    render() {
        return (
            <div>
                <div class="footbox">
                    <div class="footer">
                        <ul>
                            <li  >
                                <NavLink exact to={{ pathname: '/' }} onClick={() => { window.location.replace('http://localhost:3000/') }}>
                                    <img src={require('../static/images/' + 'f01.png')} />
                                    <p>首页</p>
                                </NavLink>
                            </li>
                            <li class="on">
                                <NavLink exact to={{ pathname: '/message' }} onClick={() => { window.location.replace('http://localhost:3000/message') }}>
                                    <img src={require('../static/images/' + 'f2.png')} />
                                    <p>发现</p>
                                </NavLink>
                            </li>
                            <li >
                                <NavLink exact to={{ pathname: '/gwc' }} onClick={() => { window.location.replace('http://localhost:3000/gwc') }}>
                                    <img src={require('../static/images/' + 'f03.png')} />
                                    <p>购物车</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to={{ pathname: '/my' }} onClick={() => { window.location.replace('http://localhost:3000/my') }}>
                                    <img src={require('../static/images/' + 'f04.png')} />
                                    <p>我的</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Messagefoter
