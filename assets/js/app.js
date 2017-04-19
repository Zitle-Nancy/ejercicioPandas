var cerrar = document.getElementsByClassName('cerrar');
var imagenesPandas = document.getElementsByClassName('imagenesPandas');
var aparecer = document.getElementById('aparecer');
aparecer.addEventListener('click',mostrar);
var extincion = document.getElementById('extincion');
extincion.addEventListener('click',borrarExtincion);

var origen = document.getElementById('origen');
origen.addEventListener('click',origenEvento);

var texto1 = document.getElementById('texto1');
var txt2 = document.getElementById('txt2');
var longitudImagenes = imagenesPandas.length;
var longitud = cerrar.length;

//funcion borrar imagenes
for(var i = 0; i < longitud; i++){
	// console.log(i);
	cerrar[i].addEventListener('click',eliminar);
}
function eliminar(){
	// obtengo el cerrar[i] de mi arreglo con el this
	console.log(this);
	this.style.display = "none";
}
function mostrar(){
	for(var i=0; i<longitudImagenes; i++){
		cerrar[i].style.display = "inline-block";
	}
}
// para eliminar el texto
function borrarExtincion(){
	if(txt2.style.visibility == "hidden"){
		txt2.style.visibility = "visible";
	}else{
		txt2.style.visibility = "hidden";
	}	
}
function origenEvento(){
	if(texto1.style.visibility == "hidden"){
		texto1.style.visibility = "visible";
	}else{
		texto1.style.visibility = "hidden";
	}
}