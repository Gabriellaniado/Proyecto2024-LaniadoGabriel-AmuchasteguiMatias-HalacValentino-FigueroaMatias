/**
 * Variables globales para almacenar la velocidad y la posicion de dos objetos.
 */

var velocidad1;
var velocidad2;
var posicion1;
var posicion2;
var distancia;
var tiempo;

/**
 * Esta funcion "calculo" calcula el tiempo y la posicion de dos objetos que se encuentran, basado en sus velocidades y
 * sus posiciones iniciales, y segun la opcion seleccionada muestra el resultado.
 * @method calculo
 * @return {void} No devuelve ningún valor.
 */
function calculo() {
    velocidad1 = parseFloat(document.getElementById("vel1").value);
    velocidad2 = parseFloat(document.getElementById("vel2").value);
    posicion1 = parseFloat(document.getElementById("pos1").value);
    posicion2 = parseFloat(document.getElementById("pos2").value);

    var op = document.getElementById("opcion").value;

    tiempo = (posicion2 - posicion1) / (velocidad1 - velocidad2); // Calculo del tiempo de encuentro

    if (posicion1 === 0) {
        distancia = velocidad1 * tiempo;
    } else {
        distancia = velocidad1 * tiempo + posicion1; // Calculo posicion de encuentro
    }

    distancia = Math.round(distancia * 100) / 100; // Funcion que redondea a dos decimales
    tiempo = Math.round(tiempo * 100) / 100;

    if (op == "posicion") {
        alert("La posicion de encuentro es: " + parseFloat(distancia) + " m");
    }

    if (op == "tiempo") {
        alert("El tiempo de encuentro es: " + tiempo + " s");
    }
}

/**
 * La funcion "dibujar" anima dos autos moviendose horizontalmente en un canvas basado en la seleccion del usuario
 * de posiciones, imagenes y velocidades, previniendo un choque.
 * @method dibujar
 * @return {void} No devuelve ningún valor.
 */
function dibujar() {
    var canvas = document.getElementById("myCanvas");
    var a1 = canvas.getContext("2d");
    var a2 = canvas.getContext("2d");
    var centerY = canvas.height / 2;

    var auto1 = new Image(100, 20);
    var auto2 = new Image(100, 20);

    var au1 = document.getElementsByClassName("radioauto");
    //El siguiente ciclo recorre el input, al encontrar una casilla que este marcada, devuelve su valor y lo asocia a una imagen.
    for (var i = 0; i < au1.length; i++) {
        if (au1[i].checked) {
            if (au1[i].value === "rojo+") {
                auto1.src = "imagenes/rojo+.png";
            } else if (au1[i].value === "negro+") {
                auto1.src = "imagenes/negro+.png";
            } else {
                auto1.src = "imagenes/azul+.png";
            }
            break;
        }
    }

    var au2 = document.getElementsByClassName("radio-auto");
    for (var j = 0; j < au2.length; j++) {
        if (au2[j].checked) {
            if (au2[j].value === "rojo-") {
                auto2.src = "imagenes/rojo-.png";
            } else if (au2[j].value === "negro-") {
                auto2.src = "imagenes/autonegro-.png";
            } else {
                auto2.src = "imagenes/azul-.png";
            }
            break;
        }
    }

    var x1 = 0;
    var x2 = canvas.width - 80;

    /**
     * La funcion 'animar' anima a dos autos moviendose horizontalmente en un canvas, asegurandose de que no
     * choquen ni se superpongan.
     * @method animar
     * @return {void} No devuelve ningún valor.
     */
    function animar() {
        canvas.width = canvas.width;
        //Dibujo el auto 1
        a1.beginPath();
        a1.drawImage(auto1, x1, centerY - auto1.height / 2, 80, 80);

        //Dibujo el auto 2
        a2.beginPath();
        a2.drawImage(auto2, x2, centerY - auto2.height / 2, 80, 80);

        x1 += velocidad1*0.25; //velocidad a escala
        x2 += velocidad2*0.25;

        if (x1 >= x2 - 90) {
            //Evita que se choquen y superpongan los autos
            cancelAnimationFrame(id);
        } else {
            requestAnimationFrame(animar);
        }
    }
    var id = requestAnimationFrame(animar);
}

/**
 * Función para comprobar si el valor es negativo y mostrar una alerta si no lo es.
 * @method comprobarNegativo
 * @param {number} valor - El valor a comprobar.
 */
function comprobarNegativo(valor) {
    if (valor >= 0) {
        alert("La velocidad 2 debe ser negativa");
        document.getElementById("vel2").value = "";
    }
}

/**
 * La funcion "comprobrarPosicion" cheque que el valor de la posicion 1 sea menor al valor de la
 * posicion 2 y alerta al usuario si no lo es.
 * @method comprobrarPosicion
 * @return {void} No devuelve ningún valor.
 */
function comprobrarPosicion() {
    let pos1 = parseFloat(document.getElementById("pos1").value);
    let pos2 = parseFloat(document.getElementById("pos2").value);

    if (pos1 >= pos2) {
        alert("La posición 1 debe ser menor a la posición 2");
        document.getElementById("pos2").value = "";
    }
}
