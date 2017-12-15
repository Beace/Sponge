import React from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker, Input, Button } from 'antd';

const FormItem = Form.Item;

class ArticleDetailForm extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        'date': fieldsValue['date'].format('YYYY-MM-DD HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const config = {
      rules: [{ type: 'string', required: true, message: 'say sth.' }],
    };
    const dateConfig = {
      rules: [{ type: 'object', required: true, message: 'say sth.' }],
    };
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <FormItem label="id" style={{ display: 'none' }}>
          {getFieldDecorator('id', {
            initialValue: this.props.match.params.id,
          })(
            <Input type="hidden" />
          )}
        </FormItem>
        <FormItem label="标题">
          {getFieldDecorator('title', config)(
            <Input />
          )}
        </FormItem>
        <FormItem label="作者">
          {getFieldDecorator('author', config)(
            <Input />
          )}
        </FormItem>
        <FormItem label="时间">
          {getFieldDecorator('date', dateConfig)(
            <DatePicker style={{ width: '100%' }} showTime format="YYYY-MM-DD HH:mm:ss" />
          )}
        </FormItem>
        <FormItem label="描述">
          {getFieldDecorator('abstract', config)(
            <Input.TextArea placeholder="输入描述" autosize={{ minRows: 6, maxRows: 8 }} />
          )}
        </FormItem>
        <FormItem label="正文">
          {getFieldDecorator('content', config)(
            <Input />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

const ArticleDetailPage = Form.create()(ArticleDetailForm);

export default ArticleDetailPage;
