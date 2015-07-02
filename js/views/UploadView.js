site.views.UploadView = Backbone.View.extend({
  tagName:'li',

  events:{
    'click li':'clickHandler'
  },

  template: _.template( $("#matchTemplate").html() ),

  render:function(){
    this.$el.html(this.template(this.model.toJSON()) );
    return this;
  },

  clickHandler: function(e){
    e.preventDefault();
    var currentTarget = e.target;
    $(currentTarget).remove();
  }
});
