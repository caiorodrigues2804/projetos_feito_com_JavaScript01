class bixin{
	construtor(careca){
		this.careca = careca 
		console.log(`Ele é um ${this.careca ? 'Sim' : 'Não'}`)
	}
}

let d = new bixin(true)