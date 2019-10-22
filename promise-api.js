/// using this is usefull when creating unit test 
/// because we put senarios for the test


//// create Promise that already resolved
// const p =Promise.resolve({id:1});
// p.then(result => console.log(result));



///// Create Promise that already rejected
// const p =Promise.reject(new Error('reason for rejection....'));
// p.catch(err => console.log(err.message));




////////////// ------ Parallel Promises ------------ ///////////////
/// when you call multiple async operations on the same time
/// and after they are ready you need to do something


const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async operation 1.....');
        resolve(1);
        reject(new Error('Operation 1 Rejected ....'));
    },2000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async operation 2.....');
        resolve(2);
        reject(new Error('Operation 2 Rejected ....'));
    },2000);
});

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message));


/// note that if one operation is rejected the whole process will be rejected


// if you need to do something as soon as the first operation complete
// Promise.race([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log(err.message));