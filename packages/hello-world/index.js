import HelloWorld from './src/main';

/* istanbul ignore next */
HelloWorld.install = function(Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;
