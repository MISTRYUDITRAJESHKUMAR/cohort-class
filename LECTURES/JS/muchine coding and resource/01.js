function ptanahi(fn, delay) {
    let myid;
    return function (...args) {
        clearTimeout(myid)
        myid = setTimeout(() => {
            console.log('udit');
            fn.call(this, args)
        }, delay)
    }
}

function greet(name) {
    console.log(`hello${name}`);

}
ptanahi(() => greet("udit"), 2000)
ptanahi(greet("udit"), 2000)
ptanahi(greet("udit"), 2000)
