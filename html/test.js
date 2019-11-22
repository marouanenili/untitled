function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "test.xml", true);
    xhttp.send();
}

function myFunction(xhttp) {
    var xmlDoc = xhttp.responseXML;
    var table = "<tr><th>Title</th><th>Artist</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (var i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}