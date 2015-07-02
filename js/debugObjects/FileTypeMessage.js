function FileTypeMessage(statusMessage, fileType){
  ConsoleMessage.call(this,statusMessage);
  this.fileType = fileType;
}

FileTypeMessage.prototype = Object.create(ConsoleMessage.prototype);
FileTypeMessage.prototype.showFileMessageSucces = function() {
  if(this.fileType != '') {
    console.log("Er worden nu " + this.fileType + " bestanden weergeven.");
  } else {
    console.log("Alle bestanden worden nu weergeven.");
  }
};
FileTypeMessage.prototype.showFileMessageFailed = function() {
  if(this.fileType != '') {
    console.log("Er worden nu geen " + this.fileType + " bestanden weergeven.");
  } else {
    console.log("Geen bestanden worden nu weergeven.");
  }
};
