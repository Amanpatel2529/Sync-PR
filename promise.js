
//This example shows the condition when a rejected promise is handled by second function of then method
let promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})

promise
    .then(function (successMessage) {
        console.log(successMessage);
    }, function (errorMessage) {
        //error handler function is invoked 
        console.log(errorMessage);
    }); 
