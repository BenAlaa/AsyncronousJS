

/////////// Patterns for Dealing with Asynchronous Code  //////////
//// 1. Callbacks
//// 2. Promises
//// 3. Async/await


 ///////////////  1- CallBacks ////////////

 console.log('Before');
 getUser(1,(user)=> {
     console.log('Returned User : ', user)
     // Get the repos
     getRepositories(user.gitHubUserName, (repos) =>{
         console.log('Repos', repos);
     })
});
 console.log('After');
///// note the nesting inside callback called CALLBACK HELL
/// and this make your code less readable
/// so the solution for this to convert the anynomous function to named functions




function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from database ....');
        /// callback when the result is ready this function will be called
        callback({id: id, gitHubUserName: 'BenAlaa'});

    },2000);
};

function getRepositories(userName, callback){
    setTimeout(()=>{
        console.log('Calling GitHub API....');
        /// callback when the result is ready this function will be called
        callback(['repo 1', 'repo 2', 'repo 3']);
    },2000)
}
