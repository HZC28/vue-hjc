import axios from 'axios'
// let token = '';
// axios.defaults.withCredentials = false;
// axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
//   let user = JSON.parse(window.sessionStorage.getItem('access-user'));
//   if (user) {
//     token = user.token;
//   }
  config.headers.common['token'] = localStorage.getItem('token');
  // console.dir(config);
  return config;
}, (error) =>{
  console.log(73891)
  if (error.response.status === 401){
    console.log(13123)
    localStorage.removeItem('token');
  }
  // console.info("error: ");
  // console.info(error);
  return Promise.reject(error);
});
export default axios