const form = document.querySelector(".js-form");
let user_name = document.querySelector(".js-field-name");
const date_of_birth = document.querySelector(".js-field-data");
const button_submit = document.querySelector(".submit");

function validateUserName(name) {
  const regex = /^[A-Za-zÀ-ÿ\s]+$/;

  if (name && name.trim() === "") {
    alert("O campo está em branco");
    return false;
  }

  if (!regex.test(name)) {
    alert("Somente letras é permitido");
    return false;
  }

  return true;
}

function validateDateOfBirth(date) {
  const [year, month, day] = date.split("-").map(Number);

  newData = new Date(year, month - 1, day);

  if (year.toString().length > 4) {
    alert("O ano da data de nascimento não pode ter mais de 4 dígitos.");
    return false;
  } else {
    return newData.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValid = validateUserName(user_name.value);
  const datelavid = validateDateOfBirth(date_of_birth.value);

  if (!nameValid ) {
    user_name.classList.add("erro");
  }else{
    date_of_birth.classList.remove("erro")
  }

  if(!datelavid){
    date_of_birth.classList.add("erro")
  }else{
    date_of_birth.classList.remove("erro")
  }
  
  
});
