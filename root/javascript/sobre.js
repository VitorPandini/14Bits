// Captura de elementos
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputMensagem = document.getElementById('mensagem');
const btnEnviar = document.getElementById('enviar');

// Função para validar e estilizar campos
function validarCampo(campo, minLength) {
  if (campo.value.length < minLength) {
    campo.style.backgroundColor = 'red';
    return false;
  } else {
    campo.style.backgroundColor = 'lightgreen';
    return true;
  }
}

// Função para estilizar borda
function estilizarBorda(campo, cor) {
  campo.style.borderColor = cor;
}

// Adicionando eventos de input para todos os campos
[inputNome, inputEmail, inputMensagem].forEach(campo => {
  campo.addEventListener('input', () => {
    if (campo === inputNome) {
      validarCampo(campo, 5);
    } else if (campo === inputEmail) {
      validarCampo(campo, 7);
    } else if (campo === inputMensagem) {
      validarCampo(campo, 10);
    }
  });
});

// Adicionando eventos de foco e desfoco
[inputNome, inputEmail, inputMensagem].forEach(campo => {
  campo.addEventListener('focus', () => estilizarBorda(campo, 'lightblue'));
  campo.addEventListener('blur', () => estilizarBorda(campo, ''));
});

// Adicionando evento de clique no botão
btnEnviar.addEventListener('click', () => {
  const nomeValido = validarCampo(inputNome, 5);
  const emailValido = validarCampo(inputEmail, 7);
  const mensagemValida = validarCampo(inputMensagem, 10);

  if (nomeValido && emailValido && mensagemValida) {
    alert('Mensagem enviada com sucesso!');
  } else {
    alert('Por favor, corrija os campos inválidos.');
  }
});

// Adicionando evento de submit
document.addEventListener('submit', (event) => {
  // Previne o envio do formulário para validar os campos
  event.preventDefault();
});
