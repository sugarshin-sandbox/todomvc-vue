import Vue from 'vue';
import App from './App.vue';

const main = () => {
  (window as any).__app__ = new Vue({
    el: '#root',
    components: { App },
    template: '<App />',
  });
};

main();
