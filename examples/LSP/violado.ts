abstract class Contrato {
  public abstract geraFolhaDePagamento(): void;
}

class Voluntariado implements Contrato {
  geraFolhaDePagamento() {
    // ??
  }
}

abstract class Pessoa {
  public abstract getNomeCompleto(id: number): string;
}

class Diretor implements Pessoa {
  getNomeCompleto(id: number) {
    return id;
  }
}

class Coordenador implements Pessoa {
  getNomeCompleto(id: number) {
    throw new Error();
  }
}
