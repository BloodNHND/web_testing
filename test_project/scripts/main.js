/*//Not errors this simple bag editor
var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello Javascript!";
*/
//Слайд из 2 изображений
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Logotipsvg.png'){
        myImage.setAttribute('src', 'images/google.jpg');
    }else{
        myImage.setAttribute('src','images/Logotipsvg.png');
    }
}

//Персонализированное привествие
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Введите свое имя.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozila is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Mozila is cool,  " + storedName;
}
myButton.onclick = function(){
    setUserName();
}