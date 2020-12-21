import {Avatar,Divider} from 'antd'
import React, { Component } from 'react';

const Author = ()=>{
 return (
  <div className="author-box">
   <div>
    <Avatar size='100'   src='https://blogimages.jspang.com/blogtouxiang1.jpg'/>
   </div>
   <div className='author-desc'>
    我的个人介绍
    <Divider>社交账号</Divider>
    <Avatar sie={28} icon='github'/>
    <Avatar sie={28} icon='qq'/>
    <Avatar sie={28} icon='wechat'/>
   </div>
  </div>
 )
}
export default Author