abstract class BoletimRef {
  public abstract lancaNotas(alunoId: number, nota: number): void;
}

class DisciplinaEducacaoFisica implements BoletimRef {
  lancaNotas(alunoId: number, nota: number) {
    //lança nota na disciplina de educação fisica
    //matricular no campeonato anual para notas > 75%
  }
}

class DisciplinaMatematica implements BoletimRef {
  lancaNotas(alunoId: number, nota: number) {
    //lança nota na disciplina de matemática
    //indicar para olimpiadas de matemática para notas > 80%
  }
}

class DisciplinaCiencias implements BoletimRef {
  lancaNotas(alunoId: number, nota: number) {
    //lança nota na disciplina de ciências
  }
}
