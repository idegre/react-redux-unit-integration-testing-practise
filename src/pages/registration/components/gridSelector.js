import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Grid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const Error = styled.div`
    color: red;
`

const SingleOption = styled.div`
    min-width: 100px;
    padding: 10px;
    display: flex;
    background-color: ${({selected}) => selected ? 'black' : 'white'};
    color: ${({selected}) => selected ? 'white' : 'black'};
    justify-content: center;
    border: 1px solid black;
    margin: 5px;
    user-select: none;
    cursor: pointer;
`

const GridSelector = ({ meta: { error, touched }, title, input: {onChange, value}, required, options }) => {
    let valueArray;
    try {
        valueArray = JSON.parse( value )
    } catch ( e ) {
        valueArray = []
    }
    return (
        <Holder>
            <div>
                <span>{title}</span>{required && <span>*</span>}
            </div>
            <Grid>
                { options
                    ? options.map(option => {
                        const selected = valueArray.includes(option)
                        const change = () => selected
                            ? onChange(JSON.stringify([ ...valueArray.filter(opt => opt !== option) ]))
                            : onChange(JSON.stringify([ ...valueArray, option ]))
                        return <SingleOption
                            onClick={ change }
                            key={ option }
                            selected={ selected }>{ option }</SingleOption>
                    })
                    : 'no options avaliable' }
            </Grid>
            { touched && <Error>{error}</Error> }
        </Holder>
    )
}

export default GridSelector