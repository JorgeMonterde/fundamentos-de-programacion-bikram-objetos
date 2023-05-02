
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





let Portatil = {
    modelo: "el que sea",
};
Portatil.modelo = "P345";


let Concierto = {
    cartelera: "Guns N' Roses",
};
Concierto.fecha = "new Date() 2023-05-02";

let Impresora = {};
let objetoConPropiedades = {
    nombreArchivo: "Mi tesis",
    copias: 3,
    numPaginas: 12
}
Impresora.imprimiendo = objetoConPropiedades;
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

let persona = {
    nombre: "Juan",
    apellidos: "Lopez Rodriguez",
    edad: 38
}

let Avion = {
    numPasajeros: 200,
    despegar: function () {console.log('despegando')},
    volar: function () {console.log("llegando al destino")},
    aterrizar: function() {console.log('aterrizando')}
}

let Paquete = {
    "array contenido": ["Libro1","Libro2","Libro3"]
}

let Pais = {
    numHabitantes: 47000000,
    continente: "Europa",
    gentilicio: "Español/española"
}

let O_Error = {
    codigo: "console.log()"
}
let codError = O_Error.codigo;

let Grupo = {
    integrantes: ["pepe","maria","lara","juan"]
}
let integrantes = Grupo.integrantes;
Grupo.numIntegrantes = 5;
console.log(Grupo.numIntegrantes)

let Pantalla = {
    pixeles: [[2,4],[5,8]],
}
let pixeles = Pantalla.pixeles;
Pantalla.dimensiones = "1920x1080";

let Movil = {
    especificaciones: ["especificaciones"],
}
let especificaciones = Movil.especificaciones;
Movil.temperatura = "20º";

let Led = {};
Led.encendido = !(true);

