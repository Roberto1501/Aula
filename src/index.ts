import { Console } from "console";

class Contador {
  contador: number;

  constructor() {
    this.contador = 0;
  }

  reset() {
    this.contador = 0;
  }

  increase() {
    this.contador++;
  }

  get() {
    this.contador;
  }
}

const contador = new Contador();

//exercicio 2

class Model {
  color: string;
  circunferencia: number;
  material: string;

  constructor(color: string, circunferencia: number, material: string) {
    this.color = color;
    this.circunferencia = circunferencia;
    this.material = material;
  }
  public trocaCor(NovaCor: string) {
    this.color = NovaCor;
  }

  public mostrarCor(): void {
    console.log(`A cor é ${this.color} `);
  }
}

const bola = new Model("vermelha", 10, "cimento");

// bola.mostrarCor();
// bola.trocaCor("azul");
// bola.mostrarCor();

class Conta {
  private contaNumber: number;
  private name: string;
  private balance: number;

  constructor(contaNumber: number, name: string, balance: number) {
    this.contaNumber = contaNumber;
    this.balance = balance;
    this.name = name;
  }

  public trocarNome(newName: string) {
    this.name = newName;
  }

  public deposito(newDeposit: number) {
    this.balance = this.balance + newDeposit;
  }

  public saque(newSaque: number) {
    if (this.balance > 0) {
      this.balance = this.balance - newSaque;
    } else {
      console.log("Não tem saldo suficente para esse saque");
    }
  }

  public showAccount(): void {
    console.log(`Os dados da sua Conta são:`);
    console.log(`Nome: ${this.name}`);
    console.log(`O seu numero de conta é ${this.contaNumber} `);
    console.log(`O seu saldo é ${this.balance}`);
  }
}

const account = new Conta(150199, "Roberto", 3500);

// account.showAccount();
// account.saque(2000);
// account.showAccount();

class Calculadora {
  historico: Array<number>;
  resultado: number;

  constructor() {
    this.historico = [];
    this.resultado = 0;
  }

  public somar() {
    resultado = 5 + 5;
    this.historico.push(this.resultado);
  }

  public dividir() {
    this.resultado = 9 / 2;
    this.historico.push(this.resultado);
  }
  public multiplicar() {
    this.resultado = 9 * 2;
    this.historico.push(this.resultado);
  }

  public diminuir() {
    this.resultado = 9 - 2;
    this.historico.push(this.resultado);
  }

  public showHistorico(): void {
    if (this.historico.length <= 0) {
      console.log("Você não possui historico");
    } else {
      console.log(`O seu histórico é ${this.historico}`);
    }
  }
}

const minhaCalculadora = new Calculadora();

// minhaCalculadora.diminuir();
// minhaCalculadora.showHistorico();

class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor() {
    this.tipoCombustivel = "Gasolina";
    this.valorLitro = 4;
    this.quantidadeCombustivel = 3000;
  }

  public abastecerPorValor(quantoDinehiro: number) {
    if (this.quantidadeCombustivel > 0) {
      let valorTotalCombustivel = quantoDinehiro / this.valorLitro;

      if (valorTotalCombustivel <= this.quantidadeCombustivel) {
        console.log(
          `A quantidade total de combustivel que você abasteceu foi de ${valorTotalCombustivel} litros`
        );
        this.quantidadeCombustivel =
          this.quantidadeCombustivel - valorTotalCombustivel;
        console.log(
          `Nova quantidade total de combustivel na bomba: ${this.quantidadeCombustivel}`
        );
      } else {
        console.log("Dirija-se a outra bomba");
      }
    } else {
      console.log("Quantidade de combustivél não suficiente");
    }
  }

  public abastecePorLitro(quantosLitros: number) {
    if (
      this.quantidadeCombustivel > 0 &&
      this.quantidadeCombustivel >= quantosLitros
    ) {
      let valorTotalReais = quantosLitros * this.valorLitro;
      console.log(`A quantidade total a ser paga é ${valorTotalReais} R$`);
      this.quantidadeCombustivel = this.quantidadeCombustivel - quantosLitros;
      console.log(
        `A Quantidade total de Combustivel é ${this.quantidadeCombustivel}`
      );
    } else {
      console.log("Quantidade de combustivél não suficiente");
    }
  }

  public ateraValor(novoValorLitro: number) {
    this.valorLitro = novoValorLitro;
  }

  public alterarCombustivel(novoCombustivel: string) {
    this.tipoCombustivel = novoCombustivel;
  }

  public alterarQuantidadeCombustivel(novaQuantidade: number) {
    if (novaQuantidade <= 0) {
      throw new Error("Quantidade de litros insuficiente para abastecer");
    }
    this.quantidadeCombustivel = novaQuantidade;
  }
}

const abastecimento = new BombaCombustivel();

// abastecimento.abastecerPorValor(600);
// abastecimento.abastecePorLitro(200);
// abastecimento.abastecePorLitro(2500);
// abastecimento.abastecerPorValor(500);
// abastecimento.abastecerPorValor(300);
// abastecimento.abastecePorLitro(2999);
// abastecimento.abastecerPorValor(200);

class Carro {
  private consumo: number;
  private quantidadeCombustivel: number;

  constructor() {
    this.consumo = 12 / 100;
    this.quantidadeCombustivel = 0;
  }

  public andar(quantidadeKm: number) {
    if (this.quantidadeCombustivel > 0) {
      let consumoTotal = quantidadeKm * this.consumo;
      if (consumoTotal <= this.quantidadeCombustivel) {
        this.quantidadeCombustivel = this.quantidadeCombustivel - consumoTotal;
        console.log(
          `O consumo total dessa viagem foi ${consumoTotal}  agora você possui ${this.quantidadeCombustivel}`
        );
      } else {
        console.log("Você não posuui combustivel suficiente para essa viagem");
      }
    } else {
      console.log("Você não tem Gasolina");
    }
  }

  public obterGasolina(): void {
    console.log(` Você tem ${this.quantidadeCombustivel} litros de gasolina`);
  }

  public adicionarGasolina(QuantidadeGasolina: number) {
    this.quantidadeCombustivel += QuantidadeGasolina;

    console.log(
      `Você adicionou ${QuantidadeGasolina} litros de gasolina e agora você possui ${this.quantidadeCombustivel} litros`
    );
  }
}

const carrinho = new Carro();

carrinho.obterGasolina();
carrinho.adicionarGasolina(360);
carrinho.andar(250);
carrinho.andar(1250);
