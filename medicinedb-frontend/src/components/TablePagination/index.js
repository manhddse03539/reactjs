/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import get from 'lodash/get';
import { Spinner } from 'react-bootstrap';
import Pagination from '~/components/Pagination';
import Wrapper from './tablePagination.styles.js';
import { ITEM_PER_PAGE } from '~/constant';
import { getCurrentData } from '~/helper/helper';


function TablePaginationData({ columns, data, loading }) {
  // set pagination data
  const [currentPage, setCurrentPage] = useState(1);
  const currentData = getCurrentData(data, currentPage, ITEM_PER_PAGE);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <Wrapper>
      <div className="wrapper-table">
        <table className="table table-bordered">
          <thead>
            <tr>
            {columns && columns.map(item => (
              <th key={item.field}>{item.name}</th>
            ))}
            </tr>
          </thead>
          {loading && <Spinner variant="primary" animation="border" />}
          <tbody>
            {currentData && currentData.map((row, index) => (
              <tr key={index}>
                {columns.map((item, index) => (
                  <td key={index} className={`td-${item.field}`}>
                    <div>{get(row, item.field, '')}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && <div className="no-data">データがありません。</div>}
      </div>
      <Pagination totalItem={data.length} itemPerPage={ITEM_PER_PAGE} activePage={currentPage} handlePaginate={handlePaginate}/>
    </Wrapper>
  )
}

export default TablePaginationData
