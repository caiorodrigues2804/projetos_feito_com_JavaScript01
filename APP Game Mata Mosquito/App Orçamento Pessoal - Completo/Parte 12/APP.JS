	class Despesa{
		constructor(ano,mes,dia,tipo,descricao,valor){
			this.ano=ano
			this.mes=mes
			this.dia=dia
			this.tipo=tipo
			this.descricao=descricao
			this.valor=valor
		}

		validarDados() {
		for(let i in this){
		 if (this[i] == undefined || this[i] == '' || this[i]==null) {
		 	return false
		 }
		}
		return true
	}
}
	 
 
class Bd{
	constructor(){
			let  id = localStorage.getItem('id') //null
			if (id === null) {
				localStorage.setItem('id',0)
			} 
	}
	getProximoId(){
	let ProximoId = localStorage.getItem('id') //null
	return parseInt(ProximoId) + 1
	}

  gravar(d) {
	 
		let id = this.getProximoId()
		localStorage.setItem(id,JSON.stringify(d))
		localStorage.setItem('id', id)
	}
	recuperarTodosRegistros(){

		//Array de despesas
		let despesas = Array()

		let id = localStorage.getItem('id')

		//Recuperar todas as despesas cadsatradas em localStorage
		for(let i = 1; i <= id; i++){
			//Recuperar a despesa
			let despesa = JSON.parse(localStorage.getItem(i))

			//Existe a possibilidade de haver indices que foram pulados/ removidos
			// Nestes casos nós vamos pular esses indices
			if (despesa === null) {
				continue
			}
			despesas.push(despesa)
		}
	return despesas
	}
}
let bd = new Bd() 
 
	function cadastrarDespesa() {
			
		let ano =document.getElementById('ano')
		let mes = document.getElementById('mes') 
		let dia = document.getElementById('dia')
		let tipo = document.getElementById('tipo')
		let descricao = document.getElementById('descricao')
		let valor = document.getElementById('valor')
		// console.log()

		let despesa = new Despesa(
			ano.value, 
			mes.value, 
			dia.value, 
			tipo.value, 
			descricao.value, 
			valor.value
			)
	 if(despesa.validarDados()){
	 bd.gravar(despesa)
	 document.getElementById('modal_titulo_div').className = '	 modal-header text-success'
	 document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
	 document.getElementById('modal_conteudo').innerHTML =      'Despesa foi cadastrada com sucesso'
	 document.getElementById('modal_btn').innerHTML = 'Voltar'
	 document.getElementById('modal_btn').className = 'btn btn-success'
	 //Dialog de sucesso
	 $('#modalRegistraDespesa').modal('show')
	 } else{
	 	
	 document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
	 document.getElementById('modal_titulo').innerHTML = 'Erro na inclusão do registro'
	 document.getElementById('modal_conteudo').innerHTML =  'Erro na gravação, verifique se todos os campos foram preenchidos corretamente'
	 document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'
 	 document.getElementById('modal_btn').className = 'btn btn-danger'

	   //Dialog de erro
	 $('#modalRegistraDespesa').modal('show')
	 }
	}

	function carregaListaDespesas() {
		let despesas = Array()
		despesas = bd.recuperarTodosRegistros()
		// Selecionando o elemento tbody da tabela
		let listaDespesas = document.getElementById('listaDespesas')
		/*
		    <tr>
                0= <td>15/03/2021</td>
                1= <td>Alimentação</td>
                2= <td>Compras do mês</td>
                3= <td>444.75</td>
              </tr>
		*/
		// Percorrer o array despesas, listando cada despesa de forma dinâmica
		despesas.forEach(function(d) {

			console.log(d)

			//Criando a linha (tr)
			let linha = listaDespesas.insertRow()
			//Criandos as colunas no JavaScript
			// Criar as colunas (td)
			linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`  

			// Ajustar o tipo
			// Switch cases
			switch(d.tipo){
				case '1': d.tipo = 'Alimentação'
					break
				case '2': d.tipo = 'Educação'
					break
				case '3': d.tipo = 'Lazer'
					break	
				case '4': d.tipo = 'Saúde'
					break	
				case '5': d.tipo = 'Transporte'
					break	
											
			}
			linha.insertCell(1).innerHTML = d.tipo

			linha.insertCell(2).innerHTML = d.descricao
			linha.insertCell(3).innerHTML = 'R$ ' + d.valor
		})
	}
	