import React from 'react';
import { Row, Col, Card, Avatar, Statistic } from 'antd';
import { EditOutlined, EllipsisOutlined, UploadOutlined, ShareAltOutlined } from '@ant-design/icons';

export default function StatisticTab(props){
    const { Meta } = Card;
    const {statusData} = props

    let statusCards = statusData.map(data=>
        <Col className="cover-card" span={8}>
            <Card style={{ width: 260 }}
            actions={[
              <UploadOutlined key="upload" />,
              <EditOutlined key="edit" />,
              <ShareAltOutlined key="share" />,
              <EllipsisOutlined key="ellipsis" />,]}>
            <Meta avatar={<Avatar src={data.logo} />}
              title={data.title} />
          <Row style={{marginLeft:'30px'}} className="stats-container" gutter={6}>
            <Col span={12}>
              <Statistic title="活跃用户" value={data.activeUser}  />
            </Col>
            <Col span={12}>
              <Statistic title="新增用户" value={data.newUser} />
            </Col>
          </Row>
          </Card>
        </Col>
    )
    return(
        <Row gutter={8}> {statusData && statusCards} </Row>
    )
}