import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const ButtonContainer = styled.div`
    background-color: ${({clear}) => clear ? 'white' : 'black'};;
    color: ${({clear}) => clear ? 'black' : 'white'};;
    cursor: pointer;
    padding: 12px;
    user-select: none;
    border: 1px solid black;
`;

const Button = ({text, onClick, clear}) => <ButtonContainer clear={clear} onClick={onClick}>
    {text}
</ButtonContainer>

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    clear: PropTypes.bool,
  }

export default Button