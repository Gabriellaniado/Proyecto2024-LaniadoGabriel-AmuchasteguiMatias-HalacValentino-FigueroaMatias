var velocidad1;
var velocidad2;
var posicion1;
var posicion2;
var distancia;
var tiempo;

function calculo (){
    
    velocidad1 = document.getElementById("vel1").value;
    velocidad2 = document.getElementById("vel2").value;
    posicion1 = document.getElementById("pos1").value;
    posicion2 = document.getElementById("pos2").value;

    var op = document.getElementById("opcion").value;

    tiempo = (posicion2-posicion1) / (velocidad1-velocidad2);
    distancia = posicion1 + velocidad1 * tiempo;

    distancia = Math.round(distancia * 100) / 100;
    tiempo = Math.round(tiempo * 100) / 100;

    if(op == "posicion") {
        alert("La posicion de encuentro es: "+ distancia + " m");
    }

    if(op == "tiempo")
    {
        alert("El tiempo de encuentro es: " + tiempo + " s");
    }

}
