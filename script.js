let erg = "";
let zwErg = "";
let rechnung = [];
altesErgebnis = false;

//Event Listener

document.addEventListener("keydown", eingabe);

/**
 * checks user input
 */
function eingabe() {
    //console.log(event.key, event.keyCode);
    if (event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode >= 48 && event.keyCode <= 57) {
        number(event.key);
    }
    else if (event.keyCode >= 106 && event.keyCode <= 111 && event.keyCode != 108) {
        switch (event.keyCode) {
            case 106:
                multiply();
                break;
            case 107:
                plus();
                break;
            case 109:
                minus();
                break;
            case 110:
                number('.')
                break;
            case 111:
                divide();
                break;
        }
    }
    else if (event.keyCode == 13) {
        result();
    }
    else if (event.keyCode == 8) {
        back();
    }
}
//END Event Listener

//Nummer und operanden eingabe
function number(n) {
    if (altesErgebnis == true) {
        rechnung = []
        erg = "";
        zwErg = "";
        showRechnung(rechnung);
        altesErgebnis = false;
    }
    zwErg += n;
    show(zwErg);
    //console.log(erg + "/" + zwErg + "/" +rechnung + "/" + altesErgebnis);
    /*console.log(localStorage.getItem("a1"));
    console.log(localStorage.getItem("a2"));
    console.log(localStorage.getItem("a3"));
    console.log(localStorage.getItem("a4"));*/
}


/**
 * function adds
 */
function plus() {
    if (altesErgebnis == true) {
        rechnung = [];
        rechnung.push(erg);
        altesErgebnis = false;
    }
    rechnung.push(zwErg);
    zwErg = "";
    rechnung.push(" + ");
    showRechnung(rechnung);
}

/**
 * function subtracts
 */
function minus() {
    if (altesErgebnis == true) {
        rechnung = [];
        rechnung.push(erg);
        altesErgebnis = false;
    }
    rechnung.push(zwErg);
    zwErg = "";
    rechnung.push(" - ");
    showRechnung(rechnung);
}

/**
 * function multiplies
 */
function multiply() {
    if (altesErgebnis == true) {
        rechnung = [];
        rechnung.push(erg);
        altesErgebnis = false;
    }
    rechnung.push(zwErg);
    zwErg = "";
    rechnung.push(" * ");
    showRechnung(rechnung);
}
function divide() {
    if (altesErgebnis == true) {
        rechnung = [];
        rechnung.push(erg);
        altesErgebnis = false;
    }
    rechnung.push(zwErg);
    zwErg = "";
    rechnung.push(" / ");
    showRechnung(rechnung);
}
function modulo() {
    if (altesErgebnis == true) {
        rechnung = [];
        rechnung.push(erg);
        altesErgebnis = false;
    }
    rechnung.push(zwErg);
    zwErg = "";
    rechnung.push(" % ");
    showRechnung(rechnung);
}
function C() {
    zwErg = "";
    erg = "";
    document.getElementById("erg").innerHTML = "0";
    rechnung = [];
    showRechnung(rechnung);
    altesErgebnis = false;
}
function CE() {
    document.getElementById("erg").innerHTML = "0";
    zwErg = "";
}
function back() {
    if (zwErg == 0) {
        document.getElementById("erg").innerHTML = "0";
    } else if (zwErg.length == 1) {
        document.getElementById("erg").innerHTML = "0";
        zwErg = "";
    } else {
        zwErg = zwErg.substr(0, zwErg.length - 1);
        show(zwErg);
    }
}
function plusminus() {
    if (altesErgebnis == true) {
        zwErg = "" + erg;
        if (zwErg == 0) {
            document.getElementById("erg").innerHTML = "0";
        }
        else if (zwErg > 0) {
            rechnung = [];
            showRechnung(rechnung);
            zwHelp = "";
            zwHelp = "-" + zwErg.substring(0);
            show(zwHelp);
        }
        else {
            zwErg = "" + zwErg.substring(1);
            show(zwErg);
        }
        altesErgebnis = false;
    }
    if (zwErg == 0) {
        document.getElementById("erg").innerHTML = "0";
    } else if (zwErg > 0) {
        zwErg = "-" + zwErg.substring(0);
        show(zwErg);
    } else {
        zwErg = "" + zwErg.substring(1);
        show(zwErg);
    }
}
function sqrt() {
    rechnung.push(Math.sqrt(zwErg));
    zwErg = "";
    showRechnung(rechnung);
}
function sqr() {
    let i = zwErg * zwErg;
    zwErg = "";
    rechnung.push(i);
    showRechnung(rechnung);
}
function einsDurchx() {
    rechnung.push(" 1/");
    rechnung.push(zwErg);
    zwErg = "";
    showRechnung(rechnung);

}
function cube() {
    let i = zwErg * zwErg * zwErg;
    zwErg = "";
    rechnung.push(i);
    showRechnung(rechnung);
}
//END nummer und operanden eingabe

