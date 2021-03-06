// Activity: Identify order of exeution of the callback functions

/* Solution:
nextTick 1
nextTick 2
promise 1
promise 2
promise 3
promise 4
nextTick 3
immediate 1
*/

setImmediate(function immediate1() { console.log('immediate 1')})

Promise.resolve()
    .then(function p1() { console.log('promise 1')})

process.nextTick(function n1() { console.log('nextTick 1')})

Promise.resolve()
    .then(function p2() {console.log('promise 2')})

process.nextTick(function n2() { console.log('nextTick 2')})

Promise.resolve()
    .then(function p3() {
        console.log('promise 3')
        process.nextTick(function n3() { console.log('nextTick 3')})
    })
    
Promise.resolve()
    .then(function p4() { console.log('promise 4')})
