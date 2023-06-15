const array1 = ["megoldas", "elsoHint", "masodikHint", "harmadikHint"];
korokSzama = 1;

function jatek(){
    if (korokSzama ==1) {
        array1.forEach(element => document.getElementById(element).style.color = "rgba(1,1,1,0.0)");
        document.getElementById("megoldas").innerHTML = "Máté József";
        document.getElementById("elsoHint").innerHTML = "Csak a kettes legyen meg";
        document.getElementById("masodikHint").innerHTML = "\"Játszunk medvéset\"";
        document.getElementById("harmadikHint").innerHTML = "\"Máté evangéliuma\"";
        korokSzama++;
    }
    else if (korokSzama == 2) {
                array1.forEach(element => document.getElementById(element).style.color = "rgba(1,1,1,0.0)");

        document.getElementById("megoldas").innerHTML = "Nagy Miklós";
        document.getElementById("elsoHint").innerHTML = "Tartalmas órák";
        document.getElementById("masodikHint").innerHTML = "\"Szépségeim\"";
        document.getElementById("harmadikHint").innerHTML = "\"Béláim\"";
        korokSzama++;
    }
    else if (korokSzama == 3) {
                array1.forEach(element => document.getElementById(element).style.color = "rgba(1,1,1,0.0)");

        document.getElementById("megoldas").innerHTML = "Jánosi János";
        document.getElementById("elsoHint").innerHTML = "Tartalmas órák 2";
        document.getElementById("masodikHint").innerHTML = "\"Köcsög oroszok\"";
        document.getElementById("harmadikHint").innerHTML = "Fél óra politika";
        korokSzama++;
    }
    else if (korokSzama == 4) {
                array1.forEach(element => document.getElementById(element).style.color = "rgba(1,1,1,0.0)");

        document.getElementById("megoldas").innerHTML = "Délczeg Ferenc";
        document.getElementById("elsoHint").innerHTML = "\"A vázlat vázlat a jegyzet jegyzet\"";
        document.getElementById("masodikHint").innerHTML = "\"Ügyi vagy :(\"";
        document.getElementById("harmadikHint").innerHTML = "\"Csinálok én neked mósógépet!\"";
        korokSzama++;
    }
    else if (korokSzama == 5) {
                array1.forEach(element => document.getElementById(element).style.color = "rgba(1,1,1,0.0)");

        document.getElementById("megoldas").innerHTML = "Szőlősi Irén";
        document.getElementById("elsoHint").innerHTML = "\"Ti nem is értitek a matekot\"";
        document.getElementById("masodikHint").innerHTML = "\"Hát gyerekek...\"";
        document.getElementById("harmadikHint").innerHTML = "\"Eladó digitalizáló tábla érdekel\"";
        korokSzama++;
    }
    else if (korokSzama == 6) {
                array1.forEach(element => document.getElementById(element).style.color = "rgba(1,1,1,0.0)");

        document.getElementById("megoldas").innerHTML = "Magi Béla";
        document.getElementById("elsoHint").innerHTML = "Szabadidejében motivációs beszédeket tart";
        document.getElementById("masodikHint").innerHTML = "Ugye hogy jó tanár!";
        document.getElementById("harmadikHint").innerHTML = "\"Kibirod?!\"";
        korokSzama++;
    }
    else if (korokSzama == 7) {
                array1.forEach(element => document.getElementById(element).style.color = "rgba(1,1,1,0.0)");

        document.getElementById("megoldas").innerHTML = "Figula Éva";
        document.getElementById("elsoHint").innerHTML = "PIrkadatik fent fogsz maradni!";
        document.getElementById("masodikHint").innerHTML = "\"Azt hittem ti jók vagyok...\"";
        document.getElementById("harmadikHint").innerHTML = "\"Ez 9.-es tananyag...\"";
        korokSzama++;
    }
    else if (korokSzama == 8) {
        goodbye = document.createElement("a");
        goodbye.href = "goodbye.html";
        goodbye.innerHTML = "Köszönjük!"
        goodbye.style.textDecoration = "none";
        goodbye.style.fontSize = "200%";
        document.getElementById("mainDiv").appendChild(goodbye);
        korokSzama++;
    }
}

function reveal(elem){
    document.getElementById(elem).style.color = "rgb(52, 128, 235)";
}

class feladvany{
    feladvany(megfejtes, elsoHint, masodikHint, harmadikHint){
        this.megfejtes = megfejtes;
        this.elsoHint = elsoHint;
        this.masodikHint=masodikHint;
        this.harmadikHint=harmadikHint;
    }
}