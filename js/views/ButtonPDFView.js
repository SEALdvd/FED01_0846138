site.views.ButtonPDFView = Backbone.View.extend({

  events: {
    'click': "clickHandler"
  },

  clickHandler: function (e){
    e.preventDefault();
    this.model.file = 'pdf';
    site.events.trigger("uploadOverview");
  }

});
