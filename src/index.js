function minJquery(selector) {
  console.log(selector)
  this.nodeList = document.querySelectorAll(selector)
  console.log(document.querySelectorAll(selector))
}

window.$ = selector => new minJquery(selector)
