site.views.ButtonWORDView = Backbone.View.extend({

  events: {
    'click': "clickHandler"
  },

  clickHandler: function (e){
    e.preventDefault();
    this.model.file = 'word';
    site.events.trigger("uploadOverview");
  }

});
