
let Coche = {
    marca: "Seat",
    modelo: "Toledo",
    matricula: "1234BCD"
};

let Casa = {
    codPostal: "12345",
    calle: "Falsa",
    portal: "1",
    piso: "5º"
}

let FullStackDeveloper = {
    lenguajes: ["javascript", "python"],
    proyectos: ["web personal", "web concesionario"]
}

let Perro = {
    nombre: "Zambo",
    raza: "perro de aguas",
    color: "marron",
    edad: 5,
    ladrar: function () {
        console.log("Guau")
    },
    popo: function () {
        return Math.random()*3
    }
};





let marcaPortatil = Portatil.marca;

let marcaPortatil2 = Portatil["marca"];

let grupos = Concierto.grupos

// let RGB = Led["rojo"]
// let RGB = Led["verde"]
// let RGB = Led["azul"]


Portatil.modelo = "P345";

Concierto.cartelera = "Guns N' Roses";

Concierto.fecha = new Date();

let objeto = {
    nombreArchivo: "",
    copias: "",
    numPaginas: "",
}
Impresora.imprimiendo = objeto;
console.log(Impresora.imprimiendo);

Impresora.tinta = {
    rojo: 30,
    verde: 45,
    azul: 10
}
let nivelesTinta = Impresora.tinta;


let Noticia = {
    titular:"",
    cuerpo: ""
}

let Persona = {
    nombre:"",
    apellidos:"",
    edad:"",
}

let Avion = {
    numPasajeros: 200,
    despegar: function () {console.log('despegando')},
    volar: function () {console.log("llegando al destino")},
    aterrizar: function() {console.log('aterrizando')}
}

let Paquete = {contenido:[]}

let Pais = {
    numHabitantes: 47000000,
    continente: "Europa",
    gentilicio: "Español/española"
}


let codError = O_Error.codigo;


let integrantes = Grupo.integrantes;
Grupo.numIntegrantes = 5;
console.log(Grupo.numIntegrantes)


let pixeles = Pantalla.pixeles;
Pantalla.dimensiones = "1920x1080";


let especificaciones = Movil.especificaciones;
Movil.temperatura = "20º";


Led.encendido = !(true);

