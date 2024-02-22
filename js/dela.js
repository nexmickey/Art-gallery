$(document).ready(function(){
    ucitavanjeStanice();
    postaviSlike();
});


function cmp0(a, b){ return b.idDela.localeCompare(a.idDela); }
function cmp1(a, b){ return a.naziv.localeCompare(b.naziv); }
function cmp2(a, b){ return b.naziv.localeCompare(a.naziv); }
function cmp3(a, b){ return a.umetnik.localeCompare(b.umetnik); }
function cmp4(a, b){ return b.umetnik.localeCompare(a.umetnik); }
function cmp1_e(a, b){ return a.naziv_e.localeCompare(b.naziv_e); }
function cmp2_e(a, b){ return b.naziv_e.localeCompare(a.naziv_e); }
function cmp3_e(a, b){ return a.umetnik_e.localeCompare(b.umetnik_e); }
function cmp4_e(a, b){ return b.umetnik_e.localeCompare(a.umetnik_e); }

function postaviSlike(){
    $dela = $("#dela");
    htmlOkruzujucePolje = "";
    htmlSlike = "";
    htmlPolje = "";

    $("div").remove(".poljeSaUmetnickimDelima");

    $filter_slika = $("#f_naziv_slike");
    $filter_umetnik = $("#f_ime_umetnika");

    $select = $("#select_sortiranje option:selected");
    if(jezik == "srb"){
        if($select.val() == 0){ nizUmetnickihDela.sort(cmp0); }
        else if($select.val() == 1){ nizUmetnickihDela.sort(cmp1); }
        else if($select.val() == 2){ nizUmetnickihDela.sort(cmp2); }
        else if($select.val() == 3){ nizUmetnickihDela.sort(cmp3); }
        else if($select.val() == 4){ nizUmetnickihDela.sort(cmp4); }
    }
    else{
        if($select.val() == 0){ nizUmetnickihDela.sort(cmp0); }
        else if($select.val() == 1){ nizUmetnickihDela.sort(cmp1_e); }
        else if($select.val() == 2){ nizUmetnickihDela.sort(cmp2_e); }
        else if($select.val() == 3){ nizUmetnickihDela.sort(cmp3_e); }
        else if($select.val() == 4){ nizUmetnickihDela.sort(cmp4_e); }
    }
    let vrstaDela = $("#rowVrstaDela").data("vrsta");

    for(let i = 0; i < nizUmetnickihDela.length; i++){
        let slika = $filter_slika.val();
        let umetnik = $filter_umetnik.val();
        let provera1 = (slika.length == 0) || (jezik == "srb" && slika.length != 0 && slika.substring(0, slika.length).toLowerCase() == nizUmetnickihDela[i].naziv.substring(0, slika.length).toLowerCase())
                                            || (jezik == "en" && slika.length != 0 && slika.substring(0, slika.length).toLowerCase() == nizUmetnickihDela[i].naziv_e.substring(0, slika.length).toLowerCase());
        let provera2 = (umetnik.length == 0) || (jezik == "srb" && umetnik.length != 0 && umetnik.substring(0, umetnik.length).toLowerCase() == nizUmetnickihDela[i].umetnik.substring(0, umetnik.length).toLowerCase())
                                            || (jezik == "en" && umetnik.length != 0 && umetnik.substring(0, umetnik.length).toLowerCase() == nizUmetnickihDela[i].umetnik_e.substring(0, umetnik.length).toLowerCase());
        let provera3 = (nizUmetnickihDela[i].vrsta == vrstaDela);
        let p_putanja, p_naziv, p_umetnik;
        if(jezik == "srb"){
            p_putanja = nizUmetnickihDela[i].putanja;
            p_naziv = nizUmetnickihDela[i].naziv;
            p_umetnik = nizUmetnickihDela[i].umetnik;
        }
        else{
            p_putanja = nizUmetnickihDela[i].putanja_e;
            p_naziv = nizUmetnickihDela[i].naziv_e;
            p_umetnik = nizUmetnickihDela[i].umetnik_e;
        }
        if(provera1 && provera2 && provera3){
            htmlOkruzujucePolje = "";
            htmlOkruzujucePolje = $("<div></div>").addClass("col-xl-3 col-lg-4 col-md-6 okruzujuce_polje poljeSaUmetnickimDelima");

            htmlPolje = $("<div></div>").addClass("polje");

            htmlSlike = $("<img>").attr("src", nizUmetnickihDela[i].src);
            htmlPolje.append($("<a href = " + p_putanja + "> </a>").append(htmlSlike));

            htmlPolje.append($("<span></span>").html(p_naziv).addClass("tekst_naziv_slike"));
            htmlPolje.append($("<br>"));
            htmlPolje.append($("<span></span>").html(p_umetnik).addClass("tekst_ime_autora"));
            htmlPolje.append($("<br>"));
            htmlOkruzujucePolje.append(htmlPolje);
            $dela.append(htmlOkruzujucePolje);
        }
    }
}

function sortiraj(){
    postaviSlike();
}
function filtriraj(){
    postaviSlike();
}