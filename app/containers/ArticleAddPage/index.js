import React from "react";
import PropTypes from "prop-types";
import marked from "marked";
import { Row, Col, Form, DatePicker, Input, Button, Spin, Affix, message } from "antd";
import highlightjs from "highlight.js";
import moment from 'moment';

import styles from "./index.css";
import fetch from "../../lib/fetch";

const FormItem = Form.Item;

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return highlightjs.highlightAuto(code).value;
  }
});

class ArticleAddForm extends React.Component {
  static propTypes = {
    form: PropTypes.object
  };

  state = {
    data: {
      title: '',
      author: 'Beace',
      date: Date.now(),
      abstract: '',
      content: '',
    },
    loading: false
  };

  handleChange = value => {
    this.setState({ text: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        date: fieldsValue.date.format("YYYY-MM-DD HH:mm:ss")
      };
      fetch.post("article", values).then(() => {
        message.success("创建成功！");
        this.props.history.push('/articles');
      }).catch(error => {
        console.log(error);
        message.error(JSON.stringify(error));
      });
    });
  };

  createMarkup() {
    return {
      __html: this.props.form.getFieldValue("content")
        ? marked(this.props.form.getFieldValue("content"))
        : ""
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const data = this.state.data;
    return (
      <Spin spinning={this.state.loading}>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem label="标题">
            {getFieldDecorator("title", {
              initialValue: data.title,
              rules: [
                { type: "string", required: true, message: "say sth." }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="作者">
            {getFieldDecorator("author", {
              initialValue: data.author,
              rules: [
                { type: "string", required: true, message: "say sth." }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem label="时间">
            {getFieldDecorator("date", {
              initialValue: data.date ? moment(data.date) : null,
              rules: [{ type: "object", required: true, message: "say sth." }],
            })(
              <DatePicker
                style={{ width: "100%" }}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />
            )}
          </FormItem>
          <FormItem label="描述">
            {getFieldDecorator("abstract", {
              initialValue: data.abstract,
              rules: [
                { type: "string", required: true, message: "say sth." }
              ]
            })(
              <Input.TextArea
                placeholder="输入描述"
                autosize={{ minRows: 6, maxRows: 8 }}
              />
            )}
          </FormItem>
          <Row gutter={16} type="flex">
            <Col span={12}>
              <FormItem label="正文">
                {getFieldDecorator("content", {
                  initialValue: data.content,
                  rules: [
                    { type: "string", required: true, message: "say sth." }
                  ]
                })(
                  <Input.TextArea
                    placeholder="正文。。。"
                    autosize={{ minRows: 300, maxRows: 1000 }}
                  />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="预览" style={{ height: "100%" }}>
                <div
                  className={styles.previewContainer}
                  dangerouslySetInnerHTML={this.createMarkup()}
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: 4,
                    height: "100%",
                    padding: 5
                  }}
                />
              </FormItem>
            </Col>
          </Row>
          <Affix offsetBottom={0}>
            <FormItem style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                创建
              </Button>
            </FormItem>
          </Affix>
        </Form>
      </Spin>
    );
  }
}

const ArticleAddPage = Form.create()(ArticleAddForm);

export default ArticleAddPage;
