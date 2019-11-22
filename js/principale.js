class Destination {
    constructor(continent,ville, pays, prix, prixdej, animaux_acceptes, Parking, PetitDejCompris, Wifi, AirC) {
        this.prix = prix;
        this.pays = pays;
        this.animaux_acceptes = animaux_acceptes;
        this.Parking = Parking;
        this.PetitDejCompris = PetitDejCompris;
        this.wifi = Wifi;
        this.prixdej = prixdej;
        this.ville = ville;
        this.AirC = AirC;
        this.continent=continent;
    }
}

var Sydney = new Destination('Oceanie',"Sydney","Australie",100,30,true,false,true,true, true);
var Casablanca = new Destination('Afrique',"Casablanca","Maroc",90,20,true,true,true,true, true);
var Ajaccio = new Destination('Europe',"Ajaccio","Corse",30,15,true,false,true,true, false);
var Londres = new Destination('Europe',"Londres","Angleterre",250,35,true,true,true,true, true);
var Merzouga = new Destination('Afrique',"Merzouga","Maroc",90,10,true,true,true,true, false);
var Chefchaouen = new Destination('Afrique',"Chefchaouen","Maroc",60,10,true,false,true,true, false);
var Lisbone = new Destination('Europe',"Lisbone","Portugal",110,20,true,false,true,true, true);
var Mijas = new Destination('Europe',"Mijas","Espagne",190,23,true,false,true,true, true);
var Osaka = new Destination('Asie',"Osaka","Japon",132,14,true,false,true,true, true);
var Rio = new Destination('Amerique du Sud',"Rio","Bresil",68,25,true,true,true,true, false);


var villes =[Sydney,Casablanca,Chefchaouen,Ajaccio,Lisbone,Londres,Merzouga,Mijas,Osaka,Rio];
function filtre() {
    var liste=[];

    for (i in villes) {
        document.getElementById(villes[i].ville).style.display = ""
    }
    for (i in villes) {

        if (document.getElementById("pays-select").value !=="tout les pays" && document.getElementById("pays-select").value !==villes[i].pays) {


            liste =liste+[i];
        }
    }
    for (i in villes) {


        if (document.getElementById("prixmin").value >= villes[i].prix) {
            liste =liste+[i];

        }
    }
    for (i in villes) {
         if (document.getElementById("prixmax").value <= villes[i].prix) {
             liste =liste+[i];
         }}

    for (i in villes) {
         if (document.getElementById("parking").checked ===true && villes[i].Parking===false) {
             liste =liste+[i];
        }}
    for (i in villes) {
         if (document.getElementById("wifi").checked===true &&  villes[i].wifi===false) {
             liste =liste+[i];
         }}
    for (i in villes) {
         if (document.getElementById("airc").checked===true && villes[i].AirC===false) {
             liste =liste+[i];
         }}
    for (i in villes) {
         if (document.getElementById("pet").checked===true && villes[i].animaux_acceptes===false) {
        liste =liste+[i];
             }}
    for (i in villes){
        if (document.getElementById("cont-select").value !=="tout les continent" && document.getElementById("cont-select").value !== villes[i].continent) {
            liste=liste+[i];
        }}


    for( k in liste) {

        document.getElementById(villes[liste[k]].ville).style.display = "none";

    }
    console.log(document.getElementById("pays-select").value)
}
function openForm() {
    console.log('test');
    if (document.getElementById('myForm').style.display ==='none') {
        document.getElementById('myForm').style.display = 'block';
        if (localStorage.getItem('etatConexion') !=null ) {

            if (JSON.parse(localStorage.getItem('etatConexion')).etat) {
                document.getElementById('login').style.display = 'none';
                document.getElementById('loged').style.display = 'block';
            }
            if (!JSON.parse(localStorage.getItem('etatConexion')).etat) {
                document.getElementById('loged').style.display = 'none';
                document.getElementById('login').style.display = 'block';
            }
        }
    } else if (document.getElementById('myForm').style.display ==='block') {
        document.getElementById('myForm').style.display = 'none';


    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function login(){
    email = document.getElementById('email').value ;
    pswd =    document.getElementById('psw').value ;
    Obj = JSON.parse(localStorage.getItem('utilisateurs')) || [];
    flag=false;
    cpt=0;
    for (x in Obj){
        if (Obj[x].email==email & Obj[x].pswd==pswd ){
            nom=Obj[x].Name +'  '+Obj[x].LastName ;
            flag=true;
            cpt=x;
            break
        }
    }
    if (flag){
        document.getElementById('id').innerHTML= 'Bienvenue'+' '+nom;
        document.getElementById("myForm").style.display = "none";
        localStorage.setItem('etatConexion',JSON.stringify({etat:true ,idconexion:cpt}));
        window.location.reload();
    }
    if (!flag){
        window.alert('Nom du compte ou mot de passe incorrecte');
    }

}
function debut(){
    if (localStorage.getItem('etatConexion')!=null) {
        test = JSON.parse(localStorage.getItem('etatConexion')).etat;
        if (test) {
            All_users = JSON.parse(localStorage.getItem('utilisateurs'));
            Obj = JSON.parse(localStorage.getItem('etatConexion'));
            idconnected = JSON.parse(localStorage.getItem('etatConexion')).idconexion;
            nom = All_users[idconnected].Name + ' ' + All_users[idconnected].LastName;
            document.getElementById('id').innerHTML = 'Bienvenue' + ' ' + nom;
        }
    }
}
function disconect(){
    localStorage.setItem('etatConexion',JSON.stringify({etat:false ,idconexion:null}));
    window.location.reload();
}