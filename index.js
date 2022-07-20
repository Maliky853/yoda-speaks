const txtInput = document.querySelector("#txtInput")
const btnTranslate = document.querySelector("#btnTranslate")
const outputDiv = document.querySelector("#outputDiv")

let url = "https://api.funtranslations.com/translate/yoda.json"

function translationalUrl(text){
    return url + "?" + "text=" + text
}
function clickHandler(){
    console.log("clicked")
    console.log(`input : ${txtInput.value}`)
}
btnTranslate.addEventListener("click",function clickHandler(){
    fetch(translationalUrl(txtInput.value))
    .then((res)=>res.json())
    .then(function(json){
    return outputDiv.innerText = json.contents.translated
   
 })
.catch((error)=>{
    console.log(error)
})
})
clickHandler()