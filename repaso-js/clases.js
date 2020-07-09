class coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad(){
        this.velocidad -= 1;
    }
}

class Autobus extends coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es: "+this.altura;
    }
}

var autobus1 = new Autobus('Dina', 160, 2012);
console.log(autobus1);
autobus1.aumentarVelocidad()
console.log(autobus1);
console.log(autobus1.mostrarAltura());

var coche1 = new coche('BMW', 200, 2017);
var coche2 = new coche('Audi', 100, 2018);
var coche3 = new coche('Mercedes Benz', 200, 2019);

//console.log(coche1);
document.write('<h1>Velocidad: '+coche1.velocidad+'</h1>');
coche1.aumentarVelocidad();
document.write('<h1>Velocidad: '+coche1.velocidad+'</h1>');
//console.log(coche1);