//Ergebnis und Anzeigemethoden
function result() {
    if (rechnung.length != 0) {
        rechnung.push(zwErg);
        showRechnung(rechnung);
        erg = eval(rechnung.join(""));
        show(erg);
        verlaufSpeichern(rechnung, erg);
        altesErgebnis = true;
        //console.log(erg + "/" + zwErg + "/" +rechnung + "/" + altesErgebnis);
    }
}

function show(e) {
    document.getElementById("erg").innerHTML = e;
}

function showRechnung(r) {
    document.getElementById("rechnung").innerHTML = r.join("");
}
//END Ergebnis und Anzeigemethoden


//Verlaufsspeicherung
let v1 = [];
let v2 = [];
let v3 = [];
let v4 = [];

function verlaufSpeichern(rech, ergeb) {
    let i = 0;
    if (v1.length < 1) {
        while (i < rechnung.length) {
            v1[i] = rechnung[i];
            i++;
        }
        v1.push(" = ");
        v1.push("<b>" + erg + "</b>");
        zwErg = "";
        document.getElementById("verlauf1").style.display = "block";
        document.getElementById("verlauf1").innerHTML = v1.join("");
    }
    else if (v2.length < 1) {
        while (i < rechnung.length) {
            v2[i] = rechnung[i];
            i++;
        }
        v2.push(" = ");
        v2.push("<b>" + erg + "</b>");
        zwErg = "";
        document.getElementById("verlauf2").style.display = "block";
        document.getElementById("verlauf2").innerHTML = v2.join("");
    }
    else if (v3.length < 1) {
        while (i < rechnung.length) {
            v3[i] = rechnung[i];
            i++;
        }
        v3.push(" = ");
        v3.push("<b>" + erg + "</b>");
        zwErg = "";
        document.getElementById("verlauf3").style.display = "block";
        document.getElementById("verlauf3").innerHTML = v3.join("");
    }
    else if (v4.length < 1) {
        while (i < rechnung.length) {
            v4[i] = rechnung[i];
            i++;
        }
        v4.push(" = ");
        v4.push("<b>" + erg + "</b>");
        zwErg = "";
        document.getElementById("verlauf4").style.display = "block";
        document.getElementById("verlauf4").innerHTML = v4.join("");
    }
    else {
        v1 = v2;
        v2 = v3;
        v3 = v4;
        v4 = [];
        document.getElementById("verlauf3").innerHTML = v3.join("");
        document.getElementById("verlauf2").innerHTML = v2.join("");
        document.getElementById("verlauf1").innerHTML = v1.join("");
        verlaufSpeichern(rech, ergeb)
    }
    showRechnung(rechnung);

}

function abrufen(p) {
    let i = 0;
    rechnung = [];
    switch (p) {
        case 4:
            while (i < v4.length - 2) {
                rechnung[i] = v4[i];
                i++;
            }
            erg = v4[v4.length - 1];
            erg = erg.slice(3, erg.length - 4);
            break;
        case 3:
            while (i < v3.length - 2) {
                rechnung[i] = v3[i];
                i++;
            }
            erg = v3[v3.length - 1];
            erg = erg.slice(3, erg.length - 4);
            break;
        case 2:
            while (i < v2.length - 2) {
                rechnung[i] = v2[i];
                i++;
            }
            erg = v2[v2.length - 1];
            erg = erg.slice(3, erg.length - 4);
            break;
        case 1:
            while (i < v1.length - 2) {
                rechnung[i] = v1[i];
                i++;
            }
            erg = v1[v1.length - 1];
            erg = erg.slice(3, erg.length - 4);
            break;
    }
    showRechnung(rechnung);
    show(erg);
    altesErgebnis = true;
}

//END Verlaufsspeicherung

let aindex = 0;
function speicherSpeichern() {
    storage = JSON.parse(localStorage.getItem("storage"));
    if (zwErg != 0) {
        switch (storage.length) {
            case 0:
                storage[0] = zwErg;
                break;
            case 1:
                storage[1] = storage[0];
                storage[0] = zwErg;
                break;
            case 2:
                storage[2] = storage[1];
                storage[1] = storage[0];
                storage[0] = zwErg;
                break;
            case 3:
                storage[3] = storage[2];
                storage[2] = storage[1];
                storage[1] = storage[0];
                storage[0] = zwErg;
                break;
            case 4:
                storage[3] = storage[2];
                storage[2] = storage[1];
                storage[1] = storage[0];
                storage[0] = zwErg;
        }
    }
    if (erg != 0) {
        switch (storage.length) {
            case 0:
                storage[0] = erg.toString();
                break;
            case 1:
                storage[1] = storage[0];
                storage[0] = erg.toString();
                break;
            case 2:
                storage[2] = storage[1];
                storage[1] = storage[0];
                storage[0] = erg.toString();
                break;
            case 3:
                storage[3] = storage[2];
                storage[2] = storage[1];
                storage[1] = storage[0];
                storage[0] = erg.toString();
                break;
            case 4:
                storage[3] = storage[2];
                storage[2] = storage[1];
                storage[1] = storage[0];
                storage[0] = erg.toString();
        }
    }
    localStorage.setItem("storage", JSON.stringify(storage));
    showSpeicher();
    altesErgebnis = true;
}


