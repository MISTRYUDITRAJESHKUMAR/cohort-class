
class MyPromise {
    constructor(executerFn) {
        this._state = 'pending'
        this._successCallbacks = []
        this._errCollback = []
        this._finalyCallack = []
        executerFn(
            this.resolverFunction.bind(this),
            this.rejecterFunction.bind(this)
        )
    }

    then(cb) {
        this._successCallbacks.push(cb)
        return this;
    }

    catch(cb) {
        this._errCollback.push(cb)
        return this
    }
    finally(cb) {
        this._finalyCallack.push(cb)
        this._successCallbacks.push(cb)
    }


    resolverFunction() {
        this._state = "fillfiled"
        this._successCallbacks.forEach((cb) => cb())
    }

    rejecterFunction() {
        this._state = "rejected"
        this._errCollback.forEach((cb) => cb())
        this._finalyCallack.forEach((cb) => cb())

    }

}


function wait(second) {
    const a = new MyPromise((resolve, reject) => {
        setTimeout(() => resolve(), second * 1000)
    })
    return a
}

wait(5).then(() => console.log(`hellu`))
    .catch(() => console.log(`err ne bhai `))
    .finally(() => console.log(`ye to hoga bhai `))



