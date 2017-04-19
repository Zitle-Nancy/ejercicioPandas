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

var contador = 0;
var contador1 = 0;
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
	contador++;
	console.log(contador);
	if(contador == 1){
		texto1.style.display = "none";
	}else{
		texto1.style.display = "inline-block";
	}	
}
function origenEvento(){
	contador1++;
	console.log(contador1);	 //porque toma el valor del contador? no se supone que saliendo de una funcion ya vielve a cero
	if(contador1 == 1){
		txt2.style.display = "none";
	}else{
		txt2.style.display = "inline-block";
	}
	
}
