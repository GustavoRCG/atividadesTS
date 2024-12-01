//att1
class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}


const meuCarro = new Carro();
const minhaBicicleta = new Bicicleta();

meuCarro.mover(); 
minhaBicicleta.mover(); 

//att 2

abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}


function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach(figura => {
        console.log(`Área: ${figura.calcularArea()}`);
    });
}


const figuras: FiguraGeometrica[] = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(3, 6)
];

imprimirAreas(figuras);

//att 3

abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    validarCartao(): boolean {
        
        return this.numeroCartao.length === 16; 
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão processado.");
        } else {
            console.log("Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto(): string {
        return "Código do boleto gerado.";
    }

    processar(): void {
        console.log(this.gerarCodigoBoleto());
        console.log("Pagamento via boleto processado.");
    }
}


function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => pagamento.processar());
}


const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567812345678"),
    new PagamentoBoleto()
];

processarPagamentos(pagamentos);

//atividade 4

class Animal {
    private energia: number;

    constructor() {
        this.energia = 100; // Energia inicial
    }

    comer(): void {
        this.energia += 10; // Aumenta energia ao comer
    }

    statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        this.statusEnergia(); 
        this.energia -= 20; 
        super.comer(); 
    }
}

class Passaro extends Animal {
    comer(): void {
        this.statusEnergia(); 
        super.comer();
    }
}

const leao = new Leao();
const passaro = new Passaro();

leao.comer(); 
leao.statusEnergia(); 

passaro.comer(); 
passaro.statusEnergia(); 

//atividade 5

abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    
    abstract calcularBonus(): number;

    
    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }

    
    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario.toFixed(2)}, Salário com Bônus: R$${this.calcularSalarioComBonus().toFixed(2)}`);
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.10; 
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05; 
    }
}


function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        funcionario.exibirInformacoes();
    });
}
