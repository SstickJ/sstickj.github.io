"use strict"

console.log("Java Script loaded")

//Secret Code

let btnStart = document.getElementById("btn1")

let codigoinput = document.getElementById("input1")

function startA(){
    startB(codigoinput.value)
}

function startB(inputedCode){
    if (inputedCode != ''){
        console.log("Started")
        console.log(inputedCode)
    }else{
        console.log(inputedCode)
    }
}

btnStart.addEventListener("click", startA)
