import React from 'react';
import { Row, Col, Card } from 'antd';

export default function CoverTab(props){
    const { Meta } = Card;
    const {coverData} = props

    let coverCards = coverData.map(data=>
        <Col className="cover-card" span={8}>
        <Card hoverable style={{ width: 260 }}
            cover={<img alt="example" src={data.cover} />}>
            <Meta title={data.title} description={data.subDescription}/>
            <div className="cover-avatar">
                <span>2 小時前</span>
                <ul className="logo-wrapper">
                   {data.members.map(data=><li><img className="user-pic" src={data.avatar} alt="logo" /></li>)} 
                </ul>
            </div>
        </Card>
        </Col>)
    return(<Row gutter={8}> {coverData && coverCards} </Row>)
}