import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import axios from 'axios';

const serverRender = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    proxy: false
  });
  return instance.get('/api/contests')
    .then(resp => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialContests={resp.data.contests} />
        ),
        initialData: resp.data.contests
      };
    });
};

export default serverRender;