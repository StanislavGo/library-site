function openRegisterMenu() {
    document.querySelector(".welcome__register-menu").classList.add("active");
    document.querySelector(".overlay").style.display = "block";
    document.querySelector('.register-menu-header').style.opacity = 0.1;
    document.querySelector(".logIn__menu").style.top = "-50%";
        
    setTimeout(() => {
        document.querySelector('.register-menu-header').style.display = "none";
        registerMenuIsActive = false;
    }, 190);

    document.body.style.overflow = "hidden";
    document.querySelector(".overlay__forLogInMenu").style.display = "none";
}

function closeRegisterMenu() {
    document.querySelector(".welcome__register-menu").style.opacity = "0.1";
    // document.querySelector(".welcome__register-menu").style.top = "155px";
    document.body.style.overflow = "auto";
    document.querySelector(".overlay").style.display = "none";

    setTimeout(() => {
        document.querySelector(".welcome__register-menu").classList.remove("active");
        document.querySelector(".welcome__register-menu").style.opacity = "1";
        // document.querySelector(".welcome__register-menu").style.top = "175px";
    }, 200)
}

document.querySelector('.header__register').addEventListener("click", openRegisterMenu);
document.querySelector(".overlay").addEventListener("click", closeRegisterMenu);
document.querySelector(".welcome__register-menu svg").addEventListener("click", closeRegisterMenu);

document.querySelector(".library-cards .sing-up-btn").addEventListener("click", openRegisterMenu);

function checkPasswordLength() {
    let password = document.getElementById("password");
    let errorSpan = document.getElementById("password-length-error");

    if (password.value.length < 8) {
        errorSpan.textContent = "Password is too short!";
        document.querySelector(".welcome__register-menu").style.height = "395px"
        errorSpan.style.display = "inline";
    } else {
        errorSpan.style.display = "none";
        document.querySelector(".welcome__register-menu").style.height = "382px"
    }
}

function clearError() {
    if (document.querySelector("#password").value.length == 0) {
        let errorSpan = document.getElementById("password-length-error");
        errorSpan.style.display = "none";
        document.querySelector(".welcome__register-menu").style.height = "382px"
    }
}

function afterRegister() {
    document.querySelector('.second-block-card h4').innerHTML = "Visit your profile";
    document.querySelector('.second-block-card p').innerHTML = "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
    document.querySelector('#check-the-card-btn').style.display = "none";
    document.querySelector(".first-block-card .VisitsBonusesBooks").style.display = "flex";

    document.querySelector('.sing-up-btn').style.display = "none";
    document.querySelector('.log-in-btn').style.display = "none";
    document.querySelector('.myProfileBtn').style.display = "block";

    // const firstName = document.getElementById("firstName").value;
    // const lastName = document.getElementById("lastName").value;
    // let usersName = firstName + " " + lastName;
    // let userPLaceholder = document.querySelector('.placeholder');
    // console.log(usersName);
}

let firstName = "";
let lastName = "";
let cardNumber = "";

function login() {
    const emaliOrCardNumber = document.querySelector('#emailOrReadersCard').value;
    const enteredPassword = document.querySelector('#passwordLogin').value;

    var storedUserData = JSON.parse(localStorage.getItem("users"));

    var matchedUser = storedUserData.find(function(user) {
        firstName = user.firstName;
        lastName = user.lastName;
        cardNumber = user.cardNumber;
        user.enterCount = user.enterCount + 1;
        return user.email === emaliOrCardNumber || user.cardNumber === emaliOrCardNumber && user.password === enteredPassword;
    });

    if(matchedUser) {
        alert("User find");

        document.querySelector(".header__icon-reg-btn").style.display = "none";
        document.querySelector("#header__icon-in-header").style.display = "block";
        document.querySelector(".blockWithLongName").innerText = firstName + " " + lastName;
        let personsNameIcon1 = document.querySelector("#personsNameIcon1");
        const bothInitial = firstName.charAt(0) + lastName.charAt(0);
        document.querySelector("#personsNameIcon2").innerText = bothInitial;
        document.querySelector(".blockWithSmallName").innerText = bothInitial;
        personsNameIcon1.innerText = bothInitial;
        const titleInHeader1 = document.querySelector("#header__icon-in-menu");
        const titleInHeader2 = document.querySelector("#header__icon-in-header");
        titleInHeader1.setAttribute('title', firstName + " " + lastName);
        titleInHeader2.setAttribute('title', firstName + " " + lastName);

        document.querySelector('.logIn__menu').style.top = '-50%';
        document.querySelector('.overlay__forLogInMenu').style.display = "none";
        document.querySelector("body").style.overflow = "auto";
        document.querySelector(".card_number").innerText = cardNumber;

        document.querySelector(".buttons .user-photo").style.display = "none";
        closeRegisterMenu();
        document.querySelector("#header__icon-in-menu").style.display = "inline-block";

        activateButtons();
        afterRegister();
    } else {
        alert("Login failed. Please check your credentials.");
    }
}

