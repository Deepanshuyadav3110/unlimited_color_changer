let randomColor = function(){
    let hex = '1234567890ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalId;
let startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
let stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);