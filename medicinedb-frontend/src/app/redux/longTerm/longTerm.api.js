// A mock function to mimic making an async request for data
// import request from '~/services/request'

export async function deleteApi(id) {
  // eslint-disable-next-line
  console.log(id);
  // return new Promise((resolve, reject) => {
  //   request({
  //     method: 'delete',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     url: `/data/${id}`,
  //   })
  //     .then((res) => resolve(res))
  //     .catch((err) => {
  //       reject(err);
  //     });
  // });
}

export async function editApi(id) {
  // eslint-disable-next-line
  console.log(id);
}

export function deleteMultipleApi(list) {
  // eslint-disable-next-line
  console.log(list);
}

export function editDaysMultipleApi(list) {
  // eslint-disable-next-line
  console.log(list);
}
