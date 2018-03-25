(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var _aboutModule = require("./aboutModule.js");

var ApplicationRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "home": "home",
        "about": "about",
        "contact": "contact"
    },

    deselectliSection: function deselectliSection() {
        $('ul.liSection li').removeClass('active');
    },

    selectSection: function selectSection(sec) {
        this.deselectliSection();
        $(sec).addClass('active');
    },

    hidePages: function hidePages() {
        $('div.pages').hide();
    },

    showPage: function showPage(page) {
        this.hidePages();
        $(page).show();
    },

    home: function home() {
        this.showPage('div#home-page');
        this.selectSection('li.home-sec');
    },

    about: function about() {
        this.showPage('div#about-page');
        this.selectSection('li.about-sec');
    },

    contact: function contact() {
        this.showPage('div#contact-page');
        this.selectSection('li.contact-sec');
    }

});

var BackboneApp = Backbone.View.extend({

    el: $('body'),
    template: false,
    events: {
        'click ul.liSection li.home-sec a': 'displayHome',
        'click ul.liSection li.about-sec a': 'displayAbout',
        'click ul.liSection li.contact-sec a': 'displayContact'
    },

    initialize: function initialize() {
        this.router = new ApplicationRouter();

        Backbone.history.start();
    },

    displayHome: function displayHome() {
        this.router.navigate("home", true);
    },

    displayAbout: function displayAbout() {

        this.router.navigate("about", true);
        var abModel = new _aboutModule.default.aboutPageModel();
        var aboutView = new _aboutModule.default.aboutPageView({ model: abModel });
        aboutView.render();
    },

    displayContact: function displayContact() {

        this.router.navigate("contact", true);
    }

});

//load application
new BackboneApp();

},{"./aboutModule.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
require("./css/aboutUsComponent.css");
var aboutPage = Mn.View.extend({
    template: '#hello-template',
    el: "#about-page"
});
var aboutUsModel = Backbone.Model.extend({
    defaults: {
        name: "Piyush Kanungo"
    }
});
exports.default = {
    aboutPageView: aboutPage,
    aboutPageModel: aboutUsModel
};

},{"./css/aboutUsComponent.css":3}],3:[function(require,module,exports){

},{}]},{},[1])

//# sourceMappingURL=public/app.js.map
