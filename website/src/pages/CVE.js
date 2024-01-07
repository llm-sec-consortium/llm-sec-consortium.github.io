import React, { useState } from 'react';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { Form, Radio, Space, Switch, Table, List, Tag } from 'antd';
import Layout from '@theme/Layout';

import cveList from '@site/static/data/cves.json';

// get the unique keywords used for finding these CVEs
const uniqueKeywords = [...new Set(cveList.map(
  record => record.keywords.map((keyword) => keyword.toUpperCase())).flat(1))];
// map them into colors
// https://stackoverflow.com/questions/64513938/map-strings-to-a-color-selected-from-a-predefined-array-javascript
const COLORS = ['red', 'volcano', 'orange', 'gold', 'yellow', 'lime',
  'green', 'cyan', 'blue', 'geekblue', 'purple', 'magenta']
const hashString = (string) => string.split('').map((char) => char.charCodeAt(0)).reduce((a, b) => a + b, 0)
const keywordToColor = (string) => COLORS[hashString(string) % COLORS.length];

const keywordFilters = uniqueKeywords.map((keyword) => ({text: keyword, value: keyword}));

// get the unique keywords used for finding these CVEs
const uniqueYears = [...new Set(cveList.map(record => record.year))];
const yearFilters = uniqueYears.map((year) => ({text: year, value: year}));


const columns = [
  {
    title: 'CVE ID',
    dataIndex: 'cve_id',
    key: 'cve_id',
    // NOTE assume there are less than 1000000 CVEs per year
    sorter: (a, b) => (a.year - b.year)*1000000 + (a.year_id - b.year_id),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    filters: yearFilters,
    onFilter: (value, record) => record.year === value
  },
  {
    title: 'Products',
    dataIndex: 'keywords',
    key: 'keywords',
    render: (keywords) => (
      <>
        {keywords.map((keyword) => {
          return (
            // TODO improve this, add more colors
            <Tag color={keywordToColor(keyword)} key={keyword}>
              {keyword.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: keywordFilters,
    onFilter: (value, record) => record.keywords.map((keyword) => keyword.toUpperCase()).includes(value)
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'By Us',
    dataIndex: 'found_by_us',
    key: 'found_by_us',
    render: (found_by_us) => {
      return found_by_us ? <CheckCircleTwoTone twoToneColor='green'/>
        : <CloseCircleTwoTone twoToneColor='red'/>;
    },
    filters: [
      {
        text: "Found By Us",
        value: true
      },
      {
        text: "Found By Others",
        value: false
      }
    ],
    onFilter: (value, record) => record.found_by_us === value
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <Space size="middle">
        <a href={record.official_link}>View on CVE.org</a>
      </Space>
    ),
  },
];

const defaultExpandable = {
  expandedRowRender: (record) => {
    return (
      <List
        header={<div>References</div>}
        itemLayout="horizontal"
        dataSource={record.references}
        renderItem={(item, index) => (
          <List.Item>
            [{index+1}] <a href={item}>{item}</a>
          </List.Item>
        )}
      />
    );
  },
  rowExpandable: (record) => record.references.length > 0
};
const defaultTitle = () => 'List of CVEs';
const CVE = () => {
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('middle');
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [tableLayout, setTableLayout] = useState();
  const [ellipsis, setEllipsis] = useState(false);


  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));

  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    // scroll: {y: 500},
    tableLayout,
    pagination: {
      showSizeChanger: true
    }
  };
  return (
    <Layout
      title={`CVEs related to LLM frameworks and apps`}
      description="">
      <main>
        <div  style={{ background: "#EFF2F5", padding: "16px" }}>
          <Table
            {...tableProps}
            columns={tableColumns}
            dataSource={cveList}
          />
        </div>
      </main>
    </Layout>
  );
};
export default CVE;