// // LOCAL STORAGE

// // let was_i_here = "";

// // try {
// //     was_i_here = localStorage.getItem("me1");
// // } catch {}

// // if (was_i_here == "ok") {
// //     document.write("I already visited this site");
// // } else {
// //     document.write("It is my first time being here!");    
// //     localStorage.setItem("me1", "ok");
// // }

// // let me = "Hello, i already visited this site";

// // localStorage.setItem("me", me);



// REGISTER PROCCESS

function generateRandomCardCode() {
    let randomNumber = '';
    const characters = "0123456789ABCDEF";

    for (let i = 0; i < 9; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomNumber += characters[randomIndex];
    }

    let placeForRandomNumber = document.querySelector('#profile1');
    placeForRandomNumber.style.fontSize = "12px";

    placeForRandomNumber.innerText = randomNumber;
    document.querySelector('.card_number').innerText = randomNumber;
}

function changeTitleOfIcon() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const titleInHeader1 = document.querySelector("#header__icon-in-menu");
    const titleInHeader2 = document.querySelector("#header__icon-in-header");
    titleInHeader1.setAttribute('title', firstName + " " + lastName);
    titleInHeader2.setAttribute('title', firstName + " " + lastName);
}

function changeNameInIcon() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    document.querySelector(".blockWithLongName").innerText = firstName + " " + lastName;
    let personsNameIcon1 = document.querySelector("#personsNameIcon1");
    const bothInitial = firstName.charAt(0) + lastName.charAt(0);
    document.querySelector("#personsNameIcon2").innerText = bothInitial;
    document.querySelector(".blockWithSmallName").innerText = bothInitial;
    personsNameIcon1.innerText = bothInitial;
    changeTitleOfIcon();
}

function activateButtons() {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.classList.remove('disabled');
    });
}

let registerCount = 0;
function registerUser() {
    generateRandomCardCode();
    registerCount++;

        const nineDigitCode = document.querySelector("#profile1").innerText;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (password.length > 7 && firstName.length > 1 && lastName.length > 1 && email.length > 4) {
            const newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                cardNumber: nineDigitCode,
                enterCount: registerCount
            };

            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));

            document.querySelector(".header__icon-reg-btn").style.display = "none";
            document.querySelector("#header__icon-in-header").style.display = "block";
            changeNameInIcon();
            document.querySelector(".buttons .user-photo").style.display = "none";
            closeRegisterMenu();
            document.querySelector("#header__icon-in-menu").style.display = "inline-block";
            document.querySelector(".registerCount").innerText = registerCount;
            activateButtons();
            afterRegister();
        }
}

let AfterMenuIsActive = false;
function openMenuAfterReg() {
    // if (AfterMenuIsActive == false) {
        document.getElementById("after-reg").style.display = "block";
        document.getElementById("after-reg").style.opacity = 1;
        document.getElementById("after-reg").style.top = "61px";

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const titleInHeader = document.querySelector(".header__icon-after-reg");
        titleInHeader.title = firstName + " " + lastName;
    
        setInterval(() => {
            AfterMenuIsActive = true;
        }, 200)
    // }
}

