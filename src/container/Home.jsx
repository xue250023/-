import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import '../static/css/style.css'
// import '../static/js/banner'
import Footer from '../compontent/HomeFooter'
import Serchtop from '../compontent/Serchtop'
import TypeNavHottitle from '../compontent/TypeNavHottitle'
import Likebox from '../compontent/Likebox'
import Fangwuzuling from '../compontent/Fangwuzuling'
class Home extends Component {
    render() {
        return (
            <div>
                <Serchtop/>
                <TypeNavHottitle/>
                <Fangwuzuling/>
                <Likebox/>
                <Footer/>
            </div>
        )
    }
}
export default (props) => <Home {...props} key={props.location.pathname} />