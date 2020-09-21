// Sidebar Section

function openNav() {
    document.getElementById("mySidebar").style.width = "180px";
    document.getElementById("main").style.marginLeft = "115px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Sign up / sign in section
let keySignInRemeberCheckBox = `sign_remember_check`;
let keyCurrentUserSignIn = `current_user_sign_in`;
let keyUsersLocalStorage = `users_data`;
let modalSignUp = document.getElementById('id01');
let modalSignIn = document.getElementById(`id02`);
let nameInput = document.getElementById(`sign_up_name_input`);
let passwordInput = document.getElementById(`sign_up_password_input`);
let repeatPasswordInput = document.getElementById(`repeat_password_input`);
let signUpBtn = document.getElementById(`sign_up_btn`);
let signInBtn = document.getElementById(`sign_in_btn`);
let modalSignUpBtn = document.getElementById(`modal_sign_up_btn`);
let modalSignInBtn = document.getElementById(`modal_sign_in_btn`);
let modalNameInput = document.getElementById(`sign_in_name_input`);
let modalPasswordInput = document.getElementById(`sign_in_password_input`);
let modalSignInStatusTitle = document.getElementById(`sign_in_status_title`);
let signOutBtn = document.getElementById(`sign_out_btn`);
let sideName = document.getElementById(`side_user_name`);
let welcomeTitle = document.getElementById(`welcome_title`);
let signInRemeberCheckBox = document.getElementById(`sign_in_remember_checkbox`);
let signUpRemeberCheckBox = document.getElementById(`sign_up_remember_checkbox`);
let modalSignUpStatusTitle = document.getElementById(`sign_up_status_title`);

function saveUsersDataForTheFirstTime() {
    if (isFirstTime()) {
        localStorage.setItem(keyUsersLocalStorage, JSON.stringify(users));
    }
}

function isFirstTime() {
    let rawArr = localStorage.getItem(keyUsersLocalStorage);
    if (rawArr == undefined || rawArr == null) {
        // This is the first time that the user has click into this website
        return true;
    }
    return false;
}

function setUserSignInIndex(index) {
    localStorage.setItem(keyCurrentUserSignIn, index);
}

function setSignRemeberCheck(check) {
    localStorage.setItem(keySignInRemeberCheckBox, check);
}

function getUserSignInIndex() {
    let index = localStorage.getItem(keyCurrentUserSignIn);
    if (index == null || index == undefined || index == -1) {
        return -1;
    }
    return index;
}

function getSignRemeberCheck() {
    let check = localStorage.getItem(keySignInRemeberCheckBox);
    if (check == null || check == undefined || check == -1) {
        return false;
    }
    return true;
}

function clearAllData() {
    if (!isFirstTime()) {
        localStorage.removeItem(keyUsersLocalStorage);
    }
    if (getUserSignInIndex() != undefined || getUserSignInIndex() != null) {
        localStorage.removeItem(keyCurrentUserSignIn);
    }
}

function checkUserSignStatus() {
    if (getSignRemeberCheck() == true) {
        if (getUserSignInIndex() == -1) {
            signOut();
        } else {
            signIn(getUserSignInIndex());
        }
    } else {
        signOut();
    }
}

function signIn(index) {
    let rawString = localStorage.getItem(keyUsersLocalStorage);
    let usersArr = JSON.parse(rawString);
    welcomeTitle.textContent = `Chào mừng bạn ${usersArr[index].user_name} đến với Mobile Shop`;
    signInBtn.style.display = `none`;
    signUpBtn.style.display = `none`;
    signOutBtn.style.display = `block`;
    sideName.textContent = usersArr[index].user_name;
    isNewAcc = false;
    setUserSignInIndex(index);
    console.log(usersArr);
}

function signOut() {
    signInBtn.style.display = `block`;
    signUpBtn.style.display = `block`;
    signOutBtn.style.display = `none`;
    sideName.textContent = `no name`;
    welcomeTitle.textContent = `Chào mừng bạn đến với Mobile Shop`;
    setUserSignInIndex(-1);
}

signOutBtn.addEventListener(`click`, signOut);

function modalSignUpOnclickCallback() {
    if (passwordInput.value != repeatPasswordInput.value) {
        modalSignUpStatusTitle.textContent = `Wrong repeat password! Please type again!`;
        modalSignUpStatusTitle.style.color = `red`;
        passwordInput.value = null;
        repeatPasswordInput.value = null;
        return;
    }
    let newUser = {
        user_name: nameInput.value,
        password: repeatPasswordInput.value,
        product_choices: [],
        amin: false,
    }
    let rawData = localStorage.getItem(keyUsersLocalStorage);
    let usersArray = JSON.parse(rawData);
    usersArray.push(newUser);
    localStorage.setItem(keyUsersLocalStorage, JSON.stringify(usersArray));
    signIn(usersArray.length - 1);
    nameInput.value = null;
    passwordInput.value = null;
    repeatPasswordInput.value = null;
    modalSignUp.style.display = `none`;
}
modalSignUpBtn.addEventListener(`click`, modalSignUpOnclickCallback);

function compareStringIgnoreCase(str_1, str_2) {
    if (str_1.toLocaleLowerCase(`tr`) === str_2.toLocaleLowerCase(`tr`)) {
        return true;
    }
    return false;
}

function signInOnClickCallback() {
    modalSignInStatusTitle.textContent = `Please type a properly info`;
    modalSignInStatusTitle.style.color = `black`;
    signInRemeberCheckBox.checked = getSignRemeberCheck();
}

signInBtn.addEventListener(`click`, signInOnClickCallback);

function signUpOnclickCallback() {
    modalSignUpStatusTitle.textContent = `Please type a properly info`;
    modalSignUpStatusTitle.style.color = `black`;
    signUpRemeberCheckBox.checked = getSignRemeberCheck();
}

signUpBtn.addEventListener(`click`, signUpOnclickCallback);

function modalSignInOnclickCallback() {
    let rawData = localStorage.getItem(keyUsersLocalStorage);
    let usersArray = JSON.parse(rawData);
    let isUserTypeRight = false;
    for (let i = 0; i < usersArray.length; i++) {
        if (compareStringIgnoreCase(usersArray[i].user_name, modalNameInput.value) &&
            usersArray[i].password === modalPasswordInput.value) {
            signIn(i);
            isUserTypeRight = true;
        }
    }
    if (isUserTypeRight) {
        modalNameInput.value = null;
        modalPasswordInput.value = null;
        modalSignIn.style.display = `none`;
    } else {
        modalSignInStatusTitle.textContent = `Wrong info! please type again`;
        modalSignInStatusTitle.style.color = `red`;
        modalNameInput.value = null;
        modalPasswordInput.value = null;
    }
}

modalSignInBtn.addEventListener(`click`, modalSignInOnclickCallback);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    } else if (event.target == modalSignIn) {
        modalSignIn.style.display = "none";
    }
}

signInRemeberCheckBox.addEventListener(`change`, () => {
    if (signInRemeberCheckBox.checked) {
        setSignRemeberCheck(1);
    } else {
        setSignRemeberCheck(-1);
    }
});

signUpRemeberCheckBox.addEventListener(`change`, () => {
    if (signUpRemeberCheckBox.checked) {
        setSignRemeberCheck(1);
    } else {
        setSignRemeberCheck(-1);
    }
});

window.onload = () => {
    saveUsersDataForTheFirstTime();
    checkUserSignStatus();
}

// Add to cart section
let addToCartBtnArr = document.getElementsByClassName(`add_to_cart_btn`);
let modalAddToCartSuccess = document.getElementById(`add_to_cart_success`);
for (i = 0; i < addToCartBtnArr.length; i++) {
    addToCartBtnArr[i].addEventListener(`click`, () => {
        modalAddToCartSuccess.style.display = `block`;
        setTimeout(() => {
            modalAddToCartSuccess.style.display = `none`;
        }, 500);
    })
}