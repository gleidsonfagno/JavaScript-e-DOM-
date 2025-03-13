const form = document.querySelector(".js-form");
let user_name = document.querySelector(".js-field-name");
const date_of_birth = document.querySelector(".js-field-data");
const button_submit = document.querySelector(".submit");
const table = document.querySelector("table");

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

  return name;
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

  if (!nameValid) {
    user_name.classList.add("erro");
  } else {
    user_name.classList.remove("erro");
  }

  if (!datelavid) {
    date_of_birth.classList.add("erro");
  } else {
    date_of_birth.classList.remove("erro");
  }

  if (nameValid && datelavid) {
    data_of_person = {
      name: nameValid,
      date_of_birth: datelavid,
    };
// inserindo dados na local storage
    const person = JSON.parse(localStorage.getItem("pessoas")) || [];
    person.push(data_of_person);
    localStorage.setItem("pessoas", JSON.stringify(person));
    alert("Cadastrado com sucess!")

    clearInputs()
    createTablePerson()
  }

});

// cria as tr e percorre os objetos no localstorage e insere na tr
function createTablePerson() {
  const minha_propriedade = localStorage.getItem("pessoas");
  const person = JSON.parse(minha_propriedade);

  // demtro do metodo map estamos criando uma tr e piserindo assim para cada loop ele cria um elemento e nao subsitui
  person.map((person, index) => 
    {
    const tr = document.createElement("tr");
    // console.log(person, index),
    tr.innerHTML = `
        <tr>
        <td>${person.name}</td>
        <td>${person.date_of_birth} </td>
                  <td class="actions">
                  <button class="deletar">deletar ${index}</button>
                  <button>editar</button>
                  </td>
                  </tr>
                  `
                  table.append(tr)
  });

}
// quando e a pagina e carregado chama funçao
window.onload = createTablePerson();

function clearInputs(){
  date_of_birth.value = ""
  user_name.value = ""
}
