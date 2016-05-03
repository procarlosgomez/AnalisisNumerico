$(document).ready(function(){
	 document.getElementById('Volver').onclick = function(){
		location.href = "index.html";
	};
})

function puntoFijo(ecuacion){
  var x = 1;
  var resultado = 0;
  var comparador;
  var contador = 0;
  var vect = [];

  do {
      comparador = resultado;
      //Convergente.
      //resultado = Math.pow((x + 3) / ((Math.pow(x, 2)) + 2), 0.5);
      //Convergente
      resultado = math.eval(ecuacion, {x: x});
      //son iguales
      //resultado = Math.pow(((x+3-(Math.pow(x,4)))/2),0.5);
      //excede el limite por exponencial
      //resultado = Math.pow((x+2),2);
      //incremental

      vect[contador] = resultado;
      x = resultado;
      contador += 1;
      var Indefinido = comparador;
      //Si la funcion tiene un error por superar el limite de caracteres
      if (Indefinido==("Infinity")) {
        console.log("No es Convergente, excede el limite por exponencial");
        return;
      }
      //las interacciones de la fuincion son iguales eje [1,2,1,2,1,2,1,2]
      if (contador >= 7) {
          if (vect[contador - 1] == vect[contador - 3] & vect[contador - 1] == vect[contador - 5] &
              vect[contador - 2] == vect[contador - 4] & vect[contador - 2] == vect[contador - 6]) {
              console.log("No es Convergente, iguales");
              return;
          }
          //si es incremental cierra el ciclo
          if (vect[contador - 6] > vect[contador - 5] & vect[contador - 5] > vect[contador - 4] &
              vect[contador - 4] > vect[contador - 3] & vect[contador - 3] > vect[contador - 2] &
              vect[contador - 2] > vect[contador - 1]) {
              console.log("No es Convergente, incremental");
              return;
          }
      }
      //System.out.println("posicion: " + contador + " ans= " + resultado);
  } while (comparador != resultado);
  //imprime las interacciones cuando es convergente
  for (var i = 0; i < contador - 1; i++) {
    console.log("Posicion: " + (i + 1) + " Resultado: " + vect[i]);
  }
  //imprime el valor convergente y la interaccion
  console.log("\nInterpolacion: " + (resultado) + "\nPosicion: " + (contador - 1));
}

function newtonRaphson(ecuacion, dEcuacion, xIni){
	if(math.eval(dEcuacion, {x}) === 0){
		alert('La derivada de la funcion no debe ser igual a 0')
		return;
	}

	var resultado = 0, comparador;
  var contador = 0;
  var vect = [99999];

	var x = Xini;
  do {
      comparador = resultado;

      //Pn - (f(x)/f'(x));
      //succesfull
			resultado = x - (math.eval(ecuacion, {x: x})/math.eval(dEcuacion, {x: x}));

      //resultado = Pn - ((Math.pow(Math.E, Pn-2)-Math.pow(Pn, 2)+7)/(Math.pow(Math.E, Pn-2)-(2*Pn)));
      vect[contador] = resultado;
      x = resultado;
      contador += 1;
      var Indefinido = comparador;
      //Si la funcion tiene un error por superar el limite de caracteres
      if (Indefinido==("Infinity")) {
        console.log("No es Convergente, excede el limite por exponencial");
        return;
      }
      //las interacciones de la fuincion son iguales eje [1,2,1,2,1,2,1,2]
      if (contador >= 7) {
          if (vect[contador - 1] == vect[contador - 3] & vect[contador - 1] == vect[contador - 5] &
              vect[contador - 2] == vect[contador - 4] & vect[contador - 2] == vect[contador - 6]) {
                console.log("No es Convergente, iguales");
                return;
          }
          //si es incremental cierra el ciclo
          if (vect[contador - 6] - vect[contador - 5] > (vect[contador - 5] - vect[contador - 4]) &
              vect[contador - 5] - vect[contador - 4] > (vect[contador - 4] - vect[contador - 3]) &
              vect[contador - 4] - vect[contador - 3] > (vect[contador - 3] - vect[contador - 2])) {
                console.log("No es Convergente, incremental");
                return;
          }
      }
      //System.out.println("posicion: " + contador + " ans= " + resultado);
  } while (comparador != resultado);
  //imprime las interacciones cuando es convergente
  for (var i = 0; i < contador - 1; i++) {
    console.log("Posicion: " + (i + 1) + " Resultado: " + vect[i]);
  }
  //imprime el valor convergente y la interaccion
  console.log("\nInterpolacion: " + (resultado) + "\nPosicion: " + (contador - 1));
}

$('#entradas a').on('click', function(e){
	e.preventDefault();
	$('#entradas a').removeClass('selected');
	$(this).addClass('selected');
	$('#entradas .datos').removeClass('selected');
	$('#entradas .datos').eq($(this).index()).addClass('selected');
});

$('form').on('submit', function(e){
	e.preventDefault();
	var fun = $('#entradas a.selected').index();

	var data = $(this).find('.datos.selected .ecuacion').val();

	switch (fun) {
		case 0:
			puntoFijo(data);
			break;
		case 1:
			var dEcuacion = $(this).find('.datos.selected .dEcuacion').val();
			var xIni = parseInt($(this).find('.datos.selected .xIni').val());
			newtonRaphson(data, dEcuacion, xIni);
			break;
		case 2:
			break;
	}

	//((x+3)/(x^2+2))^1/2

});
/*puntoFijo();
newtonRaphson();*/
