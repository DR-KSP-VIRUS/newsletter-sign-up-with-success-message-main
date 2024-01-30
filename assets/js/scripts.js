"use strict";

const btn = document.getElementById("btn-subscribe");
const btnClose = document.getElementById("btn-close");
const results = document.getElementById("results");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const email = document.getElementById("id_email");
    const errorText = document.getElementById("error_text");
    if(email.value && !`${email.value}`.includes("@")){
        email.classList.add("error");
        errorText.classList.add('error-text');
        errorText.innerText =`Valid email required`;
    }else if(`${email.value}`.includes("@")){
        email.classList.remove("error");
        errorText.classList.remove('error-text');
        errorText.innerText =``;
        result.innerText = `${email.value}`;
        results.style.display = "flex";
    }

});

btnClose.addEventListener("click", () => {
    results.style.display = "none";
})

window.onclick = function(e){
    if (e.target === results){
        results.style.display = "none";
    }
}
