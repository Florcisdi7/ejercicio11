let diaSemana = prompt("¿Qué día de la semana es hoy?");
switch (diaSemana) {

case "lunes":
alert("Es lunes: caminata intensa 2 hs");
 break;

case "martes":
alert("Es martes: rutina de brazos, hombros, abdominales y cintura.");
 break;

case "miercoles":
alert("Es miércoles: descanso");
 break;

case "jueves":
alert("Es jueves: rutina de abdominales, piernas y glúteos.");
 break;

 case "viernes":
alert("Es viernes: trote intenso 2 hs.");
 break;

case "sabado":
alert("Es sabado: caminata tranquila 1 hora.");
 break;

case "domingo":
alert("domingo descanso.");
 break;

 default:
alert("Escribe el día de la semana en minúsculas y sin acentos.");
}

let numero1 = prompt('ingrese el primer numero del bucle.');
let numero2 = prompt('ingrese el segundo numero del bucle');

for(i = numero1; i <= numero2; i++){
    document.write('num elegido por usuario:' + i + "<br>");
}

for(i=20;i<=70;i++){
    document.write("El número es: " + i + "<br>");
}