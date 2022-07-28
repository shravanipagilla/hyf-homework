//Create a function that has one parameter: resolveAfter. 
//Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
function resolveAfterSetTime(resolveAfter){
    const promise = new Promise((resolve, reject) =>{
        console.log("i am using first time");
        const resolveAfterSecs = resolveAfter*1000;
        setTimeout(()=>{
            resolve();
         }, resolveAfterSecs);
    });
    return promise;
}

//using promise
resolveAfterSetTime(8)
.then(() => {
    console.log("I am called asynchronously"); 
    // logged out after 8 seconds
  });
  // using it with  async/await
  async function resolveAfterSetTimeUsingAsyncAwait(){
      try {
          await resolveAfterSetTime(2);
          // loggedout after 2 seconds
          console.log("i am called asynchronously using async await");
      } catch(error){
          console.log(error);
      }
  }
  resolveAfterSetTimeUsingAsyncAwait();