import MyPromise from "./utils/MyPromise"
import MinJquery from "./MinJquery"
window.$ = selector => new MinJquery(selector)

window.MyPromise = MyPromise

function timeout(ms) {
  return new MyPromise(function(resolve, reject) {
    setTimeout(resolve, ms, 'done');
  });
}
timeout(1000).then(function(val) {console.log(val)})

