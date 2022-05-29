 


 //1) CRIANDO CLASSE
 /*class ContaBancaria{
 	// Agencia
 	// NúmeroConta
 	// Saldo
 	// Limite
 constructor(){
 	this.agencia = 10482
 	this.numeroConta = 3351125
 	this.saldo = 50
 	this.limite = 450

 	}

 }
 */




 //2) AÇÕES
 /*class ContaBancaria{
 	// Agencia
 	// NúmeroConta
 	// Saldo
 	// Limite
 constructor(){
 	this.agencia = 10482
 	this.numeroConta = 3351125
 	this.saldo = 50
 	this.limite = 450

 	}
 	depositar(valorDeposito){

 		this.saldo += valorDeposito
 	}
 	sacar(valorSaque){

 		this.saldo -= valorSaque
 		//this.saldo = this.saldo - valorSaque
 		 
 	}
 	consultarSaldo(){
 		return this.saldo
 	}

 }
 */




 //3) ENTIDADE E IDENTIDADE
 /*
 class ContaBancaria{
 	// Agencia
 	// NúmeroConta
 	// Saldo
 	// Limite
 constructor(){
 	this.agencia = 10482
 	this.numeroConta = 3351125
 	this.saldo = 50
 	this.limite = 450

 	}
 	depositar(valorDeposito){

 		this.saldo += valorDeposito
 	}
 	sacar(valorSaque){

 		this.saldo -= valorSaque
 		//this.saldo = this.saldo - valorSaque
 		 
 	}
 	consultarSaldo(){
 		return this.saldo
 	}

 }

  let x = new ContaBancaria()
  let y = new ContaBancaria()
  console.log(x.consultarSaldo())
  x.depositar(450)
  console.log(x.consultarSaldo())
  x.sacar(200)
  console.log(x.consultarSaldo())
  */





 //Conta Bancária Y
 class ContaBancaria{
 	// Agencia
 	// NúmeroConta
 	// Saldo
 	// Limite
 constructor(){
 	this.agencia = 10482
 	this.numeroConta = 3351125
 	this.saldo = 50
 	this.limite = 450

 	}
 	depositar(valorDeposito){

 		this.saldo += valorDeposito
 	}
 	sacar(valorSaque){

 		this.saldo -= valorSaque
 		//this.saldo = this.saldo - valorSaque
 		 
 	}
 	consultarSaldo(){
 		return this.saldo
 	}

 }

  let x = new ContaBancaria()
  let y = new ContaBancaria()
  console.log(x.consultarSaldo())
  x.depositar(450)
  console.log(x.consultarSaldo())
  x.sacar(200)
  console.log(x.consultarSaldo())
  
  console.log(y.consultarSaldo())