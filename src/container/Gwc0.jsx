import React, { Component } from 'react'
import Likebox from '../compontent/Likebox'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'

export default class Gwc0 extends Component {
    render() {
        return (
            <div>
                <div class="headerbox">
                    <div class="header">
                        <div class="headerL">
                            <a onclick="javascript:history.back(-1)" class="goback"><img  src={require('../static/images/' + 'goback.png')} /></a>
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
                <div class="paysuccess">
                    <div class="pay30">
                        <img  src={require('../static/images/' + 'gwc.jpg')}/>
                        <p>购物车还是空的</p>
                    </div>
                    <div class="pay40">
                        <NavLink to={{ pathname: '/'}} onClick={() => { window.location.replace('http://localhost:3000/') }} >去逛逛</NavLink>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="kbox"></div>
                <Likebox/>
                </div>
        )
    }
}
