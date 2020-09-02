abstract class ContratoVoluntario {
  public abstract setHorasVoluntariado(): void;
}

class VoluntariadoRef implements ContratoVoluntario {
  setHorasVoluntariado() {}
}

abstract class PessoaRef {
  public abstract getNomeCompleto(id: number): string;
}

class DiretorRef implements PessoaRef {
  getNomeCompleto(id: number) {
    /*...*/
    return "Diretor X";
  }
}

class CoordenadorRef implements PessoaRef {
  getNomeCompleto(id: number) {
    /*...*/
    return "Coordenador Y";
  }
}
