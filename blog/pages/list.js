import {useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header/index'
import Author from '../components/Author/index'
import Advert from '../components/Advert/index'
import Footer from '../components/Footer/index'
import {Col, List,Row} from 'antd'
import Mock from 'mockjs'
const listData = Mock.mock({
  'data|4-10':[
    {
      title:'@cword(6,10)',
      context:"@cword(400,500)"
    }
  ]
})
const MyList = ()=>{
  const [list,setList] = useState(listData.data)
  return (<div>
    <Head>
     <title>home</title>
    </Head>
    <Header></Header>
    <Row className="body" type='flex' justify='center'>
      <Col className='main' xs={24} sm={24} md={16} lg={18} xl = {14}>
      <List 
        header={
          <div>最新日志</div>
        }
        itemLayout="vertical"
        dataSource={list}
        renderItem={
          item=>(
            <List.Item>
              <div>{item.title}</div>
              <div>
                <span>2020-12-18</span>
                <span>React</span>
                <span>5,864人</span>
              </div>
              <div>{item.context}</div>
            </List.Item>
          )
        }
      />
      </Col>  
      <Col className='aside' xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
        <Advert/>
      </Col>
    </Row>
    <Footer/>
  </div>
  )
}
export default MyList
