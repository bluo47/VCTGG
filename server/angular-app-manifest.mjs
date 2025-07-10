
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/VCTGG/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/VCTGG"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 495, hash: '85bbea4f73ef1908e8db3e3ea7a956685a4dca6cd32191b8f28ea77be0bda83f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '57884f4dccf6a1a9117d8358d919f49c1da20d799b636cd405ac431047bed3bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21604, hash: '0b0caf6b6b10b955cc00368a7d37e4562215fa28fef55e18ddf5273763ca5a4b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
