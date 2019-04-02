import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
        width: 100%;
    }
`

const Error = styled.div`
    color: red;
`

export default ({ meta: { error, touched }, title, input, required }) => {
    return (
        <Holder>
            <div>
                <span>{title}</span>{required && <span>*</span>}
            </div>
            <input {...input} type="text"/>
            {touched && <Error>{error}</Error>}
        </Holder>
    )
}