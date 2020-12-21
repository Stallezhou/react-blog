import {useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header/index'
import Author from '../components/Author/index'
import Advert from '../components/Advert/index'
import Footer from '../components/Footer/index'
import {Col, List,Row} from 'antd'
import  ReactMarkdown from 'react-markdown'
import Mock from 'mockjs'
const listData = Mock.mock({
  'data|4-10':[
    {
      title:'@cword(6,10)',
      context:"@cword(400,500)"
    }
  ]
})
const Content = ()=>{
  const markdown = '# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  const [list,setList] = useState(listData.data)
  return (<div>
    <Head>
     <title>content</title>
    </Head>
    <Header></Header>
    <Row className="body" type='flex' justify='center'>
      <Col className='main' xs={24} sm={24} md={16} lg={18} xl = {14}>
        <div>
          <div>
            React实战技术教程 
          </div>
          <div>
            <span>时间:2019-06-02</span>
            <span>类别:React</span>
            <span>观看人数:4,000人</span>
          </div>
          <div>
            <ReactMarkdown 
            children={markdown}
            skipHtml={false}
            />
            正文,解析md
          </div>
        </div>
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
export default Content
