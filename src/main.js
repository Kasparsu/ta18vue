import Vue from 'vue';
import App from './App.vue';

//import('bulma');
require('bulma');

Vue.component('app', App);

let app = new Vue({
    el: '#app'
});