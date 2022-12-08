import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://172.16.222.73:8050/service';


export default axios;