import styled from 'styled-components'
import React from 'react'
import Button from 'utils/components/button'

const Holder = styled.div`
    display: flex;
    justify-content: space-evenly;
    & > div {
        margin: 5px;
        display: flex;
        flex-grow: 1;
        justify-content: center;-
    }

    & > input {
        background-color: black;
        color: white;
        flex-grow: 1;
        font-family: inherit;
        font-size: inherit;
        margin: 5px;
        cursor: pointer;
        padding: 12px;
        user-select: none;
        border: 1px solid black;
    }
`

export default ({backFunc}) => <Holder>
    <Button clear text="Back" onClick={ backFunc }/>
    <input className="button" text="Continue" type="submit" value="Continue"/>
</Holder>