const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);
const optimizeNumber = (n) => (n + "").length >= 2 ? n : "0" + n;

const data = [];
const colors = ["#CDB9D6aa", "#02A298aa", "#A3D8CFaa", "#F0B2ABaa", "#73615Eaa", "#CDB9D6aa", "#02A298aa", "#A3D8CFaa", "#F0B2ABaa"];
let n = Math.floor(getNumber(61, 6) / 6) * 6;

while(n--) {
    data.push(getNumber(100))
}

const box = document.querySelector(".box");
box.innerHTML = "<div class=\"card\"></div>"
for (let val of data) {
    box.innerHTML += `<div 
        class="card" 
        style="background-color: ${colors[getNumber(colors.length - 1)]}"
    >${optimizeNumber(val)}</div>`;
}

function showTime(day = new Date(2023, 1, 7, 23)) {
    let now = new Date(); 
    let d, h, m, s;
    let time = Math.floor((day - now) / 1000);
    m = Math.floor(time / 60);
    s = time - m * 60;
    h = Math.floor(m / 60);
    m -= h * 60;
    d = Math.floor(h / 24);
    h -= d * 24;
    return `${d} д. ${h} ч. ${m} мин. ${s} сек.`
}
box.firstElementChild.innerText = `До окончания осталось ${showTime()}`;
setInterval(function(){
    box.firstElementChild.innerText = `До окончания осталось ${showTime()}`;
}, 1000)
Footer
