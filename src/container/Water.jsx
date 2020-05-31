import React, { Component } from 'react'
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'

class Water extends Component {
    componentDidMount(){
        var s=function(){
            var interv=2000; //切换间隔时间
            var interv2=10; //切换速速
            var opac1=80; //文字背景的透明度
            var source="fade_focus" //焦点轮换图片容器的id名称
        //获取对象
            function getTag(tag,obj){
                if(obj==null){
                    return document.getElementsByTagName(tag)
                }else{
                    return obj.getElementsByTagName(tag)
                }
            }
            function getid(id){
                return document.getElementById(id)
            };
            var opac=0,j=0,t=63,num,scton=0,timer,timer2,timer3;
            var id=getid(source);
            if(!id)
            
            id.removeChild(getTag("div",id)[0]);
            var li=getTag("li",id);
            var div=document.createElement("div");
            var title=document.createElement("div");
            var span=document.createElement("span");
            var button=document.createElement("div");
            button.className="button";
            for(var i=0;i<li.length;i++){
                var a=document.createElement("a");
                a.innerHTML=i+1;
                a.onclick=function(){
                    clearTimeout(timer);
                    clearTimeout(timer2);
                    clearTimeout(timer3);
                    j=parseInt(this.innerHTML)-1;
                    scton=0;
                    t=63;
                    opac=0;
                    fadeon();
                };
                a.className="b1";
                a.onmouseover=function(){
                    this.className="b2"
                };
                a.onmouseout=function(){
                    this.className="b1";
                    sc(j)
                };
                button.appendChild(a);
            }
        //控制图层透明度
            function alpha(obj,n){
                if(document.all){
                    obj.style.filter="alpha(opacity="+n+")";
                }else{
                    obj.style.opacity=(n/100);
                }
            }
        //控制焦点按钮
            function sc(n){
                for(var i=0;i<li.length;i++){
                    button.childNodes[i].className="b1"
                };
                button.childNodes[n].className="b2";
            }
            title.className="num_list";
            title.appendChild(span);
            alpha(title,opac1);
            id.className="d1";
            div.className="d2";
            id.appendChild(div);
            id.appendChild(title);
            id.appendChild(button);
        //渐显
            var fadeon=function(){
                opac+=5;
                div.innerHTML=li[j].innerHTML;
                span.innerHTML=getTag("img",li[j])[0].alt;
                alpha(div,opac);
                if(scton==0){
                    sc(j);
                    num=-2;scrolltxt();
                    scton=1
                };
                if(opac<100){
                    timer=setTimeout(fadeon,interv2)
                }else{
                    timer2=setTimeout(fadeout,interv);
                };
            }
        //渐隐
            var fadeout=function(){
                opac-=5;
                div.innerHTML=li[j].innerHTML;
                alpha(div,opac);
                if(scton==0){
                    num=2;
                    scrolltxt();
                    scton=1};
                if(opac>0){
                    timer=setTimeout(fadeout,interv2)
                }else{
                    if(j<li.length-1){
                        j++
                    }else{
                        j=0
                    };
                    fadeon()
                };
            }
        //滚动文字
            var scrolltxt=function(){
                t+=num;
                span.style.marginTop=t+"px";
                if(num<0 && t>3){
                    timer3=setTimeout(scrolltxt,interv2)
                }else if(num>0 && t<62){
                    timer3=setTimeout(scrolltxt,interv2)
                }else{
                    scton=0
                }
            };
            fadeon();
            
            
            
            
           var divDate=document.getElementsByClassName('divDate');
           console.log("kaishi");
           for(i=0;i<divDate.length;i++){
               console.log(divDate[i].innerText)
               var myDate=new Date(divDate[i].innerText);
               var myyear=myDate.getFullYear(); 
               var mymonth=myDate.getMonth(); 
               var myday=myDate.getDate();
               divDate[i].innerHTML=mymonth+"-"+myday;
               divDate[i].style.color='#1c1c1c';
            }
        }
        s();
    }
    render() {
        return (
            <div>
                <div class="headerbox">
                    <div class="header">
                        <div class="headerL">
                            <a onclick="javascript:history.back(-1)" class="goback"><img src={require('../static/images/' + 'goback.png')} /></a>
                        </div>
                        <div class="headerC">
                            <p>缴费中心</p>
                        </div>
                        <div class="headerR"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="hbox"></div>
                <div id="fade_focus">
                        <div className="loading"></div>
                        <ul>
                            <li><img src={require('../static/images/' + 'water.png')} /></li>
                            <li><img src={require('../static/images/' + 'water.png')} /></li>
                        </ul>
                </div>

                <div class='water-box'>
                    <ul>
                        <li><div class='water'></div><p> 交水费</p></li>
                        <li><div class='dian'></div><p> 交电费</p></li>
                        <li><div class='qi'></div><p> 交燃气费</p></li>
                    </ul>
                </div>
                
                <div class="footbox">
                    <div class="footer">
                        <ul>
                            <li  >
                                <NavLink exact to={{ pathname: '/' }} onClick={() => { window.location.replace('http://localhost:3000/') }}>
                                    <img src={require('../static/images/' + 'f01.png')} />
                                    <p>首页</p>
                                </NavLink>
                            </li>
                            <li >
                                <NavLink exact to={{ pathname: '/message' }} onClick={() => { window.location.replace('http://localhost:3000/message') }}>
                                    <img src={require('../static/images/' + 'f02.png')} />
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

export default (props) => <Water  />