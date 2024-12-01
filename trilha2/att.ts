class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);

        }
    }
}

//EXERCICIO 2


class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;
            
constructor(titulo: string, autor: string, paginas: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = false;
}
            
marcarComoLido(): void {
    this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
}
            

//EXERCICIO 3

class Produto {
    nome: string;
    preco: number;
    quantidade: number;
            
constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    }
            
valorTotalEmEstoque(): number {
    return this.preco * this.quantidade;
    }
}

            

// EXERCICIO 5
class Temperatura {
    valor: number; // em Celsius
            
constructor(valor: number) {
    this.valor = valor;
    }
            
paraFahrenheit(): number {
    return (this.valor * 9/5) + 32;
    }
            
    paraKelvin(): number {
    return this.valor + 273.15;
    }
}



// EXERCICIO 6

class Agenda {
    compromissos: string[];
            
    constructor() {
        this.compromissos = [];
    }
            
adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
    console.log(`Compromisso "${compromisso}" adicionado.`);
    }
            
listarCompromissos(): void {
    console.log("Compromissos:");
                    this.compromissos.forEach(compromisso => console.log(`- ${compromisso}`));
    }
}