document.querySelector("#header__icon-in-menu").addEventListener("click", openMenuAfterReg)

document.querySelector('#header__icon-in-header').addEventListener("click", openMenuAfterReg);

let myProfileMenuIsActive = false;
document.querySelector(".my-profile").onclick = function() {
    let menu = document.querySelector(".myProfileMenu");
    menu.style.top = "50%";
    document.querySelector(".overlay").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";

    setTimeout(() => {
        myProfileMenuIsActive = true;
    }, 100)
}

document.querySelector(".myProfileMenu .right .close-menu").onclick = function() {
    document.querySelector(".myProfileMenu").style.top = "-100%";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    setTimeout(() => {
        myProfileMenuIsActive = false;
    }, 100)
}

document.querySelector("body").onclick = function(e) {
    if (registerMenuIsActive == true && e.target != document.querySelector(".header__icon-reg-btn") && e.target != document.querySelector(".register-menu-header") && e.target != document.querySelector(".header__container") && e.target != document.querySelector(".register-menu-header h5")) {
        document.querySelector('.register-menu-header').style.opacity = 0.1;
        
        setTimeout(() => {
            document.querySelector('.register-menu-header').style.display = "none";
            registerMenuIsActive = false;
        }, 190);

    } else if (modalWindowIsActive == true && e.target != burgerMenuBtn && e.target != document.querySelector(".buttons") && e.target != document.querySelector(".burger-menu")) {
        document.querySelector(".burger-menu").style.top = "-570px";
        setTimeout(() => {
            modalWindowIsActive = false;
        }, 100)
    } else if (AfterMenuIsActive == true && e.target != document.querySelector("#header__icon-in-header") && e.target != document.querySelector("#after-reg") && e.target != document.querySelector("#after-reg h5") && e.target != document.querySelector(".personsNameIcon") && e.target != document.querySelector("#header__icon-in-header span")) {
        document.getElementById("after-reg").style.opacity = 0.1;
        // document.getElementById("after-reg").style.top = "10px";

        setTimeout(() => {
            AfterMenuIsActive = false;
            document.getElementById("after-reg").style.display = "none";
        }, 150)
    }
}

document.querySelector(".main-page").onclick = function(e) {
    // console.dir(e.target)
    if (/* myProfileMenuIsActive == true && */ e.target != document.querySelector(".myProfileMenu") && e.target != document.querySelector(".my-profile") && e.target != document.querySelector(".left")
    && e.target != document.querySelector(".right") && e.target != document.querySelector(".myProfileBlock") && e.target != document.querySelector(".blockWithSmallName") && e.target != document.querySelector(".blockWithLongName") 
    && e.target != document.querySelector(".cardNumber .copyCardNumber") && e.target != document.querySelector(".card_number") && e.target != document.querySelector(".cardNumber h3") && e.target != document.querySelector("ul.VisitsBonusesBooks") 
    && e.target != document.querySelector(".visits h4") && e.target != document.querySelector(".bonuses h4") && e.target != document.querySelector(".books h4") && e.target != document.querySelector("path") && e.target != document.querySelector(".visits path") 
    && e.target != document.querySelector(".bonuses path") && e.target != document.querySelector(".books rect") && e.target != document.querySelector("li.visits") && e.target != document.querySelector("li.bonuses") && e.target != document.querySelector("li.books")
    && e.target != document.querySelector(".myProfileBlock h5") && e.target != document.querySelector(".myProfileBlock h6") && e.target != document.querySelector(".rented-books li") && e.target != document.querySelector("ul.rented-books") && e.target != document.querySelector("rect.dontTouchThis1") && e.target != document.querySelector("rect.dontTouchThis2")
    && e.target != document.querySelector("div.cardNumber") && e.target != document.querySelector(".myProfileMenu li")) {
        document.querySelector(".myProfileMenu").style.top = "-100%";

        setTimeout(() => {
            myProfileMenuIsActive = true;
        }, 100)
    }
}

