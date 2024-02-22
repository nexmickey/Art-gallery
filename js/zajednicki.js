var provera = 0;
var korisnik = "";
var nizKorisnika;
var nizPonuda;
var nizKomentara;
var nizUmetnickihDela;
var jezik;

function ucitavanjeStanice(){
    provera = localStorage.getItem("logovan_korisnik");
    if(provera == 1){
        korisnik = localStorage.getItem("korisnik");
        $(".logovani_korisnik").removeClass("d-none");
        $(".dugme_za_odjavu").removeClass("d-none");
        $(".logovani_korisnik").html(korisnik);
    }
    else
        provera = 0;
    let provera_umetnickih_dela = localStorage.getItem("tip_umetnickog_dela");
    if(provera_umetnickih_dela != null){ localStorage.removeItem("tip_umetnickog_dela"); }
    init();
    jezik = $("#naslovna_slika").data("jezik");
}

function odjava(){
    localStorage.removeItem("logovan_korisnik");
    localStorage.removeItem("korisnik");
    $(".logovani_korisnik").addClass("d-none");
    $(".dugme_za_odjavu").addClass("d-none");
    provera = 0;
    korisnik = "";
}

function init(){
    nizKorisnika = [{
        mejl : "kiki@gmail.com",
        user : "kiki",
        pass : "asd"
    },
    {
        mejl : "miki@gmail.com",
        user : "miki",
        pass : "ggg"
    }
    ];
    nizPonuda = [{
        idPonude: "po_1000",
        idDela: "ud_101",
        user: "kiki",
        iznos: "1000€",
    },
    {
        idPonude: "po_1001",
        idDela: "ud_102",
        user: "miki",
        iznos: "1200€",
    },
    {
        idPonude: "po_1002",
        idDela: "ud_101",
        user: "miki",
        iznos: "2000€",
    }
    ];
    nizKomentara = [{
        idKomentar: "ko_10000",
        idDela: "ud_101",
        user: "kiki",
        komentar: "Kul"
    },
    {
        idKomentar: "ko_10001",
        idDela: "ud_101",
        user: "miki",
        komentar: "Odlicno"
    },
    {
        idKomentar: "ko_10002",
        idDela: "ud_102",
        user: "kiki",
        komentar: "Lepo!"
    }
    ];
    nizUmetnickihDela = [{
        idDela: "ud_101",
        naziv: "Nevesta",
        naziv_e: "The Bride",
        umetnik: "Mark Šagal",
        umetnik_e: "Marc Chagall",
        src: "../slike/slika_11.jpg",
        putanja: "slika1.html",
        putanja_e: "slika1_e.html",
        vrsta: "slika",
        godina_nastanka: "1950"
    },
    {
        idDela: "ud_102",
        naziv: "Upornost sećanja",
        naziv_e: "The Persistence of Memory",
        umetnik: "Salvador Dali",
        umetnik_e: "Salvador Dali",
        src: "../slike/slika_21.jpg",
        putanja: "slika2.html",
        putanja_e: "slika2_e.html",
        vrsta: "slika",
        godina_nastanka: "1931"
    },
    {
        idDela: "ud_103",
        naziv: "Žena koja plače",
        naziv_e: "The Weeping Woman",
        umetnik: "Pablo Pikaso",
        umetnik_e: "Pablo Picasso",
        src: "../slike/slika_31.jpg",
        putanja: "slika3.html",
        putanja_e: "slika3_e.html",
        vrsta: "slika",
        godina_nastanka: "1937"
    },
    {
        idDela: "ud_201",
        naziv: "Glava žene",
        naziv_e: "Head of a Woman",
        umetnik: "Pablo Pikaso",
        umetnik_e: "Pablo Picasso",
        src: "../slike/skulp_12.jpg",
        putanja: "skulptura1.html",
        putanja_e: "skulptura1_e.html",
        vrsta: "skulptura",
        godina_nastanka: "1932"
    },
    {
        idDela: "ud_202",
        naziv: "Trijumfalni slon",
        naziv_e: "Triumphant Elephant",
        umetnik: "Salvador Dali",
        umetnik_e: "Salvador Dali",
        src: "../slike/skulp_22.jpg",
        putanja: "skulptura2.html",
        putanja_e: "skulptura2_e.html",
        vrsta: "skulptura",
        godina_nastanka: "1984"
    },
    {
        idDela: "ud_203",
        naziv: "Koza",
        naziv_e: "She Goat",
        umetnik: "Pablo Pikaso",
        umetnik_e: "Pablo Picasso",
        src: "../slike/skulp_31.jpg",
        putanja: "skulptura3.html",
        putanja_e: "skulptura3_e.html",
        vrsta: "skulptura",
        godina_nastanka: "1950"
    },
    {
        idDela: "ud_301",
        naziv: "Sova",
        naziv_e: "Owl",
        umetnik: "Pablo Pikaso",
        umetnik_e: "Pablo Picasso",
        src: "../slike/ostalo_11.jpg",
        putanja: "ostalo1.html",
        putanja_e: "ostalo1_e.html",
        vrsta: "ostalo",
        godina_nastanka: "1969"
    },
    {
        idDela: "ud_302",
        naziv: "Lice žene",
        naziv_e: "Woman's Face",
        umetnik: "Pablo Pikaso",
        umetnik_e: "Pablo Picasso",
        src: "../slike/ostalo_21.jpg",
        putanja: "ostalo2.html",
        putanja_e: "ostalo2_e.html",
        vrsta: "ostalo",
        godina_nastanka: "1953"
    },
    {
        idDela: "ud_303",
        naziv: "Bitka oko Dandeliona",
        naziv_e: "Battle Around a Dandelion",
        umetnik: "Salvador Dali",
        umetnik_e: "Salvador Dali",
        src: "../slike/ostalo_31.jpg",
        putanja: "ostalo3.html",
        putanja_e: "ostalo3_e.html",
        vrsta: "ostalo",
        godina_nastanka: "1988"
    }
    ];

    let korisnici = localStorage.getItem("korisnici");
    if(korisnici != null){ nizKorisnika = JSON.parse(korisnici); }
    else { localStorage.setItem("korisnici", JSON.stringify(nizKorisnika)); }

    let ponude = localStorage.getItem("ponude");
    if(ponude != null){ nizPonuda = JSON.parse(ponude); }
    else { localStorage.setItem("ponude", JSON.stringify(nizPonuda)); }

    let komentari = localStorage.getItem("komentari");
    if(komentari != null){ nizKomentara = JSON.parse(komentari); }
    else { localStorage.setItem("komentari", JSON.stringify(nizKomentara)); }

    let slike = localStorage.getItem("slike");
    if(slike != null){ nizUmetnickihDela = JSON.parse(slike); }
    else { localStorage.setItem("slike", JSON.stringify(nizUmetnickihDela)); }
}