import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // base: '/docs/',
  // publicPath: '/static/',
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
