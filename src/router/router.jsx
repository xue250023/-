import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from '../container/Home'
import Service from '../container/Service'
import Xq from '../container/Xq'
import My from '../container/My'
import Message from '../container/Message'
import Gwc from '../container/Gwc.jsx';
import Fw from '../container/Fw.jsx'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Water from '../container/Water.jsx'
import Dingdan from '../container/Dingdan.jsx'
import Jiesuan from '../container/Jiesuan'
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default class PageRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Home} />
                    {/* <Route path='/shop' component={() => <Shop isAuthed={true} />} /> */}
                    <Route path="/gwc" component={Gwc} />
                    <Route path="/service" component={Service} />
                    <Route path="/my" component={My} />
                    <Route path="/message" component={Message} />
                    <Route path="/xq" component={Xq}/>
                    <Route path="/water" component={Water}/>
                    <Route path='/jiesuan' component={Jiesuan}/>
                    <Route path='/dingdan' component={Dingdan}/>
                    <Route path='/fw' component={Fw}/>
                </Router>
            </div>
        )
    }
}
