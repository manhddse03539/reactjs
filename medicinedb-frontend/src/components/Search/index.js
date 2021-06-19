/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 300px;
    justify-content: space-between;
    input {
      outline: none;
        box-shadow: none;
        height: 100%;
        border: 1px solid #ccc;
        padding-left: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        width: 229px;
}
    }
    button {
        background: #6666FF;
        color: #fff;
        border: unset;
        height: 100%;
        width: 70px;
    }
`;


function Search({ handleOnChange, handleOnclick, className}) {
    return (
        <Wrapper className={className}>
            <input type="text" placeholder="キーワード" onChange={e => handleOnChange(e)} /> 
            <button onClick={handleOnclick}>検査</button>
        </Wrapper>
    )
}

export default Search;
