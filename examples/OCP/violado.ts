enum MateriaEnum {
  educacaoFisica = "Educação Física",
  matematica = "Matemática",
  ciencias = "Ciências",
}

class Boletim {
  public lancaNotas(alunoId: number, materia: MateriaEnum, nota: number) {
    switch (materia) {
      case MateriaEnum.educacaoFisica:
      //lança nota na matéria de educação física
      //matricular no campeonato anual para notas > 75%
      case MateriaEnum.matematica:
      //lança nota na matéria de matemática
      //indicar para olimpiadas de matemática para notas > 80%
      case MateriaEnum.ciencias:
      //lança nota na matéria de ciências
    }
  }
}
