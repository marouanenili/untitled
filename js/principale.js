class Destination {
    constructor(continent,ville, pays, prix, prixdej, pet, parking, PetitDejCompris, Wifi, AirC,note,image,description) {
        this.prix = prix;
        this.pays = pays;
        this.pet = pet;
        this.parking = parking;
        this.PetitDejCompris = PetitDejCompris;
        this.wifi = Wifi;
        this.prixdej = prixdej;
        this.ville = ville;
        this.AirC = AirC;
        this.continent=continent;
        this.note=note;
        this.description=description;
        this.image=image;
    }
}

var Sydney = new Destination('Oceanie',"Sydney","Australie",100,30,true,false,true,true, true,9,"../img/Sydney_Harbour_at_night_Adobe.jpg","Sydney, capitale de la Nouvelle-Galles du Sud et l'une des plus grandes villes d'Australie, est renommée pour son opéra situé dans le port, avec son design distinctif en forme de voiles. Le vaste Darling Harbour et le plus petit port de Circular Quay sont des pôles majeurs de la vie au bord de l\'eau, à proximité du Harbour Bridge et des jardins botaniques royaux. La plate-forme extérieure de Sydney Tower, le Skywalk, offre une vue à 360 degrés sur la ville et ses banlieues.");
var Casablanca = new Destination('Afrique',"Casablanca","Maroc",90,20,true,true,true,true, true,8.7,'../img/casablanca.jpg',"Casablanca est une ville portuaire et un pôle commercial situé à l'ouest du Maroc, face à l'océan Atlantique. L'héritage colonial français de la ville se reflète dans l'architecture mauresque du centre-ville, alliant style mauresque et Art déco européen. Partiellement érigée sur l'eau, l'immense mosquée Hassan II est un magnifique chef d'oeuvre a voir absolument , achevée en 1993, comprend un minaret de 210 mètres de haut avec des lasers orientés vers La Mecque");
var Ajaccio = new Destination('Europe',"Ajaccio","Corse",30,15,true,false,true,true, false,5,'../img/ajjacio.jpg',"Ajaccio est la capitale de la Corse, une île française en mer Méditerranée. Cité portuaire sur la sauvage côte ouest de l'île, elle est la ville qui a vu naître Napoléon Bonaparte, empereur français, en 1769. Sa demeure ancestrale, la maison Bonaparte, est à présent un musée exposant des objets de famille. La cathédrale baroque Notre-Dame, érigée au XVIe siècle, abrite des peintures de Delacroix et du Tintoret. C'est ici qu'a été baptisé Napoléon.");
var Londres = new Destination('Europe',"Londres","Angleterre",250,35,true,true,true,true, true,9,'../img/londres1.jpg',"Londres, la capitale de l'Angleterre et du Royaume-Uni, est une ville moderne dont l'histoire remonte à l'époque romaine. En son centre se dressent l'imposant Parlement, l'emblématique Big Ben et l'abbaye de Westminster, lieu de couronnement des monarques britanniques. De l'autre côté de la Tamise, le London Eye, la grande roue, offre une vue panoramique sur le South Bank Center, et toute la ville.");
var Merzouga = new Destination('Afrique',"Merzouga","Maroc",90,10,true,true,true,true, false,8,'../img/merzouga.jpg',"Merzouga est une petite ville marocaine située dans le désert du Sahara, près de la frontière algérienne. Merzouga s'ouvre sur l'erg Chebbi, une immense étendue de dunes de sable au nord de la ville. À l'ouest se trouve Dayet Srji, un lac salé saisonnier, souvent sec en été. Lorsqu'il se remplit à nouveau, il attire une grande variété d'oiseaux migrateurs et du désert, notamment des fauvettes, des engoulevents et, parfois, des flamants roses.");
var Chefchaouen = new Destination('Afrique',"Chefchaouen","Maroc",60,10,true,false,true,true, false,8.4,'../img/chefchaouen.jpg',"Chefchaouen, ou Chaouen, est une ville située dans les montagnes du Rif, au nord-ouest du Maroc. Elle est réputée pour les bâtiments remarquables de différents tons de bleu délavé de sa vieille ville. Des ateliers de maroquinerie et de tissage bordent ses allées pavées abruptes. Sur la place centrale ombragée d'Outa el Hammam se trouve la casbah aux murs rouges, forteresse et donjon du XVe siècle avec expositions ethnographiques et artistiques. Le minaret octogonal de la Grande Mosquée s'élève non loin de là.");
var Lisbone = new Destination('Europe',"Lisbone","Portugal",110,20,true,false,true,true, true,3,'../img/lisbone.jpeg',"Lisbonne est la capitale du Portugal, dotée d'une situation côtière et de collines. Depuis l'imposant château de Saint-Georges (Castelo de São Jorge), la vue embrasse les bâtiments aux tons pastel de la vieille ville, l'estuaire du Tage et le pont suspendu du 25 avril. À proximité, le musée national de l'azulejo retrace 5 siècles de céramiques décoratives. Aux portes de Lisbonne s'enfile une série de plages de l'Atlantique, de Cascais à Estoril.");
var Mijas = new Destination('Europe',"Mijas","Espagne",190,23,true,false,true,true, true,6,'../img/Mijas.jpg',"Mijas est classé comme l’un des villages blancs d’Andalousie le plus pittoresque. C’est un lieu idéal pour passer une journée et partir à la découverte d’un des villages blancs d’Andalousie !\n" +
    "\n" +
    "En dépit du fait que Mijas soit considéré comme un village, c’est en réalité, du fait de sa population, la troisième municipalité de la province. Mijas cumule près de 80 000 habitants, dispersés entre le village, où se trouve le centre-ville historique, la côte, aussi connue sous le nom Las Lagunas, qui marque la limite avec Fuengirola et la zone côtière la cala de Mijas.\n" +
    "\n" +
    "Situé en haut d’une montagne à 430 mètres au-dessus de la mer, cet endroit vous éblouira par la spectaculaire vue qu’il propose sur les montagnes de la Sierra de Mijas ainsi que sur la côte et la mer méditerranéenne. Alors ne serait-ce pas l’endroit parfait pour passer vos vacances si méritées ?");
