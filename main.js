require('./style.css');
var Vue = require('vue');
var App = require('./app.vue');

new Vue({
  el: 'body',
  components: { App }
})


document.getElementById('app').innerHTML="webpack.config.js 配置打包-watch";
