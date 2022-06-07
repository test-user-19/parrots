let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/parrot-0.jpg') {
        myImage.setAttribute('src', 'images/parrot-1.jpg');
    } else {
        myImage.setAttribute('src', 'images/parrot-0.jpg');
    }
}

let changerUserButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Parrots are cool, ' + myName;
    }
}*/

function setUserName(myStorage) {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName(myStorage);
    } else {
        myStorage.setItem('name', myName);
        myHeading.textContent = 'Parrots are cool, ' + myName;
    }
}
 
/* if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Parrots are cool, ' + storedName;
}*/

/*let myStorage = localStorage;*/
let myStorage = sessionStorage;
let storedName = myStorage.getItem('name');

if(!storedName) {
    setUserName(myStorage);
} else {
    myHeading.textContent = 'Parrots are cool, ' + storedName;
}

changerUserButton.onclick = function() {
    setUserName(myStorage);
}