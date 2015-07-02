site.views.UploadListView = Backbone.View.extend({

    loadDebug: '',

    initialize: function() {
      site.events.on("uploadOverview", this.addBoxes, this);
    },

    render: function(model) {
      model.each(function (upload) {
        var uploadView = new site.views.UploadView({model: upload});
        this.$el.append(uploadView.render().el);
      }, this);
      return this;
    },

  // first step to add info in the box
  addBoxes: function() {
    new ConsoleMessage("Er is op een knop gedrukt.").showMessage();
    this.loadDebug = new FileTypeMessage("Ophalen gegevens van de gegevens.", this.model.file);
    this.loadUploads();
  },

  loadUploads: function(){
    this.loadDebug.showMessage();
    this.collection.fetch ({
      success: _.bind(this.loadFetch,this),
      error:_.bind(this.loadFetchFail,this),
      data: {
        tag: this.model.tag,
        file: this.model.file
      }
    });
  },

  loadFetch: function(model,response,options){
    this.$el.empty(this.$el.firstChild);
    this.render(model);
    this.loadDebug.showFileMessageSucces();
  },

  loadFetchFail: function(model,response,options){
    this.loadDebug.showFileMessageFailed();
  }

});
