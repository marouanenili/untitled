
let sejour_id = new URLSearchParams(window.location.search).get("id");
function debut() {
    if (localStorage.getItem('etatConexion') !=null ) {
        if (JSON.parse(localStorage.getItem('etatConexion')).etat){
            id=JSON.parse(localStorage.getItem('etatConexion')).idconexion;
            donnes=JSON.parse(localStorage.getItem('utilisateurs'))[id];
            document.getElementById('name').value =donnes.Name;
            document.getElementById('lastName').value =donnes.LastName;
            document.getElementById('email').value =donnes.email;

        }
    }
    document.title = sejour_id;
    document.getElementById("ville").value = trouversejour(sejour_id).ville;
    document.getElementById("prix").value = trouversejour(sejour_id).prix+'€';
    var ajd = new Date();
    var ajdStr = ajd.getFullYear() + "-" + ajd.getMonth() + '-' + ajd.getDate();
    document.getElementById("depart").setAttribute("min", ajdStr);/* il faut essayer de mettre une valeur mini au date, donc en prenant les msecondes*/
}
class Destination {
    constructor(ville, pays, prix, prixdej, animaux_acceptes, Parking, PetitDejCompris, Wifi) {
        this.prix = prix;
        this.pays = pays;
        this.animaux_acceptes = animaux_acceptes;
        this.Parking = Parking;
        this.PetitDejCompris = PetitDejCompris;
        this.wifi = Wifi;
        this.prixdej = prixdej;
        this.ville = ville;
    }
}

var Sydney = new Destination("Sydney","Australie",100,30,true,false,true,true);
var Casablanca = new Destination("Casablanca","Maroc",90,20,true,false,true,true);
var Ajaccio = new Destination("Ajaccio","Corse",30,15,true,false,true,true);
var Londres = new Destination("Londres","angleterre",250,35,true,false,true,true);
var Merzouga = new Destination("Merzouga","Maroc",90,10,true,false,true,true);
var Chefchaouen = new Destination("Chefchaouen","Maroc",60,10,true,false,true,true);
var Lisbone = new Destination("Lisbone","Portugal",110,20,true,false,true,true);
var Mijas = new Destination("Mijas","Espagne",190,23,true,false,true,true);
var Osaka = new Destination("Osaka","Japon",132,14,true,false,true,true);
var Rio = new Destination("Rio","Bresil",68,25,true,false,true,true);


var villes =[Sydney,Casablanca,Chefchaouen,Ajaccio,Lisbone,Londres,Merzouga,Mijas,Osaka,Rio];

function trouversejour(sejour){
    for (i in villes){
        if ( villes[i].ville===sejour){
            return villes[i]
        }
    }
}

var Nom ;
var Prenom ;
var nbrj;
var prixtot;
var nbradu;
var nbrenf;
var arriver;
var depart;

function Calculprix() {
    Nom =document.forms["reserv"]["Nom"].value;
    Prenom=document.forms["reserv"]["Prenom"].value;
    nbradu = document.forms["reserv"]["nbradu"].value;
    nbrenf = document.forms["reserv"]["nbrenf"].value;
    depart =document.forms["reserv"]["retour"].valueAsDate;
    arriver=document.forms["reserv"]["depart"].valueAsDate;
    nbrj = (depart-arriver) /86400000;
    document.getElementById("nbrJ").value = nbrj;
    console.log(document.getElementById("nbrJ").value);
    var petitdej = document.getElementById("checkbox1");
    var dej=0;
    if (petitdej.checked) {
        console.log(petitdej.checked);
        dej=1}
    prixtot = (nbradu*(trouversejour(sejour_id).prix+trouversejour(sejour_id).prixdej*dej) + nbrenf*(10+trouversejour(sejour_id).prixdej*dej))*nbrj;
    document.getElementById("prix").value = prixtot+'€';
    document.getElementById("prixtot").value = prixtot;
}
function start() {
    let id= localStorage

    let name = new URLSearchParams(window.location.search).get("Nom");
    let lastName = new URLSearchParams(window.location.search).get("Prenom");
    let sejour = new URLSearchParams(window.location.search).get("ville");
    let arriver= new URLSearchParams(window.location.search).get("depart");
    let retour= new URLSearchParams (window.location.search).get("retour");
    let nbrJ= new URLSearchParams (window.location.search).get("nbrJ");
    let prixtotal=new URLSearchParams (window.location.search).get("prixtot");
    let petitdej=new URLSearchParams (window.location.search).get("petitdej");
    let mail= new URLSearchParams (window.location.search).get("mail");
    let nbrEnf=new URLSearchParams (window.location.search).get("nbrenf");
    let nbradu=new URLSearchParams (window.location.search).get("nbradu");
    let numtel=new URLSearchParams (window.location.search).get("tel");
    document.getElementById("Name").innerHTML = name +' '+ lastName ;
    document.getElementById("Country").innerHTML = trouversejour(sejour).pays;
    document.getElementById("Town").innerHTML = sejour;
    document.getElementById("NbrJour").innerHTML =nbrJ;
    document.getElementById("NbrAdu").innerHTML = nbradu;
    document.getElementById("NbrEnf").innerHTML =nbrEnf;
    document.getElementById("Date arrivee").innerHTML = arriver ;
    document.getElementById("Date depart").innerHTML = retour ;
    document.getElementById('petitdej').innerHTML='NON Inclus';
    if (petitdej=='on'){
        document.getElementById('petitdej').innerHTML='Inclus'; }
    document.getElementById("PrixTOT").innerHTML = prixtotal + "€";
    document.getElementById("prixTot2").value = prixtotal + "€";
    document.getElementById("Name2").value = name +' '+ lastName ;
    document.getElementById("Country2").value = trouversejour(sejour).pays;
    document.getElementById("Town2").value = sejour;
    document.getElementById("nbrJour2").value =nbrJ;
    document.getElementById("Date arrivee2").value = arriver ;
    document.getElementById("Date depart2").value = retour ;
    document.getElementById('petitdej2').value= document.getElementById('petitdej').innerHTML;
    document.getElementById("Mail").value = mail;
    document.getElementById("Tel").value = numtel;
    document.getElementById("NbrAdu2").value = nbradu;
    document.getElementById("NbrEnf2").value = nbrEnf;
    obj=JSON.parse(localStorage.getItem('ReservInfo'));
    var elementasupprimer= 'none'
    for (i in obj){
        if (obj[i]['lien']['href']==window.location){
            elementasupprimer=i

            document.getElementById('boutton1').style.display = 'none' ;
            document.getElementById('boutton3').style.visibility ='visible' ;
        }
    }
    localStorage.setItem('ReservInfo', JSON.stringify(obj));


}
function supprimer(){
    obj=JSON.parse(localStorage.getItem('ReservInfo'));
    for (i in obj){
        if (obj[i]['lien']['href']==window.location){
            elementasupprimer=i}}
    obj.splice(elementasupprimer,1);
    localStorage.setItem('ReservInfo', JSON.stringify(obj));
    history.back()
}


function transfertverspanier() {
    var reservations ;
    reservations = (JSON.parse(localStorage.getItem('ReservInfo')) || []);
    reservations.push({number: reservations.length, lien: window.location, idconnected : JSON.parse(localStorage.getItem('etatConexion')).idconexion});
    localStorage.setItem('ReservInfo', JSON.stringify(reservations));
}

