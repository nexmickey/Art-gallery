function ucitavanjeStanice_nalog(){
    if(provera == 1){
        $("#okruzujuci_blok_ponude").removeClass("d-none");
        $("#okruzujuci_blok_komentari").removeClass("d-none");
    }
    else{
        $("#poruka").removeClass("d-none");
    }
}

$ponude = "";
$komentari = "";

function odjava_nalog(){
    odjava();
    $("#okruzujuci_blok_ponude").addClass("d-none");
    $("#okruzujuci_blok_komentari").addClass("d-none");
    $("#poruka").removeClass("d-none");
    $ponude.html("");
    $komentari.html("");
}

$(document).ready(function(){
    ucitavanjeStanice();
    ucitavanjeStanice_nalog();
    $ponude = $("#ponude");
    $komentari = $("#komentari");

    popuniPonudeKomentare();
});

function popuniPonudeKomentare(){
    let htmlPonude = "";
    let htmlKomentari = "";
    let htmlSlike = "";
    let putanjaStranice = "";
    $ponude.html("");
    $komentari.html("");

    for(let i = 0; i < nizPonuda.length; i++){
        if(nizPonuda[i].user == korisnik){
            htmlPonude = ""; htmlSlike = ""; putanjaStranice = "";
            htmlPonude = $("<div></div>").addClass("blok_ponuda");

            let srcSlike = "";
            for(var j = 0; j < nizUmetnickihDela.length; j++){
                if(nizUmetnickihDela[j].idDela == nizPonuda[i].idDela){
                    srcSlike = nizUmetnickihDela[j].src;
                    if(jezik == "srb")
                        putanjaStranice = nizUmetnickihDela[j].putanja;
                    else
                        putanjaStranice = nizUmetnickihDela[j].putanja_e;
                    break;
                }
            }

            htmlSlike = $("<img>").attr("src", srcSlike);
            htmlPonude.append($("<a href = " + putanjaStranice + "> </a>").append(htmlSlike));
            if(jezik == "srb") htmlPonude.append($("<span></span>").html(" Iznos: " + nizPonuda[i].iznos).addClass("text_iznos"));
            else htmlPonude.append($("<span></span>").html(" Value: " + nizPonuda[i].iznos).addClass("text_iznos"));
            if(jezik == "srb") htmlPonude.append($("<button></button>").html("Obriši").addClass("dugme btn bg-secondary").addClass(nizPonuda[i].idPonude).on("click", dugme_brisi_ponudu));
            else htmlPonude.append($("<button></button>").html("Delete").addClass("dugme btn bg-secondary").addClass(nizPonuda[i].idPonude).on("click", dugme_brisi_ponudu));
            htmlPonude.append($("<hr>"));
            $ponude.append(htmlPonude);
        }
    }
    for(let i = 0; i < nizKomentara.length; i++){
        if(nizKomentara[i].user == korisnik){
            htmlKomentari = ""; htmlSlike = ""; putanjaStranice = "";
            htmlKomentari = $("<div></div>").addClass("blok_komentar");

            let srcSlike = "";
            for(var j = 0; j < nizUmetnickihDela.length; j++){
                if(nizUmetnickihDela[j].idDela == nizKomentara[i].idDela){
                    srcSlike = nizUmetnickihDela[j].src;
                    if(jezik == "srb")
                        putanjaStranice = nizUmetnickihDela[j].putanja;
                    else
                        putanjaStranice = nizUmetnickihDela[j].putanja_e;
                    break;
                }
            }
            
            htmlSlike = $("<img>").attr("src", srcSlike);
            htmlKomentari.append($("<a href = " + putanjaStranice + "> </a>").append(htmlSlike));
            if(jezik == "srb") htmlKomentari.append($("<button></button>").html("Obriši").addClass("dugme btn bg-secondary").addClass(nizKomentara[i].idKomentar).on("click", dugme_brisi_komentar));
            else htmlKomentari.append($("<button></button>").html("Delete").addClass("dugme btn bg-secondary").addClass(nizKomentara[i].idKomentar).on("click", dugme_brisi_komentar));
            htmlKomentari.append($("<p></p>").html(nizKomentara[i].komentar));
            htmlKomentari.append($("<hr>"));
            $komentari.append(htmlKomentari);
        }
    }
} 

function dugme_brisi_ponudu(){
    let index = -1;
    if(jezik == "srb"){
        if (confirm("Da li ste sigurni?") == false)
            return;
    }
    else{
        if (confirm("Are you sure?") == false)
            return;
    }
    for(let i = 0; i < nizPonuda.length; i++){
        if($(this).hasClass(nizPonuda[i].idPonude)){
            index = i;
            break;
        }
    }
    if(index == -1){
        console.log("err ponuda");
        return;
    }
    nizPonuda.splice(index, 1);
    localStorage.setItem("ponude", JSON.stringify(nizPonuda));
    popuniPonudeKomentare();
}

function dugme_brisi_komentar(){
    let index = -1;
    if(jezik == "srb"){
        if (confirm("Da li ste sigurni?") == false)
            return;
    }
    else{
        if (confirm("Are you sure?") == false)
            return;
    }
    for(let i = 0; i < nizKomentara.length; i++){
        if($(this).hasClass(nizKomentara[i].idKomentar)){
            index = i;
            break;
        }
    }
    if(index == -1){
        console.log("err komentar");
        return;
    }
    nizKomentara.splice(index, 1);
    localStorage.setItem("komentari", JSON.stringify(nizKomentara));
    popuniPonudeKomentare();
}