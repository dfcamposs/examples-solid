interface ICadastro {
  validaFormulario(): void;
  salvaBancoDados(): void;
  enviaEmail(): void;
}

class CadastroProfessor implements ICadastro {
  validaFormulario() {
    //valida dados preenchidos
  }

  salvaBancoDados() {
    //salva dados no banco
  }

  enviaEmail() {
    //envia email para o professor
  }
}

class CadastroDisciplina implements ICadastro {
  validaFormulario() {
    //valida dados preenchidos
  }

  salvaBancoDados() {
    //salva dados no banco
  }

  enviaEmail() {
    //??
  }
}
