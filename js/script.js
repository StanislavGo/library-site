let burgerMenuBtn = document.querySelector(".burger-header");
let modalWindow = document.querySelector(".burger-menu");
let closeWindowBtn = document.querySelector(".close-window");
let registerMenuIsActive = false;
let modalWindowIsActive = false;

burgerMenuBtn.onclick = function() {
    modalWindow.style.top = 0;
    setTimeout(() => {
        modalWindowIsActive = true;
    }, 100)
}
closeWindowBtn.onclick = function() {
    modalWindow.style.top = -570 + 'px';
    setTimeout(() => {
        modalWindowIsActive = false;
    }, 100)
}



// REGISTER MENU HEADER

let iconRegBtn = document.querySelector('.header__icon-reg-btn');
iconRegBtn.onclick = function() {
    document.querySelector('.register-menu-header').style.display = "block";
    document.querySelector('.register-menu-header').style.opacity = 1;

    setTimeout(() => {
        registerMenuIsActive = true;
    }, 200);
}

document.querySelector('.burger-header img').onclick = function() {
    document.querySelector(".burger-menu").style.top = 0;
    document.querySelector('.register-menu-header').style.display = "none";
}

let openRegWindowModal = document.querySelector(".user-photo");
openRegWindowModal.onclick = function() {
    document.querySelector(".burger-menu").style.top = -570 + 'px';

    setTimeout(() => {
        document.querySelector('.register-menu-header').style.display = "block";
        document.querySelector('.register-menu-header').style.opacity = 1;
        registerMenuIsActive = true;
    }, 100);

}