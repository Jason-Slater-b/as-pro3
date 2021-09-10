$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});


	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

	// Captura de la combinación de teclas ALT + letras F
	$('body').on("keydown", function(e) { 
		if (e.altKey && e.which === 65) {
			location.href = "Agregar_Empleado.html"
			e.preventDefault();
		}
		if (e.altKey && e.which === 66) {
			location.href = "Eliminar_Empleado.html"
			e.preventDefault();
		}
		if (e.altKey && e.which === 67) {
			location.href = "Modificar_Empleado.html"
			e.preventDefault();
		}
	});

	// Captura de la combinación de teclas ALT + letras
	$('body').on("keydown", function(e) { 
		if (e.altKey && e.which === 74) {
			location.href = "agregar_vacante.html"
			e.preventDefault();
		}
		if (e.altKey && e.which === 75) {
			location.href = "consultar_patrones.html"
			e.preventDefault();
		}
		if (e.altKey && e.which === 76) {
			location.href = "modificar_vacante.html"
			e.preventDefault();
		}
	});
	$("#button").on("click", function(e) { 
		alert("You clicked button");
	});
}
