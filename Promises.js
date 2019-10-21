/// Promise is an object that holds the eventual result of an asynchronous operation
// this operation may be succeded or get errors 
// the promise promises you that it will get the result of an asynchronous operation
// the returned object could be in three statues 
// 1- at the beginning it will be in (Pending) state
/// (pending) ----async operation ----> Fullfilled / Rejected(error)

// const p = new Promise((resolve, reject) => {
//     /// Kick off some async work
//     /// .....
//     setTimeout(()=>{
//         /// if success
//         resolve(1); // pending => resolved, fullfilled
//         // if rejected
//         reject(new Error('message')); // pending => rejected
//     },2000);
    
// });


/// Then what getting the result of async operation
// p.then(result => console.log('Result', result))
// .catch(err => console.log('Error',err.message));



console.log('Before');
getUser(1)
    .then(user => getRepositories(user.gitHubUserName))
    .then(repos => console.log('Repos ', repos))
    .catch(err => console.log(err.message));
console.log('After');



function getUser(id){
    return new Promise((resolve, reject) => {
        /// Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from database ....');
            /// callback when the result is ready this function will be called
            resolve({id: id, gitHubUserName: 'BenAlaa'});
            reject(new Error('Cannot get this user'));
        },2000);
    })
    
};

function getRepositories(userName){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Calling GitHub API....');
            /// callback when the result is ready this function will be called
            resolve(['repo 1', 'repo 2', 'repo 3']);
            reject(new Error('Cannot get repos for this user'))
        },2000);
    })
    
} 