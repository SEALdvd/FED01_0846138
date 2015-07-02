(function () {
    window.site = {};
    site.$ = jQuery;
    site.$document = site.$(document);
    site.views = {};
    site.collections = {};
    site.models = {};
    site.debugObjects = {};
    site.events = _.clone(Backbone.Events);
})();
