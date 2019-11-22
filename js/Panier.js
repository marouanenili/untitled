function Remplirpanier() {
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

    obj = JSON.parse(localStorage.getItem('ReservInfo'));
    if (obj.length == 0) {
        document.getElementById('tableau').style.display = 'none';
    }
    if (obj.length > 0) {
        document.getElementById('message').style.display = 'none';
        idUser = JSON.parse(localStorage.getItem('etatConexion')).idconexion;
    }
    var tableau = document.getElementById("tableau");
    for (i in obj) {
        if (idUser == JSON.parse(localStorage.getItem('ReservInfo'))[i].idconnected) {
            var ligne = tableau.insertRow(-1);//on a ajouté une ligne
            var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
            colonne1.innerHTML += obj[i]['number'];
            var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
            colonne2.innerHTML += new URLSearchParams(obj[i]['lien']['href']).get("ville").link(obj[i]['lien']['href']);
        }
    }
    if (!JSON.parse(localStorage.getItem('etatConexion')).etat) {
        document.getElementById('tableau').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').innerHTML = 'veuillez vous connecter pour voir votre panier'

    }
}
function disconect(){
    localStorage.setItem('etatConexion',JSON.stringify({etat:false ,idconexion:null}));
    window.location.reload();
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