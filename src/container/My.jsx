import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import '../static/css/style.css'
import Likebox from '../compontent/Likebox'
import Myheader from'../compontent/Myheader'
import Mypart from'../compontent/Mypart'
import Myfooter from '../compontent/Myfooter'
class My extends Component {
    render() {
        return (
            <div>
                <Myheader/>
                <Mypart/>
               <Likebox/>
               <Myfooter/>
            </div>
        )

    }
}

export default (props) => <My />
