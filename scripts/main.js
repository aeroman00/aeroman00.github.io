let myImage = document.querySelector('img');
myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox.jpg');
    } else {
        myImage.setAttribute('src','images/firefox-icon.png');
    }
    
})

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Veuillez saisir votre nom');
    localStorage.setItem('nom',myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozillaest cool, ' + storedName;
}

myButton.addEventListener('click',function(){
    setUserName();
});
/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, le monde !';
/*
let iceCream = 'chocolat';
/*
if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}

document.querySelector('html').addEventListener('click', function(){
    alert('Arrete de cliquer !!');
});
*/