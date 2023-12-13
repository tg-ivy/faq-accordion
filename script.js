// Document declarations

let buttonOne = document.getElementById('btn1');
let buttonTwo = document.getElementById('btn2');
let buttonThree = document.getElementById('btn3');
let buttonFour = document.getElementById('btn4');

let paraOne = document.getElementById('para1');
let paraTwo = document.getElementById('para2');
let paraThree = document.getElementById('para3');
let paraFour = document.getElementById('para4');


// Event listeners

buttonOne.addEventListener('click', function() {
    if(!this.dataset.clicked){
        this.setAttribute("data-clicked", "true");
        console.log('Open dropwdown');
        paraOne.style.display = "block";
        this.setAttribute("src", "./assets/images/icon-minus.svg")
    } else {
        this.removeAttribute("data-clicked");
        console.log("Close dropdown");
        paraOne.style.display = "none"
        this.setAttribute("src", "./assets/images/icon-plus.svg")
    }
});

buttonTwo.addEventListener('click', function() {
    if(!this.dataset.clicked){
        this.setAttribute("data-clicked", "true");
        console.log('Open dropwdown');
        paraTwo.style.display = "block";
        this.setAttribute("src", "./assets/images/icon-minus.svg")
    } else {
        this.removeAttribute("data-clicked");
        console.log("Close dropdown");
        paraTwo.style.display = "none"
        this.setAttribute("src", "./assets/images/icon-plus.svg")
    }
});

buttonThree.addEventListener('click', function() {
    if(!this.dataset.clicked){
        this.setAttribute("data-clicked", "true");
        console.log('Open dropwdown');
        paraThree.style.display = "block";
        this.setAttribute("src", "./assets/images/icon-minus.svg")
    } else {
        this.removeAttribute("data-clicked");
        console.log("Close dropdown");
        paraThree.style.display = "none"
        this.setAttribute("src", "./assets/images/icon-plus.svg")
    }
});

buttonFour.addEventListener('click', function() {
    if(!this.dataset.clicked){
        this.setAttribute("data-clicked", "true");
        console.log('Open dropwdown');
        paraFour.style.display = "block";
        this.setAttribute("src", "./assets/images/icon-minus.svg")
    } else {
        this.removeAttribute("data-clicked");
        console.log("Close dropdown");
        paraFour.style.display = "none"
        this.setAttribute("src", "./assets/images/icon-plus.svg")
    }
});

// I want to get these event listeners down to just 1 inside a forEach thats looping through a QuerySelctorAll nodelist
// However I cant quite figure out what I'd replace para1, para2, etc. with inside the listener. Is a way of accessing a parent's sibling possible via the 'this' keyword?
// perhaps an if else statement that checks 'this' for the nodelist number i.e if this == nodlelist [0], then paraOne.style.display = "block";
//ORrrrrrrrr have a second nodelist for paras, and instead of forEach, use regular for and use buttonList [i] and paraList[i]??? will try soon