var cerrar = document.getElementsByClassName('cerrar');
var imagenesPandas = document.getElementsByClassName('imagenesPandas');

var longitudImagenes = imagenesPandas.length;
var longitud = cerrar.length;
//funcion borrar imagenes
for(var i = 0; i < longitud; i++){
	// console.log(i);
	cerrar[i].addEventListener('click',function(){
		this.style.display = "none";
	});

}
//funcion mostrar imagenes
for(var j=0; j < longitudImagenes; j++){
		imagenesPandas[j].addEventListener('click',function(){
			this.style.visibility = "visible";
		});
}

// function mostrar(){
	
// }