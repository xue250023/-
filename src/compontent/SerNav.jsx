import React, { PureComponent } from 'react'
import { Row, Col } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';
import { Carousel } from 'antd';
import { citydata, bannerimg } from '../data/service'
import { Input } from 'antd';
import HomeRoute from './HomeRoute'
class SerNav extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            city: '西安'
        };

    }
    handleClick(index) {
        this.setState({
            city: citydata.lists[index]
        });
    }
    render() {
        const meunlist = citydata.lists.map((item, index) => {
            return <Menu.Item key={index} onClick={this.handleClick.bind(this, index)}> {item} </Menu.Item>
        })
        const banner = bannerimg.imgdata.map((item, index) => {
            return <img src={item} key={index} style="width:300px"></img>
        })
        const { Search } = Input;
        return (
            <div>
                <Row style={{ margin: '16px 0' }} type="flex" justify="center" align="middle">
                    <Col span={7}>
                        <Dropdown overlay={<Menu > {meunlist} </Menu>}>
                            <a className="ant-dropdown-link" href="#">
                                {this.state.city} <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span={10}>
                        <Search placeholder="台灯" onSearch={value => console.log(value)} enterButton />
                    </Col>
                    <Col span={7}>
                        <HomeRoute />
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="middle" >
                    <Col span={23}>
                        <Carousel autoplay   >
                            {banner}
                        </Carousel>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SerNav
