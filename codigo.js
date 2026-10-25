var puntosTotalLocal =0;
var puntosTotalVisita =0;
var foulesLocal=0;
var foulesVisita=0;
             
function sumarPuntosLocal(){
    puntosTotalLocal++;
    console.log(puntosTotalLocal);
    sumL = document.getElementById("puntosLocal");
    sumL.innerHTML = puntosTotalLocal;

}
function sumarPuntosVisita(){
    puntosTotalVisita++;
    console.log(puntosTotalVisita);
    sumV = document.getElementById("puntosVisita");
    sumV.innerHTML = puntosTotalVisita;

}
function sumarFoulLocal(){
    if(foulesLocal>9){
        foulesLocal=0;
        foul_L = document.getElementById("foulesLocal");
        foul_L.innerHTML = foulesLocal;
        console.log(foulesLocal)
    }else{
        foulesLocal++;
        foul_L = document.getElementById("foulesLocal");
        foul_L.innerHTML = foulesLocal;
    }
    
    
    
}
function sumarFoulVisita(){
    foulesVisita++;
    foul_V = document.getElementById("foulesVisita");
    foul_V.innerHTML = foulesVisita;
}

