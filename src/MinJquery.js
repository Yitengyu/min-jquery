class MinJquery {
    constructor(selector) {
      this.nodeList = document.querySelectorAll(selector)
      this.length = this.nodeList.length
    }
  
    html(html) {
      return  html 
      && this.nodeList[0]
      && (this.nodeList[0].innerHTML = html)
      && this
      || this.nodeList[0]
      && this.nodeList[0].innerHTML
    }
  
    text() {
      return this.nodeList[0]
      && this.nodeList[0].textContent
    }
}

export default MinJquery
  