import React from 'react'
import { Card, Tag, Divider, Row, Col } from 'antd';
import {PlusOutlined, ContactsOutlined, ClusterOutlined, HomeOutlined} from '@ant-design/icons';
import SimpleTags from './SimpleTags'

export default function UserCard(props){
    
    return(
        <>
          <div className="profile-container">
            <img className="profile-picture" src={props.avatar} alt="user"/>
            <h2>{props.name}</h2>
            <p>{props.signature}</p>
          </div>
          <Card bordered={false} style={{ width: '100%' }}>
            <p><span className="info-logo"><ContactsOutlined /></span>{props.title}</p>
            <p><span className="info-logo"><ClusterOutlined /></span>{props.group}</p>
            <p><span className="info-logo"><HomeOutlined /></span>{props.province}{props.city}</p>
          </Card>
          <Divider/>
          <div>
          <div class="tagsTitle">标签</div>
            <SimpleTags tags={props.tags}/>
            <Tag className="site-tag-plus" >
              <PlusOutlined />
            </Tag>
          </div>  
        <Divider/>
        {props.data &&  <Row gutter={[16,16]} >
                {props.data.map(item=>
                  <Col span={12}>
                    <img className="row-img" src={item.logo} alt="logo"/>
                    {item.member}
                  </Col>)}
                </Row>
               }    
        </>
    )
}