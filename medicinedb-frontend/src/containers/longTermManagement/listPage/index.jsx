import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-navi';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { anElementAction } from '~/app/redux/longTerm/longTerm.slice';
import Wrapper from './listpage.styles';
import TablePaginationData from '~/components/TablePagination';
import Checkbox from '~/components/CheckBox';
import Search from '~/components/Search';
import Button from '~/components/Button';

function ListPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3000/data').then((res) => {
      setData(res.data);
      setLoading(res.data.length === 0)
    })
  }, []);

  const columns = [
    {
      name: '',
      field: 'checkbox',
    },
    {
      name: 'ID',
      field: 'id',
    },
    {
      name: '登録コード',
      field: 'toroku_code',
    },
    {
      name: '一般',
      field: 'ippan',
    },
    {
      name: '商品',
      field: 'shouhin',
    },
    {
      name: '告示',
      field: 'kokuji',
    },
    {
      name: '毒撃区分',
      field: 'kubun',
    },
    {
      name: '日数',
      field: 'nissu',
    },
    {
      name: '告示日',
      field: 'kokuji_nichi',
    }, 
    {
      name: 'エラー内容',
      field: 'error',
    },
    {
      name: '',
      field: 'action',
    },
  ];
  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
    dispatch(anElementAction( id ));
  }

  const handleCheckbox = (id) => {
    const newData = [...data];
    const foundIndex = newData.findIndex(item => (item.id === id));
    newData[foundIndex] = {
      ...data[foundIndex], checked: !newData[foundIndex].checked
    }
    setData(newData);
  }

  const restructureData = useMemo(() => (
      data.length > 0 &&
      data.map(record => ({
        ...record,
        checkbox: (
          <Checkbox checked={record.checked} onChange={()=>handleCheckbox(record.id)}/>
        ),
        action: (
          <div className="action">
            <Button className='btn btn-outline-warning edit-btn' label='編集' />
            <Button className='btn btn-outline-danger delete-btn' label='削除' handleOnClick={()=>handleDelete(record.id)} />
          </div>
        ),
      }))
  ), [data]);
  
  const [searchedData, setSearchedData] = useState(restructureData)
  const [filterText, setFilterTex] = useState('');
  const handleOnChange = (e) => {
    if (e.target.value === '') {
      setSearchedData(restructureData);
    }
    setFilterTex(e.target.value);
  }
  const handleOnclick = () => {
    setSearchedData(restructureData.filter(item => item.toroku_code.includes(filterText)))
  }

  return (
    <Wrapper className="col-8">
      <Search handleOnChange={handleOnChange} handleOnclick={handleOnclick} className="search-form" />
      <TablePaginationData columns={columns} data={searchedData || restructureData} loading={loading} />
      <Link href="/long-term/prepare">メンテナンス開始</Link>
    </Wrapper>
  );
}

export default ListPage;
