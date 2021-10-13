const form = document.querySelector("#autito-form");
const cadena = document.querySelector("#comandos");
const div = document.querySelector("#resultado-div");
let x = 0
let y = 0
let xIn, yIn
let comandos
let x_dim_mat, y_dim_mat
let matriz, posiciones, resp, orientacion, direccion, movimientos

function posInicialYOrientacion(cadena) {
    //Posicion inicial y orientacion
    if(cadena != undefined){
        posiciones = cadena.split(",")
        if(posiciones[0] != -1){
            x = parseInt(posiciones[0])
            xIn = parseInt(posiciones[0])
            orientacion = posiciones[1].split(" ")
            
            if(orientacion[1] != undefined){
            y = parseInt(orientacion[0])
            direccion = orientacion[1]
            }
            else
                y = parseInt(posiciones[1])
                yIn = parseInt(posiciones[1])
        }
    }
}

function cambiarDireccion(cadena){
    if(cadena != undefined){
        comandos = cadena
        movimientos = cadena.split("")
        movimientos.forEach(function(movimiento) {
            if(direccion == 'N'){
                if(movimiento == 'I')
                    direccion = 'O'
                if(movimiento == 'D')
                    direccion = 'E'
                if(movimiento == 'A')
                    if(y < y_dim_mat)
                        y = y + 1
            }
            else if(direccion == 'S'){
                if(movimiento == 'I')
                    direccion = 'E'
                if(movimiento == 'D')
                    direccion = 'O'
                if(movimiento == 'A')
                    if(y > 0)
                        y = y -1
            }
            else if(direccion == 'E'){
                if(movimiento == 'I')
                    direccion = 'N'
                if(movimiento == 'D')
                    direccion = 'S'
                if(movimiento == 'A')
                    if(x < x_dim_mat)
                        x = x + 1
            }
            else if(direccion == 'O'){
                if(movimiento == 'I')
                    direccion = 'S'
                if(movimiento == 'D')
                    direccion = 'N'
                if(movimiento == 'A')
                    if(x > 0)
                        x = x - 1
            }
        });
    }
}

function Autito(cadena) {
    let cadenaDividida
    cadenaDividida =  cadena.split("/")

    //Matriz
    matriz = cadenaDividida[0].split(",")
    x_dim_mat = matriz[0]
    y_dim_mat = matriz[1]

    //Posicion inicial y orientacion
    posInicialYOrientacion(cadenaDividida[1]);

    //Comando de movimiento
    cambiarDireccion(cadenaDividida[2]);
    
    if(x_dim_mat == 5 && y_dim_mat == 5){
        if(direccion != undefined)
            resp = x.toString() + "," + y.toString() + " " + direccion
        else
            resp = x.toString() + "," + y.toString()
        return resp;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    Autito(cadena.value);
    posIn = (cadena.value).split();
    let resp = "La posicion inicial es: " + xIn + "," + yIn + "<br>" + " Comandos: " + comandos +"<br>" + " La posicion final es: " + x + "," + y 
    div.innerHTML = "<p>" + resp + "</p>";
});