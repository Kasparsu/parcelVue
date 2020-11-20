import Vue from 'vue/dist/vue.common.js';
import 'bulma';

import App from "./components/App";

Vue.component('app', App);

let App = new Vue({
    el: '#app'
})
