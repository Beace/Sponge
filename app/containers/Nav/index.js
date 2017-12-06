import React from 'react';
import Proptypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.css';

const { Header, Content, Footer, Sider } = Layout;

const navs = [
  { name: 'Dashboard', icon: 'appstore', key: '0', url: '/' },
  { name: '文章列表', icon: 'book', key: '1', url: '/articles' },
  { name: '添加文章', icon: 'file-add', key: '2', url: '/addarticle' },
  { name: '分类列表', icon: 'folder-open', key: '3', url: '/categories' },
  { name: '添加分类', icon: 'folder', key: '4', url: '/addcategories' },
  { name: '标签列表', icon: 'tag', key: '5', url: '/tags' },
  { name: '添加标签', icon: 'tag', key: '6', url: '/addtags' },
];

class Nav extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className={collapsed ? styles.logomini : styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {
              navs.map(item => (
                <Menu.Item key={item.key}>
                  <Icon type={item.icon} />
                  <span className="nav-text">{item.name}</span>
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout className={styles.navLayout}>
          <Header style={{ background: '#fff', padding: '0 0 0 20px', borderBottom: '1px solid #eee' }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Sponge ©2017 Created by Beace Lee
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

Nav.propTypes = {
  children: Proptypes.element.isRequired,
};

Nav.defaultProps = {
  description: '这是每一功能页面的描述',
};

export default Nav;
