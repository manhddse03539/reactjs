import React, { useMemo, useState } from 'react';
import { Link } from 'react-navi';
import Wrapper from './listpage.styles';
import TablePaginationData from '~/components/TablePagination';
import Checkbox from '~/components/CheckBox';
import Search from '~/components/Search';

function ListPage() {
  const data = [
    { id: '1', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '2', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '3', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '4', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '5', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '6', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '7', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '8', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '9', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '10', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '11', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '12', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '13', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '14', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '15', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '16', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '17', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '18', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '19', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '20', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '21', toroku_code: 'A001', ippan: 'G1', shouhin: 'medicine1', kokuji: 'test1', kubun: 'test1', nissu: '3', kokuji_nichi: '2021/06/18' },
    { id: '22', toroku_code: 'A002', ippan: 'G2', shouhin: 'medicine3', kokuji: 'test4', kubun: 'test5', nissu: '3', kokuji_nichi: '2021/06/18' }
  ];
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
  ];

  const restructureData = useMemo(() => (
      data &&
      data.map(record => ({
        ...record,
        checkbox: (
          <Checkbox />
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
      <TablePaginationData columns={columns} data={searchedData || restructureData}/>
      <Link href="/long-term/prepare">メンテナンス開始</Link>
    </Wrapper>
  );
}

export default ListPage;
