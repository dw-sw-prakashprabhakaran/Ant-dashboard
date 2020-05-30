import React from 'react'
import { Card, Tag, Divider, List, Avatar } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
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
            <p>{props.title}</p>
            <p>{props.group}</p>
            <p>{props.province}{props.city}</p>
          </Card>
          <Divider/>
          <div>
            <SimpleTags tags={props.tags}/>
            <Tag className="site-tag-plus" >
              <PlusOutlined />
            </Tag>
          </div>  
        <Divider/>
        {props.data && <List grid={{gutter: 0,}}
          dataSource={props.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta avatar={<Avatar src={item.logo} />}
                title={<a href="https://ant.design">{item.member}</a>}/>
            </List.Item>)}/>
            }    
        </>
    )
}