import React, { Component } from 'react';
import { Row, Col, Card, Tooltip, Icon } from 'antd';
import { Chart, Geom, Axis, Legend } from 'bizcharts';
import styles from './index.css';

// 数据源
const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
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
                  <Tooltip title="统计文章总数">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </div>
                <p>123</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <div className={styles.title}>
                  <h3>总标签</h3>
                  <Tooltip title="统计标签总数">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </div>
                <p>222</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                <div className={styles.title}>
                  <h3>总分类</h3>
                  <Tooltip title="统计分类总数">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </div>
                <p>333</p>
              </Card>
            </Col>
          </Row>
          <Chart width={600} height={400} data={data} scale={cols}>
            <Axis name="genre" />
            <Axis name="sold" />
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </div>
      </div>
    );
  }
}
