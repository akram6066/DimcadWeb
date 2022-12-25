const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function setUser(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function setP(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function confirmP(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function isEmail(email) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "@";
  
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
   
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
        
    });

    

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        
        setFormMessage(loginForm, "error", "Invalid username/password combination");


    });


    
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Username must be at least 6 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            setUser(inputElement);
        });
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "password" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "password must be contain 8 number and characters");
            }
        });

        inputElement.addEventListener("input", e => {
            setP(inputElement);
        });
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "password2" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "conform password must be same password");
            }
        });

        inputElement.addEventListener("input", e => {
            confirmP(inputElement);
        });
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "email" && e.target.value.length > 0 && e.target.value.length < 9) {
                setInputError(inputElement, "email must be add @ sympol");
            }
        });

        inputElement.addEventListener("input", e => {
            isEmail(inputElement);
        });
    });

    
    
});



















 











var mainimg = document.getElementById("mainimg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){ 
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick =function(){
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick =function(){
    mainimg.src = smallimg[3].src;
}
