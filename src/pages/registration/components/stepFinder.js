import React from 'react';
import styled from 'styled-components';

const StepFinderContainer  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const IndividualStepNumber = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    color: ${({selected}) => selected ? 'white' : 'black'};
    height: 20px;
    width: 20px;
    background-color: ${({selected}) => selected ? 'black' : 'white'};
    border-radius: 10px;
    border: 1px solid black;
`;

const StepHolder = styled.div`
    background-color: white;
    padding: 0px 20px;
`;

const Line = styled.div`
    position: absolute;
    width: 100%;
    top: 10px;
    z-index: -1;
    background-color: black;
    height: 2px;
`;

const IndividualStep = ({step, selected}) => <StepHolder><IndividualStepNumber selected={selected} >{step}</IndividualStepNumber></StepHolder> 


export default ({step, steps}) => <StepFinderContainer>
    {steps.length && <Line />}
    {steps.map(s => <IndividualStep 
        key={s}
        // disabled eqeqeq on this line to mainain type coercion and allow for more robust step detection
        // eslint-disable-next-line eqeqeq
        selected={s == step}
        step={s}/>)}
</StepFinderContainer>