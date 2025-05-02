let health = document.querySelector('.playerInfo__params__heal__progress');
let armour = document.querySelector('.playerInfo__params__armor__progress');
let breath = document.querySelector(".playerInfo__params__eat__progress");
let pmoney = document.querySelector(".moneyCount");
let gcnt = document.querySelector(".gunCount");
let gcmnt = document.querySelector(".gunCountMax");
let gun = document.querySelector(".gunUse");



cef.on("game:hud:newVisibleState", (success) => {
	cef.hide(!success);
});

cef.emit("game:data:pollPlayerStats", true, 50);
cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    health.style.width = hp + '%';
    health.style.radius = Math.min(max_hp,100) + '%';
    armour.style.width = arm + '%';
    breath.style.width = breath + '%';
    gcnt.style.textContent = ammo;
    gcmnt.style.textContent = max_ammo;
    pmoney.innerHTML = money;

    gun.src = "./image/guns/" + weapon + ".png";

    if(wanted ==0){
        for(let i = 1;i<=6;++i){
            let star = document.querySelector(`.star${i}`);
            star.src = "./image/star-none.png";
        }
    } else{
        for(let i = 1;i<=wanted;++i){
            let star = document.querySelector(`.star${i}`);
            star.src = "./image/star.png";
        }
    }
    
    
});
