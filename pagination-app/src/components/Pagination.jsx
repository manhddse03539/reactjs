import React from 'react';

const Pagination = (props) => {
    const { pagination, onChangePage } = props;
    const { _page, _limit, _totalRows } = pagination;
    const maxPage = Math.ceil(_totalRows / _limit);

    const handleOnChangePage = newPage => {
        if (onChangePage) {
            onChangePage(newPage);
        }
    }

    return (
        <div className="Pagination">
            <button disabled={_page === 1} onClick={() => handleOnChangePage(_page - 1)}>Prev</button>
            <button disabled={_page === maxPage} onClick={() => handleOnChangePage(_page + 1)}>Next</button>
        </div>
    );
}

export default Pagination;