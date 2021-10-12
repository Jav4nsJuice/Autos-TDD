export function Autito(cadena) {
    let cadenaDividida
    let x = 0
    let y = 0
    let x_dim_mat
    let y_dim_mat
    let matriz
    let posiciones
    let resp, orientacion, direccion, mov, movimientos

    cadenaDividida =  cadena.split("/")

    //Matriz
    matriz = cadenaDividida[0].split(",")
    x_dim_mat = matriz[0]
    y_dim_mat = matriz[1]

    //Posicion inicial y orientacion
    if(cadenaDividida[1] != undefined){
        posiciones = cadenaDividida[1].split(",")
        if(posiciones[0] != -1){
            x = parseInt(posiciones[0])
            
            orientacion = posiciones[1].split(" ")
            
            if(orientacion[1] != undefined){
            y = parseInt(orientacion[0])
            direccion = orientacion[1]
            }
            else
                y = parseInt(posiciones[1])
        }
    }

    //Comando de movimiento
    if(cadenaDividida[2] != undefined){
        movimientos = cadenaDividida[2].split("")
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
        //mov = cadenaDividida[2]
    }
    
    if(x_dim_mat == 5 && y_dim_mat == 5){
        if(direccion != undefined)
            resp = x.toString() + "," + y.toString() + " " + direccion
        else
            resp = x.toString() + "," + y.toString()
        return resp;
    }
}
