require("./css/aboutUsComponent.css");
var aboutPage = Mn.View.extend({
    template: '#hello-template',
    el:"#about-page"
})
var aboutUsModel= Backbone.Model.extend({
    defaults:{
        name:"Piyush Kanungo"
    }
})
export default  {
    aboutPageView: aboutPage,
    aboutPageModel: aboutUsModel
};