import React from 'react';

class ArticleDetail extends React.Component {
  render() {
    return (
      <div>{this.props.params.id}</div>
    )
  }
}

export default ArticleDetail;
