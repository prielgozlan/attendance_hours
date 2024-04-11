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
let data_commen = JSON.parse(localStorage.getItem("data_commen"));
if (!data_commen) {
    data_commen = []
}



let btn_1 = document.querySelector("#id_b1");
let btn_2 = document.querySelector("#id_b2");
let pr = document.querySelector("#id_p");
let sum_hours = document.querySelector("#id_sum_hours");
let input1 = document.querySelector("#id_input1");
let h2_of_input = document.querySelector("#id_of_input");
let list_date_commen = document.querySelector("#id_commen_in");
let button_commen = document.querySelector("#id_but_commen");
let commen = document.querySelector("#id_commen_h2");
let sum_tutal = 0;


btn_1.addEventListener("click", appendEvent1);
btn_2.addEventListener("click", appendEventt2);
input1.addEventListener("input",selery);
button_commen.addEventListener("click",addTadaCommen);

window.onload = function(){
    refresh()

    
}
function refresh(){
    pr.innerHTML = ""
    sum_tutal = 0
    for (let i = 0; i < list_date.length; i++) {
        pr.innerHTML += `${list_date[i]} ${list_h1[i]}.${list_n1[i]} <button id="s${i}" class="box_b1" onclick="chengeBtnS(${i})">שינוי כניסה</button>`
        if (list_date2[i] == undefined){
            pr.innerHTML += ` <br>`
        }
        else if (list_date2[i] != undefined){
            let sum_time = (list_h2[i] * 60 + list_n2[i]) - (list_h1[i] * 60 + list_n1[i]) 
            let num_holp = 0
            if (sum_time > 59){
                num_holp = (sum_time % 60)/100
                sum_time = Math.trunc(sum_time/60)
                num_holp += sum_time
            }
            else if(sum_time < 60){
                num_holp = sum_time/100 
            }
            console.log(num_holp)
            sum_tutal += num_holp
            console.log(sum_tutal)
            pr.innerHTML += ` ${list_h2[i]}.${list_n2[i]} <button id="e${i}" class="box_b1" onclick="chengeBtnE(${i})">שינוי יציאה</button> סכ"ה שעות ${num_holp}<br>`
        }
        
    }
    let date = new Date()
    commen.innerHTML = ""
    sum_hours.innerHTML = `סה"כ שעות החודש:${sum_tutal.toFixed(2)}`
    for(let i = 0 ; i < data_commen.length ; i++){
        commen.innerHTML += `${date.getDate()}/${date.getMonth()} ${data_commen[i]} <button id="id_but_commen" class="box_b1">מחיקת הערה</button><br>`
    }
    
}


function appendEvent1() {
    let date = new Date()
    if (list_date.includes(`${date.getDate()}/${date.getMonth()}`) == false) {
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
        list_date2.push(`${date.getDate()}/${date.getMonth()}`)
        list_h2.push(date.getHours())
        list_n2.push(date.getMinutes())
        
        refresh()
        
    }

    localStorage.setItem("list_date2", JSON.stringify(list_date2))
    localStorage.setItem("list_h2", JSON.stringify(list_h2))
    localStorage.setItem("list_n2", JSON.stringify(list_n2))




}
function chengeBtnS(b){
    let date = new Date()
    list_h1[b] = date.getHours()
    list_n1[b] = date.getMinutes()

    localStorage.setItem("list_h1", JSON.stringify(list_h1))
    localStorage.setItem("list_n1", JSON.stringify(list_n1))
    refresh()

}
function chengeBtnE(b){
    let date = new Date()
    list_h2[b] = date.getHours()
    list_n2[b] = date.getMinutes()

    localStorage.setItem("list_h2", JSON.stringify(list_h2))
    localStorage.setItem("list_n2", JSON.stringify(list_n2))
    refresh()

}
function selery(){
    let input1 = document.querySelector("#id_input1").value;
    let display = input1 * sum_tutal
    h2_of_input.innerHTML = ` ${display.toFixed(2)}`
}
function addTadaCommen(){
    console.log("sbdh")    
    data_commen.push(list_date_commen.value)
    list_date_commen.value = ""
    localStorage.setItem("data_commen", JSON.stringify(data_commen))
    refresh()
}