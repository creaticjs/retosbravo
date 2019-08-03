(function ($) {

  $(function () {

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.datepicker').datepicker();

  }); // end of document ready
})(jQuery); // end of jQuery name space
function aumentosalario(salario) {
  salario=Number(salario);
  if (salario >= 9000) {
    salario += salario * .2;
  }
  if (9001 <= salario && salario < 15000) {
    salario += salario * .1;
  }
  if (15001 <= salario && salario < 20000) {
    salario += salario * .05;
  }
  console.log(salario)
  document.getElementById("nuevosalario").innerHTML = salario;
}

function calculatepi(n) {
  var sumatoria = 0;
  sumatoria = Number(sumatoria);
  for (i = 0; i < n; i++) {
    sumatoria = sumatoria + (Math.pow(-1, i)) / ((2 * i) + 1);
  }
  pi = sumatoria * 4;
  console.log(pi);
  document.getElementById("pi").innerHTML = pi;

}

function grandeypequeño(n) {
  var contador = 0;
  var minimo = 0;
  var maximo = 0;
  n=Number(n);
  var sumat=0;
  while (contador < n) {
    contador++;
    var numero = parseInt(prompt("ingrese un numero :"));
    numero=Number(numero);
    sumat+=numero;

    if (contador == 1) {
      maximo = numero;
      minimo = numero;
    }
    if (contador > 1 && numero > maximo) {
      maximo = numero;
    }
    if (contador > 1 && numero < minimo) {
      minimo =numero;
    }
    
  }
  sumat=sumat/n;
  console.log(maximo, minimo);
  document.getElementById("maximo").innerHTML = maximo;
  document.getElementById("minimo").innerHTML = minimo;
  document.getElementById("promedio").innerHTML = sumat;
}
function pascua(anno) {
  anoo = Number(anno);
  var A = anno % 19;
  var B = anno % 4;
  var C = anno % 7;
  var D = (19 * A + 24) % 30;
  var E = (2 * B + 4 * C + 6 * D + 5) % 7;
  var N = (22 + D + E);
  console.log(N)
  document.getElementById("diademarzo").innerHTML = N;

}

function factorial(f) {
  var fact = 1;
  for (i = 1; i < f + 1; i++) {
    fact = fact * i;
  }
  return fact;
}

function euler(x) {
  var sumatoria = 1;
  for (i = 1; i < 2; i++) {
    f = factorial(i);
    sumatoria = sumatoria + Math.pow(x, i) / (f)
  }
  console.log(sumatoria);
  document.getElementById("euler").innerHTML = sumatoria;

}

function fibonacci(numero)
{
  numero = (numero*12)+1;
    var var1 = 0;
    var var2 = 1;
    var var3;

   
    for(var i=3; i <= numero;i++)
    {
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
          
    }

    document.getElementById("fibonacci").innerHTML = var3;

}

function mcd(a, b) {

  var a= document.getElementById("num1").value;
  var b= document.getElementById("num2").value;

  function mcd2(a, b) {

    var result;
  
    if (a % b > 0) {
      result = mcd(b, a % b);
    } else {
      result = b;
    }
  
    return result;
  } 
  
  var result;

  if (a % b > 0) {
    result = mcd2(b, a % b);
  } else {
    result = b;
  }

  document.getElementById("mcd").innerHTML = result;
}



function serie(nn) {

  sumatoria2 = 0;
  for (i = 1; i <= nn; i++) {
    sumatoria2 += 1 / i;
  }
  document.getElementById("serienn").innerHTML = sumatoria2;

}

function seriedos(n) {

  sumatoria = 0;
  for (i = 1; i <= n; i++) {
    sumatoria += i / 2**i;
  }
  document.getElementById("seriedos").innerHTML = sumatoria;

}


function anobiciesto(ano){
  var mcuatro=ano%4;
  var mcien=ano%100;
  var mcuatrocientos=ano%400;
var biciesto ="El año no es biciesto"
if(mcuatro == 0 && mcien==0 && mcuatrocientos==0 ){
  biciesto="El año es biciesto";    
  }
  if(mcuatro == 0 && mcien!=0 ){
    biciesto="El año es biciesto";    
    }  
  document.getElementById("biciesto").innerHTML= biciesto;
}


function numPerfects(number) {
  
  
  counterPerfects = 1
  var x = 2 
  result=''

  while (counterPerfects <= number) {        
      if (esPrimo(x)) {
          perfect = 2 ** (x - 1) * (2 ** x - 1) //Por ecuación de Euclides
          console.log(perfect)
          result += '<p>'+ perfect+'</p>'
          console.log(result)
          counterPerfects++
      }
      // document.getElementById('result').value=result
      document.getElementById('result').innerHTML=result
      x++
  }
}


function esPrimo(num) {
  let counter = 0
  for (i = num; i > 0; i--) {
      if (num % i == 0) counter++
  }
  if (counter > 2) {
    document.getElementById('primoono').innerHTML="no es primo";
  }
  else document.getElementById('primoono').innerHTML="numero primo";
}

function printast(nast){
  document.getElementById('printast').innerHTML="";
  

  for (i = 1; i <= nast; i++){
    print ="";
    for (j = 1; j <= i; j++){
       print+="*";
    }
  document.getElementById('printast').innerHTML+="<tr><td>"+print+"</td></tr>";
}

}







