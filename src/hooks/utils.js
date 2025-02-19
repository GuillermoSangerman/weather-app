export function success(position) {
    doSomething(position.coords.latitude, position.coords.longitude);
  }
  
export function error() {
    alert("Posicion no valida.");
  }
  
export const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };
  

  