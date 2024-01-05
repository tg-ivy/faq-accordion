const myButtons = document.getElementsByClassName('button');
const myParas = document.getElementsByClassName('para')

for (i = 0; i < myButtons.length; i++) {
    let currentPara = myParas[i]
    myButtons[i].addEventListener('click', function() {
        if(!this.dataset.clicked){
            this.setAttribute("data-clicked", "true");
            console.log('Open dropwdown');
            currentPara.style.display = "block";
            this.setAttribute("src", "./assets/images/icon-minus.svg")
        } else {
            this.removeAttribute("data-clicked");
            console.log("Close dropdown");
            currentPara.style.display = "none"
            this.setAttribute("src", "./assets/images/icon-plus.svg")
        }
    });
}