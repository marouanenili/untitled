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