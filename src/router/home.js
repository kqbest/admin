//default
const def = resolve => {
  require.ensure(['../components/home.vue'], () => {
    resolve(require('../components/home.vue'));
  })
}

let home = [{
  path: '/',
  component: def,
  name: '首页'
}];

export default home;