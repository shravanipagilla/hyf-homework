/* 1.Do the 3 steps below using promises and .then.
2.Do the 3 steps below using async/await
     
      The 3 steps:

1.Wait 3 seconds
2.After 3 seconds fetch some data from any api you like
3.Log out the data from the api
  
Which way do you prefer, the promise way or the async/await way?*/

const astronautApi = 'http://api.open-notify.org/astros.json';
const promise = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve();
    },3000);
});
promise.then(()=>{
    fetch(astronautApi)
    .then(response => response.json())
    .then((data)=>
    console.log(data))
});
async function astronaut(){
    try{
        await promise;
        const astroResponse = await fetch(astronautApi);
        const astronauts = await astroResponse.json();
        //console.log(astronauts.number);
        console.log(astronauts.people[0].name);
    }
    catch(error){
        console.log(error);
    }
}
astronaut();

// I prefer async/await way . actually both are fine  but i feel async/await lesscode and easy to read and write. 