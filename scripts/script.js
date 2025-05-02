let health = document.querySelector('.playerInfo__params__heal__progress');
let armour = document.querySelector('.playerInfo__params__armor__progress');
let breath = document.querySelector(".playerInfo__params__eat__progress");
let pmoney = document.querySelector(".moneyCount");
let gcnt = document.querySelector(".gunCount");
let gcmnt = document.querySelector(".gunCountMax");
let gun = document.querySelector(".gunUse");

function updateArmenianDateTime() {
    const now = new Date();

    
    const timeFormatter = new Intl.DateTimeFormat('hy-AM', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });


    const dateFormatter = new Intl.DateTimeFormat('hy-AM', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    document.getElementById("time").innerText = timeFormatter.format(now);
    document.getElementById("date").innerText = dateFormatter.format(now);
}

setInterval(updateArmenianDateTime, 1000);
updateArmenianDateTime(); 



cef.emit('pwd:cefhud');
cef.emit("game:hud:setComponentVisible", "interface", false);





cef.on('pwd:huditem', (hp, max_hp, arm, hung, wanted, weapon, ammo, money) => {
    health.style.width = hp + '%';
    health.style.radius = max_hp + '%';
    armour.style.width = arm + '%';
    breath.style.width = hung + '%';
    gcnt.innerText = ammo;
    pmoney.innerText = money;

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
