site.views.ButtonALLView = Backbone.View.extend({

  events: {
    'click': "clickHandler"
  },

  clickHandler: function (e){
    e.preventDefault();
    this.model.file = '';
    site.events.trigger("uploadOverview");
  }

});
