// A mock function to mimic making an async request for data
import request from '~/services/request'

export async function loginApi(data) {
  return new Promise((resolve, reject) => {
    request({
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      url: '/user/sign_in',
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err);
      });
  });
}

export function logoutApi() {
  // eslint-disable-next-line
  console.log('Logout success');
}
