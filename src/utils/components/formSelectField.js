import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
        width: 100%;
    }
    textarea {
        width: 100%;
    }
`

const Error = styled.div`
    color: red;
`

const SingleOption = styled.div`
    display: flex;
    flex-direction: row;
    margin 4px 0px;
    input {
        width: min-content;
        margin: 2px 5px;
    }
`

export default ({ meta: { error, touched }, title, input: {value, onChange}, required, options }) => {
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
            { options
                ? options.map(option => {
                    const selected = valueArray.includes(option)
                    const change = () => selected
                        ? onChange(JSON.stringify([ ...valueArray.filter(opt => opt !== option) ]))
                        : onChange(JSON.stringify([ ...valueArray, option ]))
                    return <SingleOption key={ option }>
                        <input type="checkbox"
                        onChange={ change }
                        checked={ selected }
                        value={ option }/>
                        <span>{option}</span>
                    </SingleOption>
                })
                : 'no options avaliable' }
            {touched && <Error>{error}</Error>}
        </Holder>
    )
}