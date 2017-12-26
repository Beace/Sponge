import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Divider, Popconfirm, message } from 'antd';

import fetch from '../../lib/fetch';

class ArticleListPage extends React.Component {
  state = {
    data: [],
    loading: false,
    pagination: {
      current: 1,
    },
  };
  componentDidMount() {
    this.getList();
  }

  getList = (current) => {
    this.setState({
      loading: true,
    });
    fetch
      .get('articles', {
        size: 10,
        start: current || 1,
      })
      .then((data) => {
        const pagination = { ...this.state.pagination };
        pagination.total = data.totalNumber;
        this.setState({
          data: data.data,
          loading: false,
          pagination,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  };

  confirm = (data) => {
    fetch
      .post('article_delete', { _id: data._id })
      .then(() => {
        message.success('删除成功！');
        this.getList();
      })
      .catch(error => message.error(JSON.stringify(error)));
  };


  handleTableChange = (pagination) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.getList(pager.current);
  }
  render() {
    const { loading, data } = this.state;
    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
        render: text => text || 'Beace',
      },
      {
        title: '创建时间',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '描述',
        dataIndex: 'abstract',
        key: 'abstract',
        width: '20%',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={`/articles/${record._id}`}>编辑</Link>
            <Divider type="vertical" />
            <Popconfirm
              placement="topLeft"
              title="确认删除该记录？"
              onConfirm={() => this.confirm(record)}
              okText="删除"
              cancelText="取消"
            >
              <a>删除</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
    return (
      <div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          rowKey="_id"
          pagination={this.state.pagination}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default ArticleListPage;
