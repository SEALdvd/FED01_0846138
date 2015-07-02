site.collections.Uploads = Backbone.Collection.extend({
    model: site.models.Upload,
    url: 'http://dannyvandalen.nl/api.php',
});
