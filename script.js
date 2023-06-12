let cInput=document.querySelector("#celcius > input")
let fInput=document.querySelector("#fahrenheit > input")
let btn=document.querySelector(".button button")

function Number(num){
    return Math.round(num*100)/100
}

cInput.addEventListener('input',function(){
    let cTemp=parseFloat(cInput.value)
    let fTemp=(cTemp*(9/5))+32
    fInput.value=Number(fTemp)
})

fInput.addEventListener('input',function(){
    let fTemp=parseFloat(fInput.value)
    let cTemp=(fTemp-32)*(5/9)
    cInput.value=Number(cTemp)
})
btn.addEventListener('click',()=>{
    cInput.value=""
    fInput.value=""
})
