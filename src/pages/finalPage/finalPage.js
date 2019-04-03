import React, { Component } from 'react';
import { Title, Layout } from 'utils/styled';

export default class FinalPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Title>Submitted Data</Title>
        <ul>
          {Object.keys(data).map((k, i) => <li key={i}>{k}: {data[k]}</li>)}
        </ul>
      </Layout>
    );
  }
}
