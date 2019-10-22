// Async and Await approach
// this approach is built upon promises to make async code look like sync
// to catching errors in this approach using try-catch blocks

console.log('Before');
displayRepos(1);
console.log('After');


async function displayRepos (_user) {
    try {
        const user = await getUser(_user);
        const repos = await getRepositories(user.gitHubUserName);
        console.log(repos);
    }
    catch(err){
        console.log(err);
    }
    
}
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
