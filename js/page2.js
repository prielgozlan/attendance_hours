let list_date = JSON.parse(localStorage.getItem("list_date"));
if (!list_date) {
    list_date = []
}
let list_date2 = JSON.parse(localStorage.getItem("list_date2"));
if (!list_date2) {
    list_date2 = []
}
let list_h1 = JSON.parse(localStorage.getItem("list_h1"));
if (!list_h1) {
    list_h1 = []
}
let list_n1 = JSON.parse(localStorage.getItem("list_n1"));
if (!list_n1) {
    list_n1 = []
}
let list_h2 = JSON.parse(localStorage.getItem("list_h2"));
if (!list_h2) {
    list_h2 = []
}
let list_n2 = JSON.parse(localStorage.getItem("list_n2"));
if (!list_n2) {
    list_n2 = []
}



let btn_1 = document.querySelector("#id_b1");
let btn_2 = document.querySelector("#id_b2");
let pr = document.querySelector("#id_p");


window.onload = function(){
    refresh()
    
}
function refresh(){
    pr.innerHTML = ""
    
    for (let i = 0; i < list_date.length; i++) {
        pr.innerHTML += `${list_date[i]} ${list_h1[i]}.${list_n1[i]} <button id="id_b2" class="box_b1">שינוי כניסה</button>`
        if (list_h2[i] == undefined){
            pr.innerHTML += ""
        }
        else{
            let sum_time_h = list_h2 - list_h1
            let sum_time_n = list_n2 - list_n1
            pr.innerHTML += ` ${list_h2[i]}.${list_n2[i]} <button id="id_b2" class="box_b1">שינוי יציאה</button> סה"כ שעות: ${sum_time_h} סה"כ דקות: ${sum_time_n}`
        }
        
    }
    
}
btn_1.addEventListener("click", appendEvent1);
btn_2.addEventListener("click", appendEventt2);

function appendEvent1() {
    let date = new Date()
    if (list_date.includes(`${date.getDate()}/${date.getMonth()}`) == false) {
        // let all_data1 = `${date.getDate()}/${date.getMonth() + 1}    ${date.getHours()}.${date.getMinutes()}    <button id="id_b2" class="box_b1">שינוי כניסה</button>`
        list_date.push(`${date.getDate()}/${date.getMonth()}`)
        list_h1.push(date.getHours())
        list_n1.push(date.getMinutes())
        refresh()

        
    }

    localStorage.setItem("list_date", JSON.stringify(list_date))
    localStorage.setItem("list_h1", JSON.stringify(list_h1))
    localStorage.setItem("list_n1", JSON.stringify(list_n1))
}
function appendEventt2() {
    let date = new Date()
    if (list_date2.includes(`${date.getDate()}/${date.getMonth()}`) == false) {
        // let all_data3 = ` ${date.getHours()}.${date.getMinutes()}  <button id="id_b2" class="box_b1">שינוי יציאה</button>
        // <h2 id="id_p"></h2><br> `
        list_date2.push(`${date.getDate()}/${date.getMonth()}`)
        list_h2.push(date.getHours())
        list_n2.push(date.getMinutes())
        
        refresh()
        
    }

    localStorage.setItem("list_date2", JSON.stringify(list_date2))
    localStorage.setItem("list_h2", JSON.stringify(list_h2))
    localStorage.setItem("list_n2", JSON.stringify(list_n2))




}