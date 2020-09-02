enum DisciplinaEnum {
  educacaoFisica = "Educação Física",
  matematica = "Matemática",
  ciencias = "Ciências",
}

class Boletim {
  public lancaNotas(alunoId: number, disciplina: DisciplinaEnum, nota: number) {
    switch (disciplina) {
      case DisciplinaEnum.educacaoFisica:
      //lança nota na disciplina de educação física
      //matricular no campeonato anual para notas > 75%
      case DisciplinaEnum.matematica:
      //lança nota na disciplina de matemática
      //indicar para olimpiadas de matemática para notas > 80%
      case DisciplinaEnum.ciencias:
      //lança nota na disciplina de ciências
    }
  }
}
