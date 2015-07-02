function ConsoleMessage(pStatusMessage){
  this.statusMessage = pStatusMessage;
}

ConsoleMessage.prototype.showMessage = function (){
  console.log(this.statusMessage);
}
