import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'compressed',
  debug: true
}));
server.set('view engine', 'ejs');
import serverRender from './serverRender';
server.get('/', (req, res) => {
  serverRender()
    .then(({ initialData, initialMarkup }) => {
      res.render('index', {
        content: initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});