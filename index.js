const nameInput = document.getElementById("name-input")
const emailInput = document.getElementById("email-input").value 
const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("prevented")
})