const form = document.querySelector(".js-form")
const user_name = document.querySelector(".js-field-name")
const date_of_birth = document.querySelector(".js-field-data")
const button_submit = document.querySelector(".submit")


button_submit.addEventListener("click", function(event) {
    event.preventDefault()

    console.log(user_name.value)
    console.log(date_of_birth.value)
    
})