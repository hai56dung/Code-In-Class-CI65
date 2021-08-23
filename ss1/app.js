let btnOke = document.querySelector("#Choi");
let btnNo = document.querySelector("#Deo");


btnOke.addEventListener("click", function () {
    alert("Biết mà");
})

btnNo.addEventListener("mouseover", function (){
    document.querySelector("#return").classList.toggle("returnDao");
    
})
