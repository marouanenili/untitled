function enregistrer(){
    var Obj;
    var Objnew;

    email = document.getElementById('email').value ;
    pswd =   document.getElementById('psw').value ;
    Nom=  document.getElementById('Nom').value;
    prenom= document.getElementById('prenom').value;
    Obj = (JSON.parse(localStorage.getItem('utilisateurs')) || []);
    Objnew = {email: email, pswd: pswd, Name: Nom,LastName: prenom };
    flag=false;
    for ( x in Obj){
        console.log(Obj[x].email)
        if (Obj[x].email==Objnew.email){
             flag=true;
        }

    }
    if( !flag) {
        Obj.push(Objnew);
        localStorage.setItem('utilisateurs', JSON.stringify(Obj));
        window.alert('votre compte a ete active avec succee');
        window.location.href='principale.html'
    }
    if (flag){
        window.alert('cet email est deja enregistrer')
    }
}

