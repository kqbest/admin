//pages
const page1 = resolve => {
  require.ensure(['../components/page1.vue'], () => {
    resolve(require('../components/page1.vue'));
  })
}
const page2 = resolve => {
  require.ensure(['../components/page2.vue'], () => {
    resolve(require('../components/page2.vue'));
  })
}
const page3 = resolve => {
  require.ensure(['../components/page3.vue'], () => {
    resolve(require('../components/page3.vue'));
  })
}
const page4 = resolve => {
  require.ensure(['../components/page4.vue'], () => {
    resolve(require('../components/page4.vue'));
  })
}

let pages = [{
  path: '/',
  component: page1,
  name: 'page1'
},{
  path: '/page2',
  component: page2,
  name: 'page2'
},{
  path: '/page3',
  component: page3,
  name: 'page3'
},{
  path: '/page4',
  component: page4,
  name: 'page4'
}];

export default pages;