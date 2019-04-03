import React, { Component } from 'react';
import { Title, Layout } from 'utils/styled';
import Button from 'utils/components/button'

export default class MainPage extends Component {
  render() {
    const { goToStep } = this.props
    return (
      <Layout>
        <Title>Welcome to our Hiring Process</Title>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <Button id="startButton" text="Start Registration" onClick={goToStep}></Button>
      </Layout>
    );
  }
}
