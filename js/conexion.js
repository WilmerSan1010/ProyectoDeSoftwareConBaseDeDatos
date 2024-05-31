let lenguaje = require("mysql");

let conexion = lenguaje.createConnection({
    host: "localhost",
    database: "practicasoftware",
    user: "root",
    password: ""
})

conexion.connect(function(error){
    if(error){
        throw error;
        conexion.end();
    }else{
        console.log("conexion exita");
    }
})

const mostrar = "SELECT * FROM perfiles";
conexion.query(mostrar,function(error,lista){
    if(error){
        throw error;
    }else{
        console.log(lista);
    }
})

conexion.end();