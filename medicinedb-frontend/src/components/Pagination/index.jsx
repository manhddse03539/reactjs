/* eslint-disable react/prop-types */
import React from 'react';
import ReactPaginate from 'react-js-pagination';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  li {
    border: 1px solid #cccccc;
    padding: 5px 12px;
    margin-right: 5px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .active {
    background: #6666FF; 
    a {
      color: #fff;
    }
  }
`;

function Pagination({ totalItem = 0, itemPerPage, activePage, handlePaginate }) {
  return (
    <Wrapper>
      <ReactPaginate
        activeClass='active'
        activePage={activePage}
        itemsCountPerPage={itemPerPage}
        totalItemsCount={totalItem}
        pageRangeDisplayed={5}
        onChange={e => handlePaginate(e)}
      />
    </Wrapper>
  );
}

export default Pagination;
