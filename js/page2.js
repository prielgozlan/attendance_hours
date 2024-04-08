let list_date = JSON.parse(localStorage.getItem("list_date"));
if (!list_date) {
    list_date = []
}
let all_data = JSON.parse(localStorage.getItem("all_data"));
if (!all_data) {
    all_data = []
}
let list_date2 = JSON.parse(localStorage.getItem("list_date"));
if (!list_date2) {
    list_date2 = []
}
let all_data2 = JSON.parse(localStorage.getItem("all_data2"));
if (!all_data2) {
    all_data2 = []
}


let list_h = [];
let list_m = [];
let list_s = [];
let btn_1 = document.querySelector("#id_b1");
let btn_2 = document.querySelector("#id_b2");
let pr = document.querySelector("#id_p");

let datesList = []
window.onload = function(){
    refresh()
    refresh2()
}
function refresh(){
    for (let i = 0; i < all_data.length; i++) {
        pr.innerHTML += all_data[i]
    }
    
}
function refresh2(){
    for (let i = 0; i < all_data2.length; i++) {
        pr.innerHTML += all_data2[i]
    }
    
}
btn_1.addEventListener("click", appendEvent1);
btn_2.addEventListener("click", appendEventt2);

function appendEvent1() {
    let date = new Date()
    if (list_date.includes(date.getDate()) == false) {
        let all_data1 = `${date.getDate()}/${date.getMonth() + 1}    ${date.getHours()}.${date.getMinutes()}`
        list_date.push(date.getDate())
        all_data.push(all_data1)
        refresh()

        
    }

    localStorage.setItem("list_date", JSON.stringify(list_date))
    localStorage.setItem("all_data", JSON.stringify(all_data))
}
function appendEventt2() {
    let date = new Date()
    if (list_date2.includes(date.getDate()) == false) {
        let all_data3 = ` ${date.getHours()}.${date.getMinutes()}<br>`
        list_date2.push(date.getDate())
        all_data2.push(all_data3)
        refresh2()
        
    }

    
    localStorage.setItem("list_date2", JSON.stringify(list_date2))
    localStorage.setItem("all_data2", JSON.stringify(all_data2))




}