// function findUser() {
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i); // Get the key at the current index
//         const value = localStorage.getItem(key); // Get the value associated with the key
//         console.log(`${key}: ${value}`);
//     }


//     const userToFind = "Max";
//     const passwordTofind = "12345678";

//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     const usersNames = users.filter(user => user.firstName === userToFind && user.password === passwordTofind);

//     if(usersNames.length > 0) {
//         console.log("User found:", usersNames);
//     } else {
//         console.log("No user found.");
//     }
// }

// findUser();


document.querySelector(".log-out").onclick = function() {
    location.reload();
}

function copyToClipboard() {
    // Select the text element
    let text = document.querySelector(".card_number");
    
    // Create a range and select the text
    var range = document.createRange();
    range.selectNode(text);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // Copy to clipboard
    document.execCommand("copy");
    
    // Deselect the text
    window.getSelection().removeAllRanges();
    alert("Number copied successfully!")
}

// FUNCTION TO OPEN LOG IN MENU
function openLogInMenu() {
    document.querySelector(".overlay__forLogInMenu").style.display = "block";
    let loginMenu = document.querySelector(".logIn__menu");
    loginMenu.style.top = "50%";
    closeRegisterMenu(); 
    document.querySelector("body").style.overflow = "hidden";
}

function openBuyALibraryCardMenu() {
    if (!document.querySelector(".buy-btn").classList.contains("disabled")) {
        let buyALibraryCard = document.querySelector(".buyALibraryCard");
        buyALibraryCard.style.top = "50%";
        document.querySelector(".overlay").style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
    } else {
        openLogInMenu();
    }
}

document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener('click', openBuyALibraryCardMenu);
});

document.querySelector(".overlay").onclick = function(e) {
    if(e.target != document.querySelector(".buy-btn")) {
        let buyALibraryCard = document.querySelector(".buyALibraryCard");
        buyALibraryCard.style.top = "-50%";
        document.querySelector(".overlay").style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    } else if (logInMenuIsActive == true) {
        document.querySelector(".overlay").style.display = "none";
        let loginMenu = document.querySelector(".logIn__menu");
        loginMenu.style.top = "-50%";   
    }
}

document.querySelector(".buyALibraryCard__close-menu").onclick = function() {
    let buyALibraryCard = document.querySelector(".buyALibraryCard");
    buyALibraryCard.style.top = "-100%";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
}

// HIDE LOG IN MENU BY CLICK ON OVERLAY
document.querySelector(".overlay__forLogInMenu").onclick = function() {
    document.querySelector(".overlay__forLogInMenu").style.display = "none";
    let loginMenu = document.querySelector(".logIn__menu");
    loginMenu.style.top = "-50%";
    document.querySelector("body").style.overflow = "auto";
}

// HIDE LOG IN MENU BY CLICK ON CROSS
document.querySelector(".close__LoginMenu").onclick = function() {
    document.querySelector(".overlay__forLogInMenu").style.display = "none";
    let loginMenu = document.querySelector(".logIn__menu");
    loginMenu.style.top = "-50%";
    document.querySelector("body").style.overflow = "auto";
}

console.log("Ограниченная карусель в блоке About - 25 балов");
console.log("Слайдер в блоке Favorites - 23 бала");
console.log("До авторизаци - 2 бала");
console.log("Меню авторизации при нажатии на иконку пользователя - 8 балов");
console.log("Модальное окно REGISTER - 29 балов");
console.log("Окончание регистрации - 8 балов");
console.log("При наличии регистрации, но будучи не авторизованным - 0 балов");
console.log("Модальное окно LOGIN - 27 балов");
console.log("Блок Favorites - 2 бала");
console.log("Меню профиля при нажатии на иконку с инициалами пользователя - 14 балов");
console.log("Модальное окно MY PROFILE - 21 балл");
console.log("Блок Favorites - 2 бала");
console.log("Модальное окно BUY A LIBRARY CARD - 25 балов");
console.log("Блок Digital Library Cards - 0 балов");
console.log("Общая сумма балов - 186");