//console.log(erg + "/" + zwErg + "/" +rechnung + "/" + altesErgebnis);
showSpeicher();
function showSpeicher() {
    if (localStorage.getItem("storage") == '""') {
        storage = [];
        localStorage.setItem("storage", JSON.stringify(storage));
    }
    zwHelp = JSON.parse(localStorage.getItem("storage"));
    if (zwHelp.length == 0) {
        document.getElementById("speicherBox1").style.display = "none";
        document.getElementById("speicherBox2").style.display = "none";
        document.getElementById("speicherBox3").style.display = "none";
        document.getElementById("speicherBox4").style.display = "none";
    }
    else {
        document.getElementById("speicher1").innerHTML = zwHelp[0];
        document.getElementById("speicherBox1").style.display = "block";

        if (zwHelp.length == 1) {
            document.getElementById("speicherBox2").style.display = "none";
            document.getElementById("speicherBox3").style.display = "none";
            document.getElementById("speicherBox4").style.display = "none";
        }
        else {
            document.getElementById("speicher2").innerHTML = zwHelp[1];
            document.getElementById("speicherBox2").style.display = "block";

            if (zwHelp.length == 2) {
                document.getElementById("speicherBox3").style.display = "none";
                document.getElementById("speicherBox4").style.display = "none";
            }
            else {
                document.getElementById("speicher3").innerHTML = zwHelp[2];
                document.getElementById("speicherBox3").style.display = "block";

                if (zwHelp.length == 3) {
                    document.getElementById("speicherBox4").style.display = "none";
                }
                else {
                    document.getElementById("speicher4").innerHTML = zwHelp[3];
                    document.getElementById("speicherBox4").style.display = "block";
                }
            }
        }
    }
}

function wiederHolen(id) {
    zwHelp = JSON.parse(localStorage.getItem("storage"));
    switch (id) {
        case 2:
            erg = zwHelp[1];
            break;
        case 3:
            erg = zwHelp[2];
            break;
        case 4:
            erg = zwHelp[3];
            break;
        default:
            erg = zwHelp[0];
    }

    //zwErg = zwHelp[0].toString();
    show(erg);
    //erg = "";
    altesErgebnis = true;
}

function loeschen(id) {
    //console.log(id);
    zwHelp = JSON.parse(localStorage.getItem("storage"));
    switch (id) {
        case 1:

            zwHelp = zwHelp.slice(1, 4);
            break;
        case 2:
            zwHelp = zwHelp[0] + zwHelp.slice(2);
            break;
        case 3:
            zwHelp = zwHelp[0] + zwHelp[1] + zwHelp.slice(3);
            break;
        case 4:
            zwHelp = zwHelp[0] + zwHelp[1] + zwHelp[2];
            break;
        default:
            zwHelp = [];
    }
    console.log(zwHelp);
    localStorage.setItem("storage", JSON.stringify(zwHelp));
    showSpeicher();
}

function memoryPlus(id) {
    //console.log(id);
    zwHelp = JSON.parse(localStorage.getItem("storage"));
    wert = 0;
    if (erg != 0) {
        wert = erg;
    }
    if (zwErg != 0) {
        wert = parseFloat(zwErg);
    }
    switch (id) {
        case 1:
            zwHelp[0] = parseFloat(zwHelp[0]) + wert;
            break;
        case 2:
            zwHelp[1] = parseFloat(zwHelp[1]) + wert;
            break;
        case 3:
            zwHelp[2] = parseFloat(zwHelp[2]) + wert;
            break;
        case 4:
            zwHelp[3] = parseFloat(zwHelp[3]) + wert;
            break;
        default:
            zwHelp[0] = parseFloat(zwHelp[0]) + wert;
    }
    localStorage.setItem("storage", JSON.stringify(zwHelp));
    showSpeicher();
}

function memoryMinus(id) {
    zwHelp = JSON.parse(localStorage.getItem("storage"));
    wert = 0;
    if (erg != 0) {
        wert = erg;
    }
    if (zwErg != 0) {
        wert = parseFloat(zwErg);
    }
    switch (id) {
        case 1:
            zwHelp[0] = parseFloat(zwHelp[0]) - wert;
            break;
        case 2:
            zwHelp[1] = parseFloat(zwHelp[1]) - wert;
            break;
        case 3:
            zwHelp[2] = parseFloat(zwHelp[2]) - wert;
            break;
        case 4:
            zwHelp[3] = parseFloat(zwHelp[3]) - wert;
            break;
        default:
            zwHelp[0] = parseFloat(zwHelp[0]) - wert;
    }
    localStorage.setItem("storage", JSON.stringify(zwHelp));
    showSpeicher();
}
