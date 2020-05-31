import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route, hashHistory, Switch, NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'antd';
import { Row, Col } from 'antd';
export default class HomeRoute extends PureComponent {
    render() {
        return (
            <Router>
                <div className="nav-footer">
                    <Row>
                        <Col span={4}>
                            <NavLink exact to={{ pathname: '/' }} className="menu-link" onClick={() => { window.location.replace('http://localhost:3000/') }}>
                                <Icon type="home" />
                                首页
                            </NavLink>
                        </Col>
                        <Col span={6}>
                            <NavLink to={{ pathname: '/shop' }} className="menu-link" onClick={() => { window.location.replace('http://localhost:3000/shop') }} >
                                <Icon type="shop" />
                                商城
                            </NavLink>
                        </Col>
                        <Col span={6}>
                            <NavLink to="/service" className="menu-link" onClick={() => { window.location.replace('http://localhost:3000/service') }} >
                                <Icon type="trophy" />
                                生活服务
                            </NavLink>
                        </Col>
                        <Col span={5}>
                            <NavLink to="/mine" className="menu-link" onClick={() => { window.location.replace('http://localhost:3000/mine') }} >
                                <Icon type="team" />
                                我的
                            </NavLink>
                        </Col>
                    </Row>
                </div>
            </Router>
        )
    }
}
