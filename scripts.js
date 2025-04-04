class Funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }

  exibirDetalhes() {
    console.log(
      `Funcionario: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, Data de Admissão: ${
        this.dataAdmissao
      }, Bônus: ${this.calcularBonus().toFixed()}`
    );
  }
}

const funcionario = new Funcionario("Edison", 500, "11 / 06 / 1995");
funcionario.exibirDetalhes();

class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
  }

  mostrarSetor() {
    console.log(`${this.nome} é gerente do setor ${this.departamento}`);
  }

  calcularBonusGerente() {
    return this.salario * 0.2;
  }

  exibirDetalhesGerente() {
    console.log(
      `Funcionario: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, Data de Admissão: ${
        this.dataAdmissao
      }, Bônus: ${this.calcularBonusGerente().toFixed()}`
    );
  }
}

const gerente = new Gerente("Ronaldo", 10000, "11/06/1995", "TI");
gerente.exibirDetalhesGerente();
gerente.mostrarSetor();
