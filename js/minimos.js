var n;

$(document).ready(function(){
	document.getElementById('formulario').onsubmit = function (event) {
		event.preventDefault();
		n = $('#NMuestra').val();
		var $valoresDOM = $('#inputs');
		for(var i = 0; i<n; i++){
			$valoresDOM.append(
				'<div><input class="xVal" type="number" placeholder="x"/><input class="yVal" type="number" placeholder="y"/></div>'
			);
		}

		$valoresDOM.append('<button type="button">Calcular minimos cuadrados</button>')
	};

	document.getElementById('Cancelar').onclick = function(){
		location.href = "index.html";
	};
})
