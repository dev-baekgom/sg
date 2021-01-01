function iecheck(){
  var agent = navigator.userAgent.toLowerCase();
  if (agent.indexOf("msie") != -1) {
    window.location.href = 'ie.html'
  }
}
