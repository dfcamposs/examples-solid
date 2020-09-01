class AlunoRef {
  id: number;
  name: string;
  email: string;
  cpf: number;

  constructor(id: number, name: string, email: string, cpf: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }

  public validaDados() {
    CPFService.validaCpf(this.cpf);
    EmailService.validaEmail(this.email);
  }
}

class AlunoService {
  public cadastraAluno(aluno: AlunoRef) {
    aluno.validaDados();
    const repository = new AlunoRepository();
    repository.create(aluno);
  }
}

class AlunoRepository {
  public create(aluno: AlunoRef) {}
}

class CPFService {
  public static validaCpf(cpf: number): boolean {
    return true;
  }
}

class EmailService {
  public static validaEmail(email: string): boolean {
    return true;
  }
}
