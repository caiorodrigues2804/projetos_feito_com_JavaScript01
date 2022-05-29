
	
	// Center
	let c = document.createElement('center')
	document.querySelector('body').append(c)

	/*let colors = document.querySelector('#coloracao').value
	document.querySelector('body').style.backgroundColor = colors 	*/

 	// Input
 	let colores = document.createElement('input')
 	document.querySelector('body').append(colores)


 	// Textos cores
 	let subtitulo = document.createElement('h3')
 	document.querySelector('body').append(subtitulo)
 	subtitulo.style.display = 'inline'

 	colores.type = 'color'
 	setInterval(function() {
 	let lx = colores.value 
 		document.querySelector('body').style.backgroundColor = lx
 		subtitulo.innerHTML = 'A cor decimal é: ' + lx
 	})