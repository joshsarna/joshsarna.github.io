/* global Vue, VueRouter, axios */

var Actualize = {
  template: "#actualize",
  data: function() {
    return {
      message: "Actualize",
      gists: [],
      cheatsheets: []

    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var Gems = {
  template: "#gems",
  data: function() {
    return {
      message: "Gems",
      gems: [
        {
          name: "red_book",
          rubygemsUrl: "https://rubygems.org/gems/red_book",
          githubUrl: "https://github.com/joshsarna/red_book",
          description: "This gem prints random Lord of the Rings quotes to the rails server every time a route is hit. There are methods to generate random quotes at desire, as well, both from the books and from the movie.",
          currentVersion: "0.0.17"
        },
        {
          name: "utsless",
          rubygemsUrl: "https://rubygems.org/gems/utsless",
          githubUrl: "https://github.com/joshsarna/utsless",
          description: "I originally made this gem as a joke. The idea came when I was going over the differences between 'puts', 'p', and 'return' with students learning rails: return in methods, p when debugging, and never puts again. I created utsless, a gem that executes all puts statements as p statements. That is still the core of its functionality, but I've added other features that allow the user to print relevant information about objects, like their class trees.",
          currentVersion: "0.0.7"
        },
        {
          name: "fellowship",
          rubygemsUrl: "https://rubygems.org/gems/fellowship",
          githubUrl: "https://github.com/joshsarna/fellowship",
          description: "This is a set of tools for solving algorithm problems. I found myself using the same methods repeatedly while working my way through Project Euler, and I wanted to codify and DRY.",
          currentVersion: "0.0.5"
        }
      ]
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var Repertoire = {
  template: "#repertoire",
  data: function() {
    return {
      skills: [
        {
          category: "Ruby",
          specificSkills: [
            "Rails",
            "http gem",
            "Minitest",
            "RSpec",
            "Unirest",
            "bcrypt/devise"
          ]
        },
        {
          category: "JavaScript",
          specificSkills: [
            "ES6",
            "Vue",
            "React",
            "JSX",
            "Angular",
            "Node",
            "Vuex",
            "Ajax/Axios",
            "Babel",
            "Typescript",
            "jsDraw"
          ]
        },
        {
          category: "Python",
          specificSkills: [
            "Django",
            "NumPy"
          ]
        },
        {
          category: "SQL",
          specificSkills: [
            "PostgreSQL",
            "MySQL",
            "Postico",
            "SequelPro"
          ]
        },
        {
          category: "R",
          specificSkills: [
            "Tidyverse",
            "ggplot2",
            "dplyr",
            "tidytext"
          ]
        },
        {
          category: "PHP",
          specificSkills: [
            "Wordpress",
            "Local"
          ]
        },
        {
          category: "CSS",
          specificSkills: [
            "Bootstrap",
            "Bulma"
          ]
        },
        {
          category: "HTML",
          specificSkills: [
            "Emmet"
          ]
        },
        {
          category: "Team Dev",
          specificSkills: [
            "Pair Programming",
            "Git/Github",
            "OOP",
            "TDD",
            "Agile/Scrum",
            "Jira",
            "Confluence"
          ]
        },
        {
          category: "Local/Web Development",
          specificSkills: [
            "Visual Basic",
            "Webpack",
            "APIs",
            "AWS",
            "Docker",
            "Jenkins",
            "Heroku",
            "Pressable",
            "NGINX",
            "Bash",
            "Insomnia"
          ]
        },
        {
          category: "Math",
          specificSkills: [
            "Algorithms/Logic Problems",
            "Big O/Time efficiency",
            "MATLAB",
            "Wolfram Mathematica"
          ]
        }
      ],
      logics: [
        {
          title: "Project Euler",
          url: "https://github.com/joshsarna/practice_problems/tree/master/project_euler",
          description: "Coding challenges completed in Ruby",
          image_url: "https://projecteuler.net/profile/joshsarna.png"
        },
        {
          title: "Code Wars",
          url: "https://www.codewars.com/users/joshsarna",
          description: "Coding challenges completed in Ruby, JavaScript, and Python",
          image_url: ""
        },
        {
          title: "Exercism",
          url: "https://github.com/joshsarna/Exercism",
          description: "Coding challenges completed in Ruby, R, and Python",
          image_url: ""
        }
      ],
      syntaxes: [
        {
          title: "CSS Diner",
          url: "",
          description: "Practice with CSS Selectors"
        },
        {
          title: "SQL Bolt",
          url: "",
          description: "Practice with SQL Queries"
        }
      ]
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var PeriodicTable = {
  template: "#periodic-table",
  data: function() {
    return {
      message: "Periodic Table"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var BookStore = {
  template: "#book-store",
  data: function() {
    return {
      message: "Book Store"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

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
    { path: "/repertoire", component: Repertoire },
    { path: "/middle-maps", component: MiddleMaps },
    { path: "/book-store", component: BookStore },
    { path: "/periodic-table", component: PeriodicTable },
    { path: "/gems", component: Gems },
    { path: "/actualize", component: Actualize }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});