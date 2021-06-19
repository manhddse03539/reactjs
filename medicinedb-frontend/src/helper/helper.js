export const getCurrentData = (data, currentPage, itemPerPage) => {
    const indexOfLastData = currentPage * itemPerPage;
    const indexOfFirstData = indexOfLastData - itemPerPage;
    return data && data.slice(indexOfFirstData, indexOfLastData);
}