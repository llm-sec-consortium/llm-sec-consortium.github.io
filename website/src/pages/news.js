import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';
import { useState } from 'react';
import { Card,Typography, Button, Tabs, Table, Row, Col} from 'antd';

const { Meta } = Card;

const { Title } = Typography;



const onChange = (key) => {
  console.log(key);
};
const news = [
  {
    key: '1',
    label: 'Headlines',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Blogs',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Our news',
    children: 'Content of Tab Pane 3',
  },
];

function News() {
  const {siteConfig} = useDocusaurusContext();

  const [cards, setCards] = useState([]);


  const newsWithTableAndCardChildren = news.map(item => {
    // if (item.key === '3') {
    //   return {
    //     ...item,
    //     children: (
 
    //        <div>

    //          {cards} 
    //           <Button onClick={addCard}>Create Card</Button>
    //        </div>
        

    //     ),
    //   };
    // } else 
    {
      return {
        ...item,
        children: (
          <>
          
    <Row>
      <Col span={6}><Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card></Col>
      <Col span={6}><Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card></Col>
      <Col span={6}><Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card></Col>
      <Col span={6}><Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card></Col>
    </Row>
          </>
        ),
      };
    }
  });

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main style={{ background: "#EFF2F5"}}>
        <section className={styles.features}>
          <div className="container" style={{padding: "16px" }}>
            <Title>News</Title>
            <Tabs centered defaultActiveKey="1" items={newsWithTableAndCardChildren} onChange={onChange} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
export default News
