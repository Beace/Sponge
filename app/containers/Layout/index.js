import React from 'react';
import Proptypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import styles from './index.css';

const {
  Header, Content, Footer, Sider,
} = Layout;

const navs = [
  {
    name: 'Dashboard', icon: 'appstore', key: '0', url: '/',
  },
  {
    name: '文章列表', icon: 'book', key: '1', url: '/articles',
  },
  {
    name: '添加文章', icon: 'file-add', key: '2', url: '/addarticle',
  },
  {
    name: '分类列表', icon: 'folder-open', key: '3', url: '/categories',
  },
  {
    name: '添加分类', icon: 'folder', key: '4', url: '/addcategories',
  },
  {
    name: '标签列表', icon: 'tag', key: '5', url: '/tags',
  },
  {
    name: '添加标签', icon: 'tag', key: '6', url: '/addtags',
  },
];

class Nav extends React.Component {
  state = {
    collapsed: false,
    selectedKeys: ['/'],
  };

  componentWillMount() {
    if (this.state.selectedKeys !== this.props.history.location.pathname) {
      this.setState({
        selectedKeys: [this.props.history.location.pathname],
      });
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onSelect = (item) => {
    this.setState({
      selectedKeys: [item.key],
    });
    if (this.props.history.location.pathname !== item.key) {
      this.props.history.push(item.key);
    }
  };

  render() {
    const { collapsed, selectedKeys } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className={styles.sliderFixed}>
          <div className={collapsed ? styles.logomini : styles.logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
            selectedKeys={selectedKeys}
            onSelect={this.onSelect}
          >
            {navs.map(item => (
              <Menu.Item key={item.url}>
                <Icon type={item.icon} />
                <span className="nav-text">{item.name}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className={collapsed ? styles.contentLayoutLarge : styles.contentLayout}>
          <Header className={styles.contentHeader}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={styles.childrenContent}>{this.props.children}</Content>
          <Footer style={{ textAlign: 'center' }}>Sponge ©2017 Created by Beace Lee</Footer>
        </Layout>
      </Layout>
    );
  }
}

Nav.propTypes = {
  children: Proptypes.element.isRequired,
  history: Proptypes.object.isRequired,
};

Nav.defaultProps = {
  description: '这是每一功能页面的描述',
};

export default withRouter(Nav);
