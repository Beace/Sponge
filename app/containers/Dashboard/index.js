import React, { Component } from 'react';
import { Row, Col, Card, Icon, Tooltip as Tool } from 'antd';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import styles from './index.css';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// 定义度量
const cols = {
  sold: { alias: '销售量' },
  genre: { alias: '游戏种类' }
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Row gutter={16} className={styles.cards}>
            <Col span={8}>
              <Card>
                <div className={styles.title}>
                  <h3>总文章</h3>
                  <Tool title="统计文章总数">
                    <Icon type="question-circle-o" />
                  </Tool>
                </div>
                <p>123</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <div className={styles.title}>
                  <h3>总标签</h3>
                  <Tool title="统计标签总数">
                    <Icon type="question-circle-o" />
                  </Tool>
                </div>
                <p>222</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <div className={styles.title}>
                  <h3>总分类</h3>
                  <Tool title="统计分类总数">
                    <Icon type="question-circle-o" />
                  </Tool>
                </div>
                <p>333</p>
              </Card>
            </Col>
          </Row>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
