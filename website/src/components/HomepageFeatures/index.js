import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Card, Col, Row, Divider, Typography, Space, Avatar, Button } from 'antd';
import {HomeFilled, TwitterOutlined, GithubOutlined} from '@ant-design/icons';

const { Meta } = Card;

const { Title } = Typography;

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{background: "#EFF2F5", padding: "16px"}}>
        {/*<div className="row">*/}
        {/*  {FeatureList.map((props, idx) => (*/}
        {/*    <Feature key={idx} {...props} />*/}
        {/*  ))}*/}
        {/*</div>*/}
        <Title>Introduction</Title>
        <p style={{color: "black"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, turpis at consequat varius, elit nibh pulvinar metus, convallis commodo libero ipsum vel nibh. Vivamus vestibulum neque sem, id molestie dui fermentum vel. Suspendisse volutpat dui bibendum, molestie nulla eu, venenatis purus. Suspendisse fringilla nunc nisi, non pretium dolor lobortis eget. Maecenas eleifend nulla quis tempor semper. Proin eros risus, sodales non fringilla egestas, congue quis ipsum. Nulla facilisi. Cras posuere, arcu non imperdiet elementum, dolor dui molestie diam, a scelerisque neque enim non odio. In eu erat id dolor accumsan ultrices ac eget nibh. Donec ac arcu ex.

          Nulla ut felis sit amet nulla sagittis dignissim eu ut arcu. Ut tristique justo mauris. Mauris in justo leo. Aliquam odio risus, maximus in tortor porta, ultrices congue arcu. Aenean vitae dignissim odio, at vehicula felis. Etiam non imperdiet orci. Nullam dui ligula, volutpat in accumsan ac, venenatis tempus leo. Sed urna libero, facilisis et venenatis bibendum, tristique at libero. Nunc dui nulla, viverra quis aliquet nec, mollis vel eros. Mauris elementum accumsan leo ut lobortis. Vivamus auctor nec arcu quis sagittis. Pellentesque in lectus vel nibh pellentesque dignissim et eget risus.
        </p>
      </div>
    </section>
  );
}
