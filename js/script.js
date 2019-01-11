(function(){
	//variables generales
	var listaA = document.getElementById("listA"),
		listaB = document.getElementById("listB"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar"),
		btnIzquie = document.getElementById("toLeft"),
		btnDere = document.getElementById("toRight"),
		btnDelete = document.getElementById("del"),
		btnElimTodo = document.getElementById("delAll"),
		form = document.getElementById("form");

	//funciones
		var agregarTarea = function(){
			var tarea = tareaInput.value,
				nuevaTarea = document.createElement("li"),
				contenido = document.createTextNode(tarea);

			if(tarea === ""){
				tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
				tareaInput.className = "error";
				return false;
			}

			//agregar contenido al li(nueva tarea)
			nuevaTarea.appendChild(contenido);

			if(form.rad[0].checked == true){
				listaA.appendChild(nuevaTarea);
				tareaInput.value = "";

			}

			if(form.rad[1].checked == true){
				listaB.appendChild(nuevaTarea);
				tareaInput.value = "";
			}

			//******** seleccionar ********
			for (var i = 0; i < listaA.children.length; i++) {
				listaA.children[i].addEventListener("click", seleccionar);
			}

			for (var i = 0; i < listaB.children.length; i++) {
				listaB.children[i].addEventListener("click", seleccionar);
			}
			//################
		};

		var comprobarInput = function(){
			tareaInput.className = "";
			tareaInput.setAttribute("placeholder","Agregar tarea");
		};

		var seleccionar = function(){
			
			if(this.className == "current"){
				
				this.className = "";
			}else{
				
				for (var i = 0; i < listaA.children.length; i++) {
					listaA.children[i].className = "";
				}
				for (var i = 0; i < listaB.children.length; i++) {
					listaB.children[i].className = "";
				}
				this.className = "current";
			}
			
			
		};

		var eliminar = function(){
			for (var i = 0; i < listaA.children.length; i++) {
				if(listaA.children[i].className == "current"){
					listaA.children[i].remove(this);
				}
			}
			

			for (var i = 0; i < listaB.children.length; i++) {
				if(listaB.children[i].className == "current"){
					listaB.children[i].remove(this);
				}
			}

		};

		var eliminarTodo = function(){
			var i = 0;
			while(i < listaA.children.length){
				listaA.children[0].remove(this);
			}
			

			while(i < listaB.children.length){
				listaB.children[0].remove(this);
			}
			
		};

		var moverDerecha = function(){
			for (var i = 0; i < listaA.children.length; i++) {
				if(listaA.children[i].className == "current"){
					listaB.appendChild(listaA.children[i]);
				}
			}
		};

		var moverIzquierda = function(){
			for (var i = 0; i < listaB.children.length; i++) {
				if(listaB.children[i].className == "current"){
					listaA.appendChild(listaB.children[i]);
				}
			}
		};

		

	//eventos

	//agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	//comprobar input
	tareaInput.addEventListener("click", comprobarInput);

	//eliminar current
	btnDelete.addEventListener("click", eliminar);

	//eliminar todo
	btnElimTodo.addEventListener("click", eliminarTodo);

	//mover a la derecha
	btnDere.addEventListener("click", moverDerecha);

	//mover a la izquierda
	btnIzquie.addEventListener("click", moverIzquierda);

	for (var i = 0; i < listaA.children.length; i++) {
		listaA.children[i].addEventListener("click", seleccionar);
	}

	for (var i = 0; i < listaB.children.length; i++) {
		listaB.children[i].addEventListener("click", seleccionar);
	}

}());