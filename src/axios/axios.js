import axios from 'axios'

export default axios.create({
  //~~~~~~~ for response status 200 ~~~~~~~~~~
  baseURL: 'https://react-quiz-3e9b0.firebaseio.com/'

  //~~~~~~~ for response status 404 ~~~~~~~~~~
  // baseURL: 'https://react-3e9b0.firebaseio.com/'

})

export function axiosResponseInterceptor() {
  const interceptor = axios.interceptors.response.use(
      response => response,
      error => {
          if (error.status !== 401) {
              return Promise.reject(error); // go to actions with 500 f.e.
          }

          axios.interceptors.response.eject(interceptor);

          return axios.post('/api/refresh', {
              'token': this._getToken('token') // some token
          }).then(response => {
              // save Token;
              error.response.config.headers['Authorization'] = 'Bearer ' + response.data.token;
              return axios(error.response.config);
          }).catch(error => {
              // destroy Token;
              this.router.push('/login');
              return Promise.reject(error);
          }).finally(axiosResponseInterceptor);
      }
  );
}