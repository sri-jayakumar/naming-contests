import axios from 'axios';
import config from './config';

const instance = axios.create({
  baseURL: config.serverUrl,
  proxy: false
})
instance.get('/api/contests')
  .then(resp => console.log(resp.data))
  .catch(console.error)