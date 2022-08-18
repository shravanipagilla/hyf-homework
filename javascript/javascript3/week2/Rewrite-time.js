
function getCurrentLocation(){
      const geolocationPromise = new Promise((resolve,reject) =>{
      navigator.geolocation.getCurrentPosition(
          (position)=>resolve(position), 
          (error) => reject(error)
      );
      });
      return geolocationPromise;
  }
  
  getCurrentLocation()
    .then((position) => {
      // called when the users position is found
      const lat = position.coords.latitude;
      const lon= position.coords.longitude;
      console.log(`Latitude: ${lat} °, Longitude: ${lon} °`);
    })
    .catch((error) => {
      // called if there was an error getting the users location
      console.log(error);
    });