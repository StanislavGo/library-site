// SLIDER FOR PC VERSION OF THE SITE

let pagination1 = document.querySelector("#pagination1");
let pagination2 = document.querySelector("#pagination2");
let pagination3 = document.querySelector("#pagination3");

let sliderBlock = document.querySelector(".slider__images");

pagination1.onclick = function() {
    sliderBlock.style.left = "0px";
    pagination1.classList.add("active");
    pagination2.classList.remove("active");
    pagination3.classList.remove("active");
}

pagination2.onclick = function() {
    sliderBlock.style.left = "-475px";
    pagination1.classList.remove("active");
    pagination2.classList.add("active");
    pagination3.classList.remove("active");
}

pagination3.onclick = function() {
    sliderBlock.style.left = "-950px"
    pagination1.classList.remove("active");
    pagination2.classList.remove("active");
    pagination3.classList.add("active");
}



// SLIDER FOR MOBILE VERSION OF THE SITE


let pagMob1 = document.querySelector("#pagination-mob-1");
let pagMob2 = document.querySelector("#pagination-mob-2");
let pagMob3 = document.querySelector("#pagination-mob-3");
let pagMob4 = document.querySelector("#pagination-mob-4");
let pagMob5 = document.querySelector("#pagination-mob-5");

let arrowLeft = document.querySelector(".vector-left");
let arrowRight = document.querySelector(".vector-right");

let sliderMobile = document.querySelector(".slider-mobile ul");
let clickOnRightButton = 0;
let i = 1;

pagMob1.onclick = function() {
    let pags = document.querySelectorAll(".pagination-slide");
        pags.forEach(el => {
            el.classList.remove("active");
    })

    sliderMobile.style.left = "0px";
    pagMob1.classList.add("active");
    i = 1;
    clickOnRightButton = 0;
}

pagMob2.onclick = function() {
    let pags = document.querySelectorAll(".pagination-slide");
        pags.forEach(el => {
            el.classList.remove("active");
    })

    sliderMobile.style.left = "-500px";
    pagMob2.classList.add("active");
    i = 2;
    clickOnRightButton = 1;
}

pagMob3.onclick = function() {
    let pags = document.querySelectorAll(".pagination-slide");
        pags.forEach(el => {
            el.classList.remove("active");
    })

    sliderMobile.style.left = "-1000px";
    pagMob3.classList.add("active");
    i = 3;
    clickOnRightButton = 2;
}

pagMob4.onclick = function() {
    let pags = document.querySelectorAll(".pagination-slide");
        pags.forEach(el => {
            el.classList.remove("active");
    })

    sliderMobile.style.left = "-1500px";
    pagMob4.classList.add("active");
    i = 4;
    clickOnRightButton = 3;
}

pagMob5.onclick = function() {
    let pags = document.querySelectorAll(".pagination-slide");
        pags.forEach(el => {
            el.classList.remove("active");
    })

    sliderMobile.style.left = "-2000px";
    pagMob5.classList.add("active");
    i = 5;
    clickOnRightButton = 4;
}

let buttonIsChoose = 1;

if (buttonIsChoose == 1) {
    sliderMobile.style.left = "0px";
}

arrowRight.onclick = function() {
    if (clickOnRightButton < 4) {
        clickOnRightButton++;
        i++;
        buttonIsChoose++;

        if (buttonIsChoose == 1) {
            sliderMobile.style.left = "0px";
        } else if (buttonIsChoose == 2) {
            sliderMobile.style.left = "-500px";
        } else if (buttonIsChoose == 3) {
            sliderMobile.style.left = "-1000px";
        } else if (buttonIsChoose == 4) {
            sliderMobile.style.left = "-1500px";
        } else if (buttonIsChoose == 5) {
            sliderMobile.style.left = "-2000px";
        }

        let pags = document.querySelectorAll(".pagination-slide");
        pags.forEach(el => {
            el.classList.remove("active");
        })

        let nextPagId = "pagination-mob-" + i;
        document.getElementById(nextPagId).classList.add("active");

        arrowRight.disabled = true;
        
        setTimeout(() => {
            arrowRight.disabled = false;
        }, 330);
    }
}

arrowLeft.onclick = function() {
    if (clickOnRightButton != 0) {
        // sliderMobile.style.left = sliderMobile.offsetLeft + 292 + "px";
        clickOnRightButton--;
        i--;
        buttonIsChoose--;

        if (buttonIsChoose == 1) {
            sliderMobile.style.left = "0px";
        } else if (buttonIsChoose == 2) {
            sliderMobile.style.left = "-500px";
        } else if (buttonIsChoose == 3) {
            sliderMobile.style.left = "-1000px";
        } else if (buttonIsChoose == 4) {
            sliderMobile.style.left = "-1500px";
        } else if (buttonIsChoose == 5) {
            sliderMobile.style.left = "-2000px";
        }

        let pags = document.querySelectorAll(".pagination-slide");
        pags.forEach(el => {
            el.classList.remove("active");
        })

        let nextPagId = "pagination-mob-" + i;
        document.getElementById(nextPagId).classList.add("active");

        arrowLeft.disabled = true;

        setTimeout(() => {
            arrowLeft.disabled = false;
        }, 330);
    }
}





// SLIDER FOR FAVORITES BLOCK

let winterBtn = document.querySelector("#input-winter");
let springBtn = document.querySelector("#input-spring");
let summerBtn = document.querySelector("#input-summer");
let autumnBtn = document.querySelector("#input-autumn");
let allSeasons = document.querySelectorAll(".favorites-items .favorites");
let labels = document.querySelectorAll(".input-block .label-block");

let seasonsBtns = document.querySelectorAll(".input-block input");

winterBtn.onclick = function() {
    seasonsBtns.forEach(e => {
        e.checked = false;
    })
    winterBtn.checked = true;

    allSeasons.forEach(el => {
        el.style.display = "none";
    })

    labels.forEach(e => {
        e.classList.remove("active");
    })
    
    let b = document.querySelector("#lab-1");
    b.classList.add("active");
    let s = document.querySelector('.favorite-season-is-winter');
    s.style.display = "block";
}

springBtn.onclick = function() {
    seasonsBtns.forEach(e => {
        e.checked = false;
    })
    springBtn.checked = true;

    allSeasons.forEach(el => {
        el.style.display = "none";
    })

    labels.forEach(e => {
        e.classList.remove("active");
    })
    
    let b = document.querySelector("#lab-2");
    b.classList.add("active");
    let s = document.querySelector('.favorite-season-is-spring');
    s.style.display = "block";
}

summerBtn.onclick = function() {
    seasonsBtns.forEach(e => {
        e.checked = false;
    })
    summerBtn.checked = true;

    allSeasons.forEach(el => {
        el.style.display = "none";
    })

    labels.forEach(e => {
        e.classList.remove("active");
    })
    
    let b = document.querySelector("#lab-3");
    b.classList.add("active");
    let s = document.querySelector('.favorite-season-is-summer');
    s.style.display = "block";
}

autumnBtn.onclick = function() {
    seasonsBtns.forEach(e => {
        e.checked = false;
    })
    autumnBtn.checked = true;

    allSeasons.forEach(el => {
        el.style.display = "none";
    })

    labels.forEach(e => {
        e.classList.remove("active");
    })
    
    let b = document.querySelector("#lab-4");
    b.classList.add("active");
    let s = document.querySelector('.favorite-season-is-autumn');
    s.style.display = "block";
}