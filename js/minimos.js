var n, m, b, min = {x: null, y: null}, max={x: null, y: null};
var hasError = false;
var	sumX = sumY = sumXX = sumXY = 0;
var $valoresDOM = $('#inputs'),
		$btnCalc = '<button type="button" id="btnCalc">Calcular minimos cuadrados</button>',
		data = {
			x: [], y: []
		}
;

$(document).ready(function(){
	document.getElementById('formulario').onsubmit = function (event) {
		event.preventDefault();
		n = parseInt($('#NMuestra').val());

		$valoresDOM
			.empty()
			.append(
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

//desuscribir evento
$('body').off('click', '#btnCalc');

//no existe aun por eso lo hago asi
$('body').on('click', '#btnCalc', function(){
	var data = {
		x: [], y: []
	};
	hasError = false;

	for(var i = 0; i<n; i++){
		$xInput = $valoresDOM.find('input.xVal').eq(i);
		$yInput = $valoresDOM.find('input.yVal').eq(i);

		var xValue = parseFloat($xInput.val());
		var yValue = parseFloat($yInput.val());

		if(isNaN(xValue)) {
			hasError = true;
			$xInput.css('border', '1px solid red');

		}
		if(isNaN(yValue)) {
			hasError = true;
			$yInput.css('border', '1px solid red');
		}

		data.x.push(xValue);
		data.y.push(yValue);
	}

	if(hasError){
		alert('Todas las Entradas son obligatorias');
		return;
	}

	function sumData(){
		min = {x: null, y: null}, max={x: null, y: null};
		sumX = sumY = sumXX = sumXY = 0.0;

		for(var i = 0; i<n; i++){
			sumX += data.x[i];
			sumY += data.y[i];
			sumXX += data.x[i] * data.x[i];
			sumXY += data.x[i] * data.y[i];

			//minimos
			if(min.x === null)	min.x = data.x[i];
			else if(data.x[i] < min.x) 	min.x	= data.x[i];

			if(min.y === null)	min.y = data.y[i];
			else if(data.y[i] < min.y) 	min.y	= data.y[i];

			//maximos
			if(max.x === null)	max.x = data.x[i];
			else if(data.x[i] > max.x) 	max.x	= data.x[i];

			if(max.y === null)	max.y = data.y[i];
			else if(data.y[i] > max.y) 	max.y	= data.y[i];
		}
	}
	sumData();

	function makeLineal(){
		m = ((n*sumXY) - (sumX*sumY)) / ((n*sumXX)-(sumX*sumX));
		b = (sumY - (m * sumX))/n;

		var points = [];
		for(i = 0; i<n; i++){
			points.push([
				data.x[i], data.y[i]
			])
		}

		dataPlot = [{
				fn: 				m+'x+'+b,
				sampler:		'builtIn',  // this will make function-plot use the evaluator of math.js
				graphType:	'polyline'
			},
			{
				points: 		points,
				fnType: 		'points',
				graphType:	'scatter'
			}
		];

		try {
			var instance = functionPlot({
				target: '#plotLineal',
				data: dataPlot
			});

			var xDomain = [min.x-1, max.x+1]
			var yDomain = [min.y-1, max.y+1]
			instance.programmaticZoom(xDomain, yDomain)

		}
			catch (err) {
		 console.log(err);
			alert(err);
		}
	}

	function errorPorcentual(){
		se=0;
		e=[];
		for (i=0;i<n;i++){
			e[i]=Math.abs((data.y[i]-(m*data.x[i]+b))/data.y[i]);
			se+=e[i];
		}

		console.log(se);
	}

	if(!hasError){
		makeLineal();
		errorPorcentual();
	}

});
