const ptanai = (fn, delay) => {
    let myid = null
    return (...args) => {
        setTimeout(() => {
            fn(...args)
        }, delay)
    }
}