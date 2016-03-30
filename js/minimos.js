var n, m, b, minX, maxX, minY, maxY;
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


//no existe aun por eso lo hago asi
$('body').on('click', '#btnCalc', function(){
	var data = {
		x: [], y: []
	};

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
		sumX = sumY = sumXX = sumXY = 0.0;
		for(var i = 0; i<n; i++){
			sumX += data.x[i];
			sumY += data.y[i];
			sumXX += data.x[i] * data.x[i];
			sumXY += data.x[i] * data.y[i];
		}
	}
	sumData();

	//console.log(sumX, sumY, sumXX, sumXY, n);
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

			var xDomain = [-10, 10]
			var yDomain = [-1.897, 1.897]
			instance.programmaticZoom(xDomain, yDomain)

		}
		catch (err) {
			console.log(err);
			alert(err);
		}
	}

	if(hasError){
		makeLineal();
	}
	/*

	var hasError = false;
	$valoresDOM.find('input.xVal').each(function(){
		if($(this).val() == ''){
			hasError = true;
			$(this).css('border', '1px solid red');
		}

		data.x.push(parseFloat($(this).val()));
	})

	$valoresDOM.find('input.yVal').each(function(){
		if($(this).val() == ''){
			hasError = true;
			$(this).css('border', '1px solid red');
		}

		data.x.push(parseFloat($(this).val()));
	})

	if(hasError){
		alert('Todas las Entradas son obligatorias');
		return;
	}

	function sumData(){
		sumX = sumY = sumXX = sumXY = 0;
		for(var i in data.x){
			sumX += data.x[i];
			sumY += data.y[i];
			sumXX += data.x[i]*data.x[i];
			sumXY += (data.x[i] * data.y[i]);
		}
	}

	function makeLineal(){
		m = (((n*sumXY) - (sumX*sumY)) / ((n*sumXX)-(sumX*sumX)));
		b = ((sumY - (m * sumX))/n);

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


			var xDomain = [-10, 10]
			var yDomain = [-1.897, 1.897]
			instance.programmaticZoom(xDomain, yDomain)

		}
		catch (err) {
			console.log(err);
			alert(err);
		}


	}

	sumData();
	makeLineal();

	console.log('-----');
	console.log(sumX, sumY, sumXX, sumXY);
	console.log(m, b);
	//console.log(m, b);*/
});
