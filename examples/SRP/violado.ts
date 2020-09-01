class Aluno {
  id: number;
  name: string;
  email: string;
  cpf: number;

  public constructor(id: number, name: string, email: string, cpf: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }

  private validaCpf(cpf: number) {}
  private validaEmail(email: string) {}
  private createAlunoRepository() {}

  public salvaCadastro() {
    this.validaCpf(this.cpf);
    this.validaEmail(this.email);

    this.createAlunoRepository();
  }
}
