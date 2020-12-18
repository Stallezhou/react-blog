import React, { Component } from 'react';
import {Row,Col,Menu,Icon} from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem';
import styles from './Header.module.css'

const Header = ()=>(
 <div className={styles.header}>
  <Row type='flex' justify='center'>
   <Col xs={24} sm={24} md={10} lg={15} xl={12}>
     <span className={styles.headerLogo}>前端随手记</span>
     <span className={styles.headerDesc}>记录前端生活的点点滴滴</span>
   </Col>
   <Col xs={0} sm={0} md={14} lg={8} xl={6}>
     <Menu mode='horizontal'>
      <MenuItem key='home'>
       首页
      </MenuItem>
      <MenuItem key='vidoe'>
        视频
      </MenuItem>
      <MenuItem key='life'>
        首页
      </MenuItem>
     </Menu>
   </Col> 
  </Row>
 </div>
)
export default Header
