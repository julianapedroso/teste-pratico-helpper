//   const Storage = {
//     get() {
//       return JSON.parse(localStorage.getItem("helpper:formulario")) || []
//     },

//     set(registers) {
//       localStorage.setItem("helpper:formulario", JSON.stringify(registers))
//     }
//   }

//   const Register = {
//     all: Storage.get(),

//     add(register) {
//       Register.all.push(register);

//       App.reload()
//     },

//     remove(index) {
//       Register.all.splice(index, 1)

//       App.reload()
//     }
//   };

//   const DOM = {
//     registersContainer: document.querySelector("#tabela tbody"),

//     addRegister(register, index) {
//       const tr = document.createElement("tr");
//       tr.innerHTML = DOM.innerHTMLRegister(register, index);
//       tr.dataset.index = index;

//       DOM.registersContainer.appendChild(tr);
//     },

//     innerHTMLRegister(register, index) {

//       const html = `
//         <td class="description">${register.description}</td>
//           <td class="name">${register.name}</td>
//           <td>
//             <img onclick="Registers.remove(${index})" src="./assets/minus.svg" alt="Imagem de remover" />
//         </td>
//       `;
//       return html;
//     },

//     clearRegisters() {
//       DOM.registersContainer.innerHTML = ""
//     },
//   };

//   const Form = {
//     nome: document.querySelector("input#nome"),
//     email: document.querySelector("input#email"),

//     getValues() {
//       return {
//         name: Form.name.value,
//         email: Form.email.value
//       }
//     },

//     validateFields() {
//       const { name, email } = Form.getValues()

//       if (name.trim() === "" || email.trim() === "") {
//         throw new Error("Necessário o preenchimento de todos os campos")
//       }
//     },

//     clearFields() {
//       Form.name.value = ""
//       Form.email.value = ""
//     },

//     saveRegister(register) {
//       Register.add(register)
//     },

//     submit(event) {
//       event.preventDefault()

//       try {
//         Form.validateFields()

//         Form.saveRegister(register)

//         Form.clearFields()

//       } catch (error) {
//         console.log(error.message)
//       }

//     }
//   }

//   const App = {
//     init() {

//       Register.all.forEach((register, index) => {
//         DOM.addRegister(register, index);
//       });

//       Storage.set(Register.all)

//     },
//     reload() {
//       DOM.clearRegisters()
//       App.init()
//     },
//   }

//   App.init()

// const Storage = {
//         get() {
//           return JSON.parse(localStorage.getItem("helpper:formulario")) || []
//         },

//         set(registers) {
//           localStorage.setItem("helpper:formulario", JSON.stringify(registers))
//         }
//       }

const registers = [
  {
    nome: "Juliana",
    email: "juliana@gmail.com",
    registro: "12345678900",
    cep: "12519602",
    logradouro: "Rua Senador",
    numero: "16",
    bairro: "Chácaras Piaguí",
    cidade: "São Paulo",
    estado: "São Paulo",
  },
  {
    nome: "Lívia",
    email: "livia@gmail.com",
    registro: "12345678900",
    cep: "12519602",
    logradouro: "Rua Casa 4",
    numero: "s/n",
    bairro: "Centro",
    cidade: "Amaralina",
    estado: "Goiás",
  },
];

const DOM = {
    registersContainer: document.querySelector('#tabela tbody'),
  addRegister(register, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLRegister(register);

    DOM.registersContainer.appendChild(tr);
  },

  innerHTMLRegister(register) {
    const html = `
            <td class="nome">${register.nome}</td>
            <td class="email">${register.email}</td>
            <td class="registro">${register.registro}</td>
            <td class="cep">${register.cep}</td>
            <td class="logradouro">${register.logradouro}</td>
            <td class="numero">${register.numero}</td>
            <td class="bairro">${register.bairro}</td>
            <td class="cidade">${register.cidade}</td>
            <td class="estado">${register.estado}</td>
            <td>
                <img onclick="Registers.remove" src="./assets/minus.svg" alt="Imagem de remover" />
            </td>
      `;
    return html;
  },
};

DOM.addRegister(registers[0]);

// let capturandoNome = ""

// function capturar(event) {
//     event.preventDefault()
//     capturandoNome = document.getElementById("nome").value;
//     document.getElementById("valorNome").innerHTML = capturandoNome
// }

// const Register = {
//         all: Storage.get(),

//         add(register) {
//           Register.all.push(register);

//         },

//         remove(index) {
//           Register.all.splice(index, 1)

//         }
//       };
