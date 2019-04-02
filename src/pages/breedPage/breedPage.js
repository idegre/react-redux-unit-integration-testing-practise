import React, { Component, Fragment } from 'react';
import { Title, Layout } from '../../utils/styled';
import styled from 'styled-components';

const DogImage = styled.img`
    width: 50vw;
`;
export default class BreedPage extends Component {
    componentDidMount() {
        const { breed, history } = this.props;
        //in case the user attempts to navigate trough URl to a breed that not loaded in the store
        if (!breed) {
            history.push('/');
        }
    }

  render() {
    const { breed, photo } = this.props;
    return (
      <Fragment>
        <Layout>
            <Title>{breed}</Title>
            <DogImage src={photo} alt={`a ${breed} dog`}></DogImage>
        </Layout>
      </Fragment>
    );
  }
}