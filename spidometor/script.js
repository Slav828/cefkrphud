let name = document.querySelector(".car_name");
let health= document.querySelector(".car_heart");
let drived = document.querySelector(".car_drived");
let fuel = document.querySelector(".car_fuel");
let door = document.querySelector(".door");
let engine = document.querySelector(".engine");
let light = document.querySelector(".light");
let speed = document.querySelector(".speed");
let number = document.querySelector(".overlay-text");



cef.emit('pwd:cefspidometr',true,50);
cef.emit('pwd:spidometritem',true,50);


cef.on('pwd:spidometritem', (carname,carhealth,cardrived,carfuel,cardoor,carengine,carlight,carspeed,carnumber) => {
    name.innerHTML=carname;
    health.innerHTML=carhealth;
    drived.innerHTML=cardrived;
    fuel.innerHTML=carfuel;
    door.innerHTML=cardoor;
    engine.innerHTML=carengine;
    light.innerHTML=carlight;
    speed.innerHTML=carspeed;
    number.innerHTML=carnumber;
    
 
        
});