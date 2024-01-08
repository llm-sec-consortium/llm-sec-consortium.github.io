import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { Card, Col, Row, Divider, Typography, Space, Avatar, Button } from 'antd';
import {HomeFilled, TwitterOutlined, GithubOutlined} from '@ant-design/icons';

const { Meta } = Card;

const { Title } = Typography;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function FounderCard({name, intro, photo, home, twitter, github, title, affiliation}) {
  return (
    <Card hoverable bordered={false}
          actions={[
            <a href={home}> <HomeFilled /> </a>,
            // <Button type="text" href={home} icon={<HomeOutlined />} />,
            <a href={github}> <GithubOutlined /> </a>,
            <a href={twitter}> <TwitterOutlined /> </a>
          ]}>
      <Meta
        avatar={<Avatar src={photo}/>}
        title={name}
        description={
          <div>
            <p style={{minHeight: "80px"}}><strong>{title} @ {affiliation}</strong></p>
            {/*<Divider/>*/}
            {/*<p style={{minHeight: "100px"}}>{intro}</p>*/}
          </div>
        }
      />
    </Card>
  );
}

function MemberCard({name, photo, title, affiliation}) {
  return (
    <Card hoverable bordered={false}>
      <Meta
        avatar={<Avatar src={photo}/>}
        title={name}
        description={
          <p style={{minHeight: "80px"}}><strong>{title} @ {affiliation}</strong></p>
        }
      />
    </Card>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/*<HomepageHeader />*/}
      <main style={{ background: "#EFF2F5"}}>
        <section className={styles.features}>
          <div className="container" style={{ background: "#EFF2F5", padding: "16px" }}>
            <Title>People</Title>
            <Title level={2}>Founders</Title>
            <Row gutter={16}>
              <Col span={6}>
                <FounderCard
                  name={"Yuekang Li"}
                  intro={"haha"}
                  photo={'img/members/profile-pic-lyk.png'}
                  home={'https://thepatrickstar.github.io'}
                  github={'https://github.com/ThePatrickStar'}
                  twitter={''}
                  title={'Lecturer (Assistant Professor)'}
                  affiliation={'University of New South Wales'}
                />
              </Col>
              <Col span={6}>
                <FounderCard
                  name={"Guozhu Meng"}
                  intro={"haha"}
                  twitter={''}
                  title={'Associate Professor'}
                  affiliation={'University of Chinese Academy of Sciences'}
                />
              </Col>
              <Col span={6}>
                <FounderCard
                  name={"Kailong Wang"}
                  intro={"haha"}
                  twitter={''}
                  title={'Associate Professor'}
                  affiliation={'Huazhong University of Science and Technology'}
                />
              </Col>
              <Col span={6}>
                <FounderCard
                  name={"Yulei Sui"}
                  intro={"haha"}
                  twitter={''}
                  title={'Associate Professor'}
                  affiliation={'University of New South Wales'}
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: '16px' }}>
              <Col span={6}>
                <FounderCard
                  name={"Yi Liu"}
                  intro={"haha"}
                  twitter={''}
                  title={'PhD Candidate'}
                  affiliation={'Nanyang Technological University'}
                />
              </Col>
              <Col span={6}>
                <FounderCard
                  name={"Gelei Deng"}
                  intro={"haha"}
                  twitter={''}
                  title={'PhD Candidate'}
                  affiliation={'Nanyang Technological University'}
                />
              </Col>
              <Col span={6}>
                <FounderCard
                  name={"Tong Liu"}
                  intro={"haha"}
                  twitter={''}
                  title={'PhD Candidate'}
                  affiliation={'University of Chinese Academy of Sciences'}
                />
              </Col>
              <Col span={6}>
                <FounderCard
                  name={"Zizhuang Deng"}
                  intro={"haha"}
                  twitter={''}
                  title={'PhD Candidate'}
                  affiliation={'University of Chinese Academy of Sciences'}
                />
              </Col>
            </Row>
            <Title level={2} style={{ marginTop: '16px' }}>Members</Title>
            <Row gutter={16} style={{ marginTop: '16px' }}>
              <Col span={6}>
                <MemberCard
                  name={"..."}
                  title={'PhD Candidate'}
                  affiliation={'...'}
                />
              </Col>
            </Row>
          </div>
        </section>
      </main>
    </Layout>
  );
}
