(function () {
    site.init = function () {

      // models & collections
      var upload = new site.models.Upload();
      var settings = new site.models.Settings();
      var uploads = new site.collections.Uploads();

      // views
      new site.views.ButtonPDFView({el:"#PDFclicker", model: settings});
      new site.views.ButtonWORDView({el:"#WORDclicker", model: settings});
      new site.views.ButtonALLView({el:"#ALLclicker", model: settings});
      new site.views.UploadView({el:"#box", model: upload});
      new site.views.UploadListView({el:"#box", collection: uploads, model: settings});
    };

    // Document ready
    site.$(site.init);

})();
