import './App.css';
import PostList from './components/PostList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFilterForm from './components/PostFilterForm';


function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({})
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })
  useEffect(() => {
    try {
      const paramString = queryString.stringify(filters);
      const url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
      axios.get(url).then(json => {
        setPostList(json.data.data);
        setPagination(json.data.pagination);
      })
    } catch (error) {
      console.log(error);
    }
  }, [filters])
  const handleOnChangePage = newPage => {
    setFilters({
      ...filters,
      _page: newPage
    })
  }
  // filter and search task
  const handleSearchTermChange = newFilter => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm
    });
  }

  return (
    <div className="App">
      <PostFilterForm
        onSubmit={handleSearchTermChange}
      />
      <PostList
        items={postList}
      />
      <Pagination
        pagination={pagination}
        onChangePage={handleOnChangePage}
      />
    </div>
  );
}

export default App;
