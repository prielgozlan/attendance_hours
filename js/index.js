let input_n = document.querySelector("#id_n");
let input_p = document.querySelector("#id_p");
let prgrem_n = document.querySelector("#id_p_n");
let prgrem_p = document.querySelector("#id_p_p");
let form = document.querySelector("#id_f");

let list1 = ["priel","natan"]
let list2 = [12345678,87654321]

window.onload = function(){
    checkAll()
}

function checkAll(){
    input_n.addEventListener("input",checkNmae);
    input_p.addEventListener("input",checkNmae);
    form.addEventListener("submit",subnitForm)

}



function checkNmae(){
    let input_n = document.querySelector("#id_n").value;
    let input_p = document.querySelector("#id_p").value;
    if (input_p.length <= 3){
        prgrem_p.innerHTML = "weak"
        
    }
    else if (input_p.length >= 3 && input_p.length <= 7){
        prgrem_p.innerHTML = "mddium"
    }
    else if (input_p.length >= 8){
        prgrem_p.innerHTML = "strong"
    }}





function subnitForm(e){
    e.preventDefault();
    let input_n = document.querySelector("#id_n").value;
    let input_p = document.querySelector("#id_p").value;
    let chack = NaN

    for (let i = 0 ; i < list1.length ; i++){
        if (list1[i] == input_n && list2[i] == input_p){
            window.open("../page2.html")
        }
    }
    if(list1.includes(input_n) == false){
    
        alert("no exists name user")
    }
    else if(list2.includes(input_p) == false){
    
        alert("password is wrong")
    }

}
