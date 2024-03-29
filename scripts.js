const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("helpper:registers")) || [];
  },

  set(registers) {
    localStorage.setItem("helpper:registers", JSON.stringify(registers));
  },
};

const Register = {
  all: Storage.get(),

  add(register) {
    Register.all.push(register);

    App.reload();
  },

  remove(index) {
    Register.all.splice(index, 1);

    App.reload();
  },
};

const DOM = {
  registersContainer: document.querySelector("#table tbody"),

  addRegister(register, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLRegister(register, index);
    tr.dataset.index = index;

    DOM.registersContainer.appendChild(tr);
  },

  innerHTMLRegister(register, index) {
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
                <img onclick="Register.remove(${index})" src="./assets/remove.svg" alt="Imagem de remover" />
            </td>
      `;
    return html;
  },

  clearRegisters() {
    DOM.registersContainer.innerHTML = "";
  },
};

const Form = {
  nome: document.querySelector("input#nome"),
  email: document.querySelector("input#email"),
  registro: document.querySelector("input#registro"),
  cep: document.querySelector("input#cep"),
  logradouro: document.querySelector("input#logradouro"),
  numero: document.querySelector("input#numero"),
  bairro: document.querySelector("input#bairro"),
  cidade: document.querySelector("input#cidade"),
  estado: document.querySelector("input#estado"),

  getValues() {
    return {
      nome: Form.nome.value,
      email: Form.email.value,
      registro: Form.registro.value,
      cep: Form.cep.value,
      logradouro: Form.logradouro.value,
      numero: Form.numero.value,
      bairro: Form.bairro.value,
      cidade: Form.cidade.value,
      estado: Form.estado.value,
    };
  },

  validateFields() {
    const {
      nome,
      email,
      registro,
      cep,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
    } = Form.getValues();

    if (
      nome.trim() === "" ||
      email.trim() === "" ||
      registro.trim() === "" ||
      cep.trim() === "" ||
      logradouro.trim() === "" ||
      numero.trim() === "" ||
      bairro.trim() === "" ||
      cidade.trim() === "" ||
      estado.trim() === ""
    ) {
      throw new Error("Necessário o preenchimento de todos os campos");
    }
  },

  clearFields() {
    Form.nome.value = "";
    Form.email.value = "";
    Form.registro.value = "";
    Form.cep.value = "";
    Form.logradouro.value = "";
    Form.numero.value = "";
    Form.bairro.value = "";
    Form.cidade.value = "";
    Form.estado.value = "";
  },

  saveRegister(register) {
    Register.add(register);
  },

  submit(event) {
    event.preventDefault();

    try {
      Form.validateFields();
      const register = Form.getValues();

      Form.saveRegister(register);
      Form.clearFields();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  },
};

const App = {
  init() {
    Register.all.forEach((register, index) => {
      DOM.addRegister(register, index);

      Storage.set(Register.all)
    });
  },

  reload() {
    DOM.clearRegisters();
    App.init();
  },
};

App.init();
