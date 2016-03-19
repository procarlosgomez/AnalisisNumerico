var n;
var $valoresDOM = $('#inputs'),
		$btnCalc = '<button type="button">Calcular minimos cuadrados</button>',
		data = {
			x: [], y: []
		}
;

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
	$valoresDOM.find('input.xVal').each(function(){
		data.xVal.push($(this).val());
	})

	$valoresDOM.find('input.yVal').each(function(){
		data.yVal.push($(this).val());
	})

	console.log(data);
})
