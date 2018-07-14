const STATUS_PENDING = "pending"
const STATUS_FULLFILLED = "fullfilled"
const STATUS_REJECTED = "rejected"

function MyPromise(fn) {
    let state = STATUS_PENDING
    let success_fn, fail_fn

    function resolve(...args) {
        state = STATUS_FULLFILLED
        success_fn(...args)
    }
    function reject(...args) {
        state = STATUS_REJECTED
        fail_fn(...args)
    }
    this.then = function(succ_fn_arg, fail_fn_arg) {
        success_fn = succ_fn_arg
        fail_fn = fail_fn_arg
    }

    fn(resolve, reject)
}


export default MyPromise
