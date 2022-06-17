const myHeading = document.querySelector('h1');
myHeading.textContent = 'hello World!';



let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/deokry.jpg') {
        myImage.setAttribute('src','images/deokry2.png');
    } else {
        myImage.setAttribute('src','images/deokry.jpg');
    } 
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('당신의 이름을 입력해주세요');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla는 대단해요'+ myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla는 대단해요,' + storedName;
}

myButton.onclick = function(){
    setUserName();
}