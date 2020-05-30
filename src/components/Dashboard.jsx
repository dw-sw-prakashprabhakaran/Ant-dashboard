import React from 'react';
import { Layout, Menu, Row, Col, Tabs } from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined,UserOutlined,SmileOutlined} from '@ant-design/icons';
import UserCard from './UserCard'
import TimelineTab from './TimelineTab';
import CoverTab from './CoverTab'
import StatisticTab from './StatisticTab'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

export default class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = { collapsed: false,}
    }

  toggle = () => this.setState({collapsed: !this.state.collapsed,});

  componentDidMount(){
    this.fetchCurrentUser()
    this.fetchFakeList()
  }

  fetchCurrentUser = () => {
    const url = 'https://proapi.azurewebsites.net//api/currentUser'
    fetch(url,{method:'GET'})
    .then(res => res.json())
    .then(json=>{
        this.setState({
            user:json
        })
    })
}

fetchFakeList = () => {
  const url = 'https://proapi.azurewebsites.net//api/fake_list'
  fetch(url,{method:'GET'})
  .then(res => res.json())
  .then(json=>{
      this.setState({
          fakeList:json
      })
  })
}

  componentDidUpdate(){
    const title = document.querySelector('.logo-text')
    if(this.state.collapsed){
        title.style.display="none"
    }else{
        title.style.display="inline"
    }
  }

  render() {
    const user=this.state.user;

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >
              <img src="/assets/ant_logo.svg" alt="logo"/>
              <span className="logo-text"> Ant Design</span>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Account">
              <Menu.Item key="3" icon={<SmileOutlined/>}>Account Center</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0px 20px' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            
          </Header>
          <Row gutter={[8, 8]}>
            <Col span={8}>
              <Content className="site-layout-background"
                style={{margin: '20px 5px 20px 20px',padding: 20,minHeight: 280,}}>

              {this.state.user && <UserCard avatar={user.avatar} 
              name={user.name}
              signature={user.signature}
              title={user.title}
              city={user.geographic.city.label}
              province={user.geographic.province.label}
              group={user.group}
              tags={user.tags}
              data={user.notice} /> }

              </Content>
            </Col>
            <Col span={16}>
              <Content className="site-layout-background"
                style={{margin: '20px 20px 20px 5px',padding: '5px 20px',minHeight: 280,}}>
                <Tabs defaultActiveKey="1" >
                  <TabPane tab="文章 (8)" key="1">
                    {this.state.fakeList && <TimelineTab listData={this.state.fakeList} />}
                  </TabPane>
                  <TabPane tab="应用 (8)" key="2">
                    <StatisticTab statusData={this.state.fakeList} />  
                  </TabPane>
                  <TabPane tab="项目 (8)" key="3">
                    <CoverTab coverData={this.state.fakeList} />
                  </TabPane>
                </Tabs>
              </Content>
            </Col>
          </Row>
        </Layout>
      </Layout>
    );
  }
}