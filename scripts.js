function pegaValor(valor) {
  var numero = document.getElementById("resultado").innerHTML;

  var teste = (document.getElementById("resultado").innerHTML = numero + valor);
  document.getElementById("display").innerHTML = eval(teste);
}

function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = eval(resultado);
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("display").innerHTML = "";
}
