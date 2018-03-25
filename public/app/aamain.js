
 import aboutUsComponent from "./aboutModule.js"
   

    var ApplicationRouter = Backbone.Router.extend({

        routes: {
            "": "home",
            "home": "home",
            "about": "about",
            "contact": "contact"
        },

        deselectliSection: function(){
            $('ul.liSection li').removeClass('active');
        },

        selectSection: function(sec){
            this.deselectliSection();
            $(sec).addClass('active');
        },

        hidePages: function(){
            $('div.pages').hide();
        },

        showPage: function(page){
            this.hidePages();
            $(page).show();
        },

        home: function() {
            this.showPage('div#home-page');
            this.selectSection('li.home-sec');
        },

        about: function() {
            this.showPage('div#about-page');
            this.selectSection('li.about-sec');
        },

        contact: function() {
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

        initialize: function(){
            this.router = new ApplicationRouter();

            Backbone.history.start();
        },

        displayHome: function(){
            this.router.navigate("home", true);
        },

        displayAbout: function(){

            this.router.navigate("about", true);
            var abModel = new aboutUsComponent.aboutPageModel();
            var aboutView = new aboutUsComponent.aboutPageView({model:abModel})
            aboutView.render();
        },

        displayContact: function(){

            this.router.navigate("contact", true);
        }

    });

    //load application
    new BackboneApp();
