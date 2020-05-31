import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import '../static/css/style.css'
import {housresources} from '../data/city' 
// import '../static/js/banner'
class Fangwuzuling extends Component {
    render() {
        const housresourcesinfo=housresources.data;
        const housresourcesitem=housresourcesinfo.map((item,index)=>{
          return  <li>
              <NavLink exact to={{ pathname: `/fw/`+`${item.id}` }} onClick={() => { window.location.replace('http://localhost:3000/fw/'+`${item.id}`) }}>
                    <img src={item.imgurl} class="proimg" />
                    <p class="tit">{item.address}</p>
                    {item.otherinfo.map((infoitem, index)=>{return <span className={'cls-' + index}>  {infoitem + ' '} </span> })}
                </NavLink>
            </li>
        })

        return (
            <div>
                <div class="fangwu">
                    <div class="likeTit">
                        <span>热门房源</span>
                    </div>
                    <ul>
                        {  housresourcesitem}
                    </ul>
                </div>
                <div class="clear"></div>
                <div class="kbox bottomkbox" ></div>
            </div>
        )

    }
}

export default (props) => <Fangwuzuling  />