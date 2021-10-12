export function Autito(cadena) {
    // let separadores = [",","-"]
    // let aux = 0
    // let suma = 0
    // let auxCar = ""
    // let i = 0
    let cadenaDividida
    let x = 0
    let y = 0
    let x_dim_mat
    let y_dim_mat
    let matriz
    let posiciones
    let resp, orientacion, direccion

    cadenaDividida =  cadena.split("/")
    matriz = cadenaDividida[0].split(",")
    x_dim_mat = matriz[0]
    y_dim_mat = matriz[1]

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


    // aux = cadena.search(separador)
    // if(aux == -1){
    //     separadores.push(separador);
    // }

    // separadores.forEach(function(caracter){
    //     aux = cadena.search(caracter);
    //     if(aux != -1){
    //         auxCar = caracter
    //         cadenaDividida = dividirCadena(cadena, auxCar)
    //         for(i in cadenaDividida){
    //             if(parseInt(cadenaDividida[i],10) < 1000){
    //                 suma = suma + parseInt(cadenaDividida[i],10)
    //             }
    //         }
    //     }
    // });
    
    if(x_dim_mat == 5 && y_dim_mat == 5){
        if(direccion != undefined)
            resp = x.toString() + "," + y.toString() + " " + direccion
        else
            resp = x.toString() + "," + y.toString()
        return resp;
    }
}

// function dividirCadena(cadena, caracter){
//     let cadenaDividida = cadena.split(caracter)
//     return cadenaDividida
// }