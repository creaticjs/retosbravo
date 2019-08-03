function getP(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", url);
    xhttp.setRequestHeader("X-Auth-Token","0880753c1ec741928eb56823ccb33425");
    xhttp.send();
}
function renderJugador(jugador) {
    document.getElementById("team").innerHTML +=
        "Nombre:" + jugador.name;
    document.getElementById("team").innerHTML +=
        "Estadio:" + jugador.venue;
    document.getElementById("team").innerHTML +=
        "Jugador:" + jugador.squad[0].name;
    document.getElementById("team").innerHTML += "<br>"+
        "Posicion:" + jugador.squad[0].position;
}

function renderTeam(team){
document.getElementById("players").innerHTML="";

for(i=0;i<=33;i++){
   
document.getElementById("players").innerHTML+=

"<div class=\"card col-12 col-md-3 \" >"+
"<img src=\"img/"+team.id+".jpeg\" class=\"card-img-top\" alt=\"...\">"+
"<div class=\"card-body\">"+
"<h5 class=\"card-title\">"+ team.squad[i].name +"</h5>"+
"<p class=\"card-text\">"+ team.squad[i].position+"</p>"+
"<button onclick=\"traerDetalles("+team.squad[i].id+")\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">"+
"  Detalles </button>"+
//"<a onclick=\"traerDetalles("+team.squad[i].id+")\" class=\"btn btn-primary\">Detalles</a>"+
"</div>"+
"</div>"
} 

}

function renderPlayer(player){
    
       //console.log(player.id) 
    document.getElementById("playername").innerHTML=player.name;

    document.getElementById("details").innerHTML=player.nationality;
    

    }
    
function renderScores(scores){
    
document.getElementById("players").innerHTML="";

for(i=0;i<=20;i++){
   
document.getElementById("players").innerHTML+=
"<div class=\"card col-12 col-md-2 \" >"+
"<img src=\"img/avatar.jpg\" class=\"card-img-top\" alt=\"...\">"+
"<div class=\"card-body\">"+
"<h5 class=\"card-title\">"+(i+1)+"  "+ scores.scorers[i].player.name+"</h5>"+
"<p class=\"card-text\"> Equipo: "+ scores.scorers[i].team.name +"</p>"+
"<p class=\"card-text\"> Goles: "+ scores.scorers[i].numberOfGoals +"</p>"+
"</div>"+
"</div>"
//        console.log(scores.scorers[0].player.name) 
     }
} 



function traerDatos(id) {

    getP("https://api.football-data.org/v2/teams/"+id+"", renderTeam);
}

function traerDetalles(id) {

    getP("https://api.football-data.org/v2/players/"+id+"", renderPlayer);
}


function traerGoleadores(id) {

    getP("https://api.football-data.org/v2/competitions/"+id+"/scorers", renderScores);
}


function verificar(){

    console.log("prueba");
}