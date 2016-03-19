var n;

$(document).ready(function(){
	document.getElementById('formulario').onsubmit = function (event) {
		event.preventDefault();
		n = $('#NMuestra').val();
		var $valoresDOM = $('#inputs');
		$valoresDOM.append(
			'<label>Entradas</label>'
		);
		for(var i = 0; i<n; i++){
			$valoresDOM.append(
				'<div><input class="xVal" type="number" placeholder="x'+i+'"/><input class="yVal" type="number" placeholder="y'+i+'"/></div>'
			);
		}

		$valoresDOM.append('<button type="button">Calcular minimos cuadrados</button>')
	};

	document.getElementById('Cancelar').onclick = function(){
		location.href = "index.html";
	};
})
