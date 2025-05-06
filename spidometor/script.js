let name = document.querySelector(".car_name");
let health= document.querySelector(".car_heart");
let drived = document.querySelector(".car_drived");
let fuel = document.querySelector(".car_fuel");
let door = document.querySelector(".door");
let engine = document.querySelector(".engine");
let light = document.querySelector(".light");
let speed = document.querySelector(".speed");
let number = document.querySelector(".overlay-text");

cef.emit('pwd:spidometritem',true,100);


cef.on('pwd:spidometritem', (carname,carhealth,cardrived,carfuel,cardoor,carengine,carlight,carspeed,carnumber) => {
    name.innerHTML=carname;
    health.innerHTML=Math.round(carhealth);
    drived.innerHTML=Math.round(cardrived);
    fuel.innerHTML=Math.round(carfuel);
    door.style.backgroundColor =(cardoor?"#53a6fa":"#fa5353");
    engine.style.backgroundColor =(carengine?"#53a6fa":"#fa5353");
    light.style.backgroundColor =(carlight?"#53a6fa":"#fa5353");
    speed.innerHTML=carspeed;
    number.innerHTML=carnumber;
        
});