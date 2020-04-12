const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/layouts/index.js'),
  },
  {
    path: '/page-2',
    component: path.resolve('src/layouts/page-2.js'),
  },
  {
    path: '/404',
    component: path.resolve('src/layouts/404.js'),
  },
];
