$(document).ready(function(){
	document.getElementById('formulario').onsubmit = function (event) {
		event.preventDefault();
		console.log($('#NMuestra').val());
	};

	document.getElementById('Cancelar').onclick = function(){
		location.href = "index.html";
	};
})
