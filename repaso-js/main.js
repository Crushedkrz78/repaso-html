// Alertas en JavaScript
//alert('Hola Mundo');

//Creacion de variables
var nombre = "Cristian";
var altura = 170;

var concatenacion = nombre + " " + altura;

// Mostrar valores en Documento HTML
//document.write(nombre);
//document.write(altura);
//document.write(concatenacion);

// var datos = document.getElementById("datos");
//datos.innerHTML = concatenacion;

// Template String HTML
/* datos.innerHTML = `
    <h1>Soy una caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido ${altura} cm</h3>
`; */

// Condicionales
/* if(altura>=190){
    datos.innerHTML += `<h1>Eres una pesona ALTA</h1>`;
} else {
    datos.innerHTML += `<h1>Eres una persona BAJITA</h1>`;
} */

// Loops
/* for(var i = 0; i<=2020; i++){
    // Bloque de instrucciones
    datos.innerHTML += `<h2>Estamos en el año: ${i}</h2>`;
} */

// Funciones
function muestraNombre(nombre, altura){
    // Bloque de instrucciones
    misDatos = `
        <h1>Soy una caja de datos</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <h3>Mido ${altura} cm</h3>
    `;
    return misDatos;
}

function imprimir(){
    // Bloque de instrucciones
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraNombre("Cristian P.", 170);
}

// muestraNombre("Cristian", 170);
imprimir();

// Arrays
var nombres = ["Cristian", "Jose", "Kariz"];
//alert(nombres[2]);
// Iteracion por Loop
for(var i=0; i<nombres.length;i++){
    document.write(nombres[i]+'<br/>');
}

// Iteracion por función For Each
nombres.forEach(function(nombre){
    document.write(nombre+'<br/>');
});

// Iteración por función For Each -> Funcion de flecha
nombres.forEach(nombre => {
    document.write(nombre+'<br/>');
});

//Objectos JSON
var coche = {
    modelo: 'Mercedes CLA',
    max: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.max, this.antiguedad);
    },
    propiedad1: "Valor Aleatorio"
}
document.write("<h1>"+coche.modelo+"</h1>");
document.write("<h1>Velocidad Maxima: "+coche.max+"</h1>");
document.write("<h1>"+coche.antiguedad+"</h1>");

//Ejecutar funcion dentro de un objeto JSON
coche.mostrarDatos();

// Promesas JavaScript
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        //
        let saludo = "Hola cara de bola";
        //saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('No hay saludo disponible');
        }
    }, 2000);
});
//Ejecucion de promesas en JavaScript
saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});