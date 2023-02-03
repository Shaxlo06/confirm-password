// select elements from html

const pwShow = document.querySelector(".show")
const pwCreate = document.querySelector(".createPw")
const pwConfirm = document.querySelector(".confirmPw")
const pwAlertIcon = document.querySelector(".errorIcon")
const pwAlertText = document.querySelector(".text")
const pwSubmitBtn = document.querySelector("#button")


// codes of show-hide password

pwShow.addEventListener("click", ()=> {
    if ((pwCreate.type === "password") && (pwConfirm.type === "password")) {
        pwCreate.type = "text"
        pwConfirm.type = "text"
        pwShow.classList.replace("fa-eye-slash", "fa-eye")
    }
    else {
        pwCreate.type = "password"
        pwConfirm.type = "password"
        pwShow.classList.replace("fa-eye", "fa-eye-slash")
    }
})


// codes of confirm-password

pwCreate.addEventListener("input", ()=> {
    let inputValue = pwCreate.value.trim()

    if (inputValue.length >= 8) {
        pwConfirm.removeAttribute("disabled")
        pwSubmitBtn.removeAttribute("disabled")
        pwSubmitBtn.classList.add("active")
    }
    else {
        pwConfirm.setAttribute("disabled", true)
        pwSubmitBtn.setAttribute("disabled", true)
        pwSubmitBtn.classList.remove("active")
        pwConfirm.value = ""
        pwAlertText.innerText = "Enter at least 8 characters    "
        pwAlertText.style.color = "#a6a6a6"
        pwAlertIcon.style.display = "none"
    }
})

pwSubmitBtn.addEventListener("click", ()=> {
    if (pwCreate.value === pwConfirm.value) {
        pwAlertText.innerText = "Password matched"
        pwAlertText.style.color = "#20BB12"
        pwAlertIcon.style.display = "none"
    }
    else {
        pwAlertText.innerText = "Password did not matched"
        pwAlertText.style.color = "#D93025"
        pwAlertIcon.style.display = "block"
    }
})


