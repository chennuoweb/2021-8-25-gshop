import Vue from 'vue';
// import moment from 'moment';

// Vue.filter('date-format', function(value, formatStr='YYY-MM-DD HH:mm:ss') {
//   return moment(value).format(formatStr);
// })
import format from 'date-fns/format';
Vue.filter('date-format', function(value, formatStr='yyyy-MM-dd HH:mm:ss') {
  return format(value, formatStr);
})