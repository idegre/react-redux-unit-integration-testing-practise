import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 40px 0px;
    input {
        margin-top: 10px;
        width: 100%;
    }
    textarea {
        margin-top: 10px;
        width: 100%;
    }
`

const Error = styled.div`
    color: red;
`

export default ({ meta: { error, touched }, title, input, required, type }) => {
    return (
        <Holder>
            <div>
                <span>{title}</span>{required && <span>*</span>}
            </div>
            {type === 'textarea'
                ? <textarea {...input} type={ type }/>
                : <input {...input} type={ type }/>}
            {touched && <Error>{error}</Error>}
        </Holder>
    )
}