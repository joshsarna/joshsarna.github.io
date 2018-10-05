/* global Vue, VueRouter, axios */

var MiddleMaps = {
  template: "#middle-maps",
  data: function() {
    return {
      message: "Middle Maps"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var AboutPage = {
  template: "#about-page",
  data: function() {
    return {
      message: "About Page"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var TIL = {
  template: "#til",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/til", component: TIL },
    { path: "/about", component: AboutPage },
    { path: "/middlemaps", component: MiddleMaps }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});