var n;
var $valoresDOM = $('#inputs'),
		$btnCalc = '<button type="button">Calcular minimos cuadrados</button>';

$(document).ready(function(){
	document.getElementById('formulario').onsubmit = function (event) {
		event.preventDefault();
		n = $('#NMuestra').val();

		$valoresDOM.append(
			'<label>Entradas</label>'
		);
		for(var i = 0; i<n; i++){
			$valoresDOM.append(
				'<div><input class="xVal" type="number" placeholder="x'+(i+1)+'"/><input class="yVal" type="number" placeholder="y'+(i+1)+'"/></div>'
			);
		}

		$valoresDOM.append($btnCalc)
	};

	document.getElementById('Cancelar').onclick = function(){
		location.href = "index.html";
	};
})

//no existe aun por eso lo hago asi
$('body').on($btnCalc, 'click', function(){
	let data = {
		x: [], y: []
	}
})
