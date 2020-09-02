interface ICadastroProfessor {
  validaFormulario(): void;
  salvaBancoDados(): void;
  enviaEmail(): void;
}

interface ICadastroDisciplina {
  validaFormulario(): void;
  salvaBancoDados(): void;
}

class CadastroProfessorRef implements ICadastroProfessor {
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

class CadastroDisciplinaRef implements ICadastroDisciplina {
  validaFormulario() {
    //valida dados preenchidos
  }

  salvaBancoDados() {
    //salva dados no banco
  }
}
