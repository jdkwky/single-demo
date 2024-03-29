import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'


Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
      render(h) {
          return h(App);
      },
      el: '#slave'
  },
});


export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

export default vueLifecycles;