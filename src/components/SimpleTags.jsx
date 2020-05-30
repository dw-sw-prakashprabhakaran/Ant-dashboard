import React from 'react'
import { Tag } from 'antd';


export default function SimpleTags(props){
    const {tags} = props;
    let tagMap = tags.map(data=>data.label ? <Tag>{data.label}</Tag> : <Tag>{data}</Tag>)
    return( tags && tagMap )
}