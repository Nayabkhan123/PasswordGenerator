const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lenghtNumber]");

const passwordDisplay= document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const clearbtn=document.querySelector(".clear")
const symbols = '`~!@#$%^&*()_-=+\|{}[];:/?>.<,';

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("grey");

//set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const max=inputSlider.max;
    const min=inputSlider.min;

    inputSlider.style.backgroundSize = ( (passwordLength-min)*100/(max*min))+"%100%"
}
function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
function generateRandomNumber(){
    return getRndInteger(0,9);
}
function generateLowercase(){
    return String.fromCharCode(getRndInteger(97,123));
}
function generateUppercase(){
    return String.fromCharCode(getRndInteger(65,91));
}
function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}
function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNum = true;
    if(symbolCheck.checked) hasSym = true;
    
    if(hasUpper&& hasLower&&(hasNum || hasSym)&&passwordLength>=8){
        setIndicator("#0f0");
    }
    else if
       ( (hasLower || hasUpper)&&(hasNum || hasSym)&&passwordLength>=6){
        setIndicator("#ff0");
       }
       else{
        setIndicator("#f00");
       }
    
}
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innertext = "copied";
    }
    catch(e){
        copyMsg.innertext= "failed";
    }
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}
function shufflePassword(array){
    //Fisher Yates Method
    for (let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j]=temp;  
    }
    let str="";
    array.forEach((el)=>(str+=el));
    return str;
}
function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
        checkCount++;
    });
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }   
}
allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})
inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})
copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
    copyContent();
})
generateBtn.addEventListener('click',()=>{
    if(checkCount==0)
    return;
    if(passwordLength<checkCount){
        passwordLength=checkCount;  
        handleSlider();
    }
    password="";

let funArr=[];
if(uppercaseCheck.checked)
funArr.push(generateUppercase);
if(lowercaseCheck.checked)
funArr.push(generateLowercase);
if(numberCheck.checked)
funArr.push(generateRandomNumber);
if(symbolCheck.checked)
funArr.push(generateSymbol);
for(let i=0;i<funArr.length;i++){
    password+=funArr[i]();
}
for(let i=0;i<passwordLength-funArr.length;i++){
    let randindex = getRndInteger(0,funArr.length);
    password+=funArr[randindex]();
}
password=shufflePassword(Array.from(password));
passwordDisplay.value = password;
calcStrength();

});

clearbtn.addEventListener('click',()=>{
    passwordDisplay.value="";
})