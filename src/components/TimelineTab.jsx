import React from 'react'
import {  List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import SimpleTags from './SimpleTags'

export default function TimelineTab(props){

          const {listData}=props
          const IconText = ({ icon, text }) => (
            <Space>
              {React.createElement(icon)}
              {text}
            </Space>
          );

    return(
        <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.activeUser}
            actions={[
              <IconText icon={StarOutlined} text={item.star} key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text={item.like} key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text={item.message} key="list-vertical-message" />,
            ]}>

            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={<SimpleTags tags={['Ant Design','设计语言','蚂蚁金服']} />}
            />
            {item.content}
            <div className="antd-pro-pages-account-center-components-article-list-content-index-extra">
                <span className="ant-avatar ant-avatar-sm ant-avatar-circle ant-avatar-image">
                  <img src={item.avatar} alt="logo"/>
                </span>
                <a style={{marginLeft:'10px'}} href="https://ant.design">{item.owner}</a> 发布在
                <a href="https://ant.design">https://ant.design</a>
                <em>{item.updatedAt}</em>
            </div>
          </List.Item>  
        )}  
      />
    )
}