import React, { Component } from 'react'
import axios from 'axios'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import $ from 'jquery'
import '../static/css/style.css'
import Gwc0 from './Gwc0'
// import '../static/js/banner'
import Qs from 'qs'
import Gwc1 from './Gwc1'
export default class Gwc extends Component {
    constructor(props) {
   
        super(props)
    
        this.state = {
             carinfo:[]
        }
        this.updata=this.updata.bind(this)
    }
    componentDidMount(){
        debugger;
        const _this=this;
     var data1 = {
            firstName: 'Fred',
            lastName: 'Flintstone',
            cmd: 'getinfo'
        }
        axios({
            method: 'post',
            url: 'http://localhost:1188/',
            data: Qs.stringify(data1)
        }).then(function (res) {
            _this.setState(res.data);
        }).then(function (res) {
            _this.updata();
        })
    }
    updata(){
        this.setState({'a':'a'})
    }
    render() {
        const page=this.state.carinfo.length?<Gwc1/>:<Gwc0/>
        return (
            <div>
                {page}
            </div>
        )
    }
}