var Osaka = new Destination('Asie',"Osaka","Japon",132,14,true,false,true,true, true,7,'../img/osaka.jpg',"Osaka est une grande ville portuaire et un centre commerçant de l'île japonaise d'Honshū. Elle est connue pour son architecture moderne, sa vie nocturne et la qualité de sa street food. Principal monument historique de la ville, le château d'Osaka, construit au XVIe siècle lors du shogunat, a subi plusieurs restaurations. Il est entouré de douves ainsi que d'un parc planté de pruniers, de pêchers et de cerisiers à fleurs. Le Sumiyoshi-taisha est l'un des plus anciens sanctuaires shinto du pays.");
var Rio = new Destination('Amerique du Sud',"Rio","Bresil",68,25,true,true,true,true, false,2,'../img/Rio.jpg',"Rio de Janeiro est une grande ville du Brésil située en bord de mer. Elle est connue pour ses plages de Copacabana et d'Ipanema, sa statue du Christ Rédempteur de 38 mètres de haut située au sommet du Corcovado et le Pain de Sucre, pic de granite dont le sommet est accessible via 2 téléphériques. La ville est également connue pour ses favelas tentaculaires (bidonvilles). Le célèbre carnaval de Rio, avec défilés de chars, costumes flamboyants et danseurs de samba, est considéré comme l'un des plus grands au monde.");


var villes =[Sydney,Casablanca,Chefchaouen,Ajaccio,Lisbone,Londres,Merzouga,Mijas,Osaka,Rio];

function filtre() {
    var currentDiv =document.getElementById('divprincipal');
    for (ville of villes){
        if (document.getElementById(ville.ville) !== null){
            currentDiv.removeChild(document.getElementById(ville.ville));
        }
    }


    let parking=document.getElementById('parking').checked;
    let pays = document.getElementById('pays-select').value;
    let cont = document.getElementById('continent').value;
    let prixmin =document.getElementById('prixmin').value;
    let prixmax= document.getElementById('prixmax').value;
    let pet=document.getElementById('pet').checked;
    let pdj =document.getElementById('pdj').checked;
    let wifi=document.getElementById('wifi').checked;
    let ciga =document.getElementById('ciga').checked;
    let airc =document.getElementById('airc').checked;
    for (let ville of villes) {
        if (ville.parking === false && parking ===true) {continue}
        if (pays!=='tout les pays' && ville.pays !==pays) {continue}
        if (cont!=='tout les continents'&& ville.continent !== cont ) { continue }
        if (ville.prix>prixmax ){continue}
        if (ville.prix<prixmin){continue}
        if (ville.wifi===false && wifi===true){continue}
        if (ville.pet===false && pet===true){continue}
        if (ville.airc ===false && airc===true){continue}




        var a=document.createElement('a');
        a.setAttribute('href','reservation.html?id='+ville.ville);
        var container=document.createElement('div');
        var image= document.createElement('img');
        image.setAttribute('src',ville.image);
        image.setAttribute('class','image');
        var titre=document.createElement('div');
        titre.appendChild(document.createTextNode(ville.ville));
        var middle=document.createElement('div');
        middle.appendChild(document.createTextNode('Reserver sur '+ville.ville));
        var bottom=document.createElement('div');
        bottom.appendChild(document.createTextNode('note globale :'+ville.note+'/10'));
        bottom.setAttribute('class','text');
        var bottom2=document.createElement('div');
        bottom2.appendChild(document.createTextNode('prix :' +ville.prix +'€/nuit'));
        middle.setAttribute('class','middle');
        bottom2.setAttribute('class','bottom2');
        bottom.setAttribute('class','bottom');
        titre.setAttribute('class','titre');
        a.appendChild(image);
        container.setAttribute('class','container');
        a.appendChild(titre);
        a.appendChild(bottom);
        a.appendChild(bottom2);
        a.appendChild(middle);
        container.appendChild(a);
        container.setAttribute('id',ville.ville);

        currentDiv.appendChild(container);

    }
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
    for (let x in Obj){
        if (Obj[x].email===email && Obj[x].pswd===pswd ){
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
    filtre();

    }



function disconect(){
    localStorage.setItem('etatConexion',JSON.stringify({etat:false ,idconexion:null}));
    window.location.reload();
}