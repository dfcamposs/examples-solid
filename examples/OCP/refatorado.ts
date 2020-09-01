abstract class BoletimRef {
  public abstract lancaNotas(alunoId: number, nota: number): void;
}

class MateriaEducacaoFisica implements BoletimRef {
  lancaNotas(alunoId: number, nota: number) {
    //lança nota na matéria de educação fisica
    //matricular no campeonato anual para notas > 75%
  }
}

class MateriaMatematica implements BoletimRef {
  lancaNotas(alunoId: number, nota: number) {
    //lança nota na matéria de matemática
    //indicar para olimpiadas de matemática para notas > 80%
  }
}

class MateriaCiencias implements BoletimRef {
  lancaNotas(alunoId: number, nota: number) {
    //lança nota na matéria de ciências
  }
}
