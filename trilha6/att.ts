//att1
class Pedido {
    private itens: string[] = [];
    private precoTotal: number = 0;
    private statusPagamento: string = "Pendente";
    private statusEnvio: string = "Não Enviado";

    adicionarItem(item: string, preco: number): void {
        this.itens.push(item);
        this.precoTotal += preco;
    }

    calcularPrecoTotal(): number {
        return this.precoTotal;
    }

    processarPagamento(): void {
        this.statusPagamento = "Pago";
    }

    atualizarStatusEnvio(status: string): void {
        this.statusEnvio = status;
    }

    obterDetalhesPedido(): object {
        return {
            itens: this.itens,
            precoTotal: this.precoTotal,
            statusPagamento: this.statusPagamento,
            statusEnvio: this.statusEnvio,
        };
    }
}

//refatoração
class Carrinho {
    private itens: { nome: string; preco: number }[] = [];

    adicionarItem(nome: string, preco: number): void {
        this.itens.push({ nome, preco });
    }

    calcularPrecoTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }

    obterItens(): { nome: string; preco: number }[] {
        return this.itens;
    }
}

class Pagamento {
    private status: string = "Pendente";

    processarPagamento(): void {
        this.status = "Pago";
    }

    obterStatusPagamento(): string {
        return this.status;
    }
}

class Envio {
    private status: string = "Não Enviado";

    atualizarStatus(status: string): void {
        this.status = status;
    }

    obterStatusEnvio(): string {
        return this.status;
    }
}

class Pedido {
    private carrinho: Carrinho;
    private pagamento: Pagamento;
    private envio: Envio;

    constructor() {
        this.carrinho = new Carrinho();
        this.pagamento = new Pagamento();
        this.envio = new Envio();
    }

    adicionarItem(nome: string, preco: number): void {
        this.carrinho.adicionarItem(nome, preco);
    }

    processarPagamento(): void {
        this.pagamento.processarPagamento();
    }

    atualizarStatusEnvio(status: string): void {
        this.envio.atualizarStatus(status);
    }

    obterDetalhesPedido(): object {
        return {
            itens: this.carrinho.obterItens(),
            precoTotal: this.carrinho.calcularPrecoTotal(),
            statusPagamento: this.pagamento.obterStatusPagamento(),
            statusEnvio: this.envio.obterStatusEnvio(),
        };
    }
}

//att2
class GerenciadorDeUsuarios {
    criarUsuario(nome: string, email: string): void {
        console.log(`Usuário ${nome} criado com o email ${email}.`);
        this.enviarNotificacao(email);
    }

    enviarNotificacao(email: string): void {
        console.log(`Notificação enviada para ${email}.`);
    }
}
//refatoração

class NotificacaoPorEmail {
    enviar(email: string): void {
        console.log(`Notificação enviada para ${email}.`);
    }
}

class GerenciadorDeUsuarios {
    private notificacaoPorEmail: NotificacaoPorEmail;

    constructor() {
        this.notificacaoPorEmail = new NotificacaoPorEmail();
    }

    criarUsuario(nome: string, email: string): void {
        console.log(`Usuário ${nome} criado com o email ${email}.`);
        this.notificacaoPorEmail.enviar(email);
    }
}
//att3
class EnviadorDeEmail {
    enviarEmail(email: string, mensagem: string): void {
        if (this.validarEmail(email)) {
            console.log(`Email enviado para ${email}: ${mensagem}`);
        } else {
            console.log(`Email inválido: ${email}`);
        }
    }

    validarEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}
//refatoração
class ValidadorDeContato {
    validar(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

class EnviadorDeEmail {
    private validador: ValidadorDeContato;

    constructor() {
        this.validador = new ValidadorDeContato();
    }

    enviarEmail(email: string, mensagem: string): void {
        if (this.validador.validar(email)) {
            console.log(`Email enviado para ${email}: ${mensagem}`);
        } else {
            console.log(`Email inválido: ${email}`);
        }
    }
}console.log("Iniciando o sistema de pedidos...");
console.log("Sistema de pedidos iniciado com sucesso!");