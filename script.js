const container = document.querySelector('.txt-type');
const texts = ['Bienvenido','Welcome','Benvenuto','Bem-vindo'];
let indexTexts = 0;
let indexString = 0;
let currentText = '';
let letter = '';
let deleting=false;

(function typeWriter(){
    let typeSpeed = 300;
    currentText = texts[indexTexts]
    letter = deleting? currentText.slice(0,--indexString):currentText.slice(0,++indexString)
    container.textContent=letter;
    if(indexTexts===texts.length)    indexTexts=0
    if(deleting)  typeSpeed/=2
    if(indexString==currentText.length){
        deleting=true
        typeSpeed=2500
    }else if(deleting && letter==''){
        typeSpeed=1000;
        deleting=false
        indexTexts++;
    }
    
    setTimeout(() => {
        typeWriter()
    }, typeSpeed);
}())
