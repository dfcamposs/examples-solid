class AlunoRefRef {
  id: number;
  name: string;
  email: string;
  cpf: number;

  private cpfService: CPFServiceRef;
  private emailService: EmailServiceRef;

  constructor(cpfService: CPFServiceRef, emailService: EmailServiceRef) {
    this.cpfService = cpfService;
    this.emailService = emailService;
  }

  public validaDados() {
    this.cpfService.validaCpf(this.cpf);
    this.emailService.validaEmail(this.email);
  }
}

class AlunoServiceRef {
  private alunoRepository: AlunoRepositoryRef;

  constructor(alunoRepository: AlunoRepositoryRef) {
    this.alunoRepository = alunoRepository;
  }

  public async cadastraAluno(aluno: AlunoRef) {
    aluno.validaDados();
    await this.alunoRepository.create(aluno);
  }
}

class AlunoRepositoryRef {
  public async create(aluno: AlunoRef) {
    /*...*/
  }
}

class CPFServiceRef {
  public validaCpf(cpf: number): boolean {
    /*...*/
    return true;
  }
}

class EmailServiceRef {
  public validaEmail(email: string): boolean {
    /*...*/
    return true;
  }
}
