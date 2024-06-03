class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupanca() {
        // Aplicar taxa de 1,5% ao mês
        this.salario = this.salario * (1 - 0.015);
        return this.salario;
    }

    contaEstudante() {
        // Aplicar taxa de 1,2% ao mês
        this.salario = this.salario * (1 - 0.012);
        return this.salario;
    }

    contaCorrente() {
        // Aplicar taxa de 3,6% ao mês
        this.salario = this.salario * (1 - 0.036);
        return this.salario;
    }

    imprimirDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Salário: R$${this.salario.toFixed(2)}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Agência: ${this.agencia}`);
        console.log(`Conta: ${this.conta}`);
        console.log(`Número da Conta: ${this.numeroConta}`);
    }
}

// Instanciando os objetos
let contaPoupanca = new ContaBancaria('João Silva', 30, 3000, 'M', '0001', 'Poupança', '12345-6');
let contaEstudante = new ContaBancaria('Maria Oliveira', 20, 2000, 'F', '0002', 'Estudante', '65432-1');
let contaCorrente = new ContaBancaria('Pedro Santos', 40, 4000, 'M', '0003', 'Corrente', '78901-2');

// Aplicando as taxas e imprimindo os dados
console.log("Dados da Conta Poupança:");
contaPoupanca.contaPoupanca();
contaPoupanca.imprimirDados();

console.log("\nDados da Conta Estudante:");
contaEstudante.contaEstudante();
contaEstudante.imprimirDados();

console.log("\nDados da Conta Corrente:");
contaCorrente.contaCorrente();
contaCorrente.imprimirDados();