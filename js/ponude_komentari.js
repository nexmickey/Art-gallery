$(document).ready(function(){
    ucitavanjeStanice();
    $ponude = $("#ponude");
    $komentari = $("#komentari");

    popuniPonudeKomentare();
});


function slanje_komentara(){
    if(provera == 0){
        if(jezik == "srb")
            alert("Niste ulogovani!");
        else
            alert("You are not logged in!");
        return;
    }
    else{
        $f_text = $("#f_text");
        let idDela = $("#delo").attr("alt");

        if($f_text.val().length == 0){
            if(jezik == "srb")
                alert("Niste popunili polje!");
            else
                alert("You didn't fill all fields!");
            return;
        }
        else{
            nizKomentara.unshift({
                idKomentar: sledeci_id_komentar(),
                idDela: idDela,
                user: korisnik,
                komentar: $f_text.val()
            });
            localStorage.setItem("komentari", JSON.stringify(nizKomentara));
            popuniPonudeKomentare();
            $f_text.val("");
        }
    }
}

function slanje_ponude(){
    if(provera == 0){
        if(jezik == "srb")
            alert("Niste ulogovani!");
        else
            alert("You are not logged in!");
        return;
    }
    else{
        $f_ponude = $("#f_ponuda");
        let idDela = $("#delo").attr("alt");
        
        if($f_ponude.val().length == 0){
            if(jezik == "srb")
                alert("Niste popunili polje!");
            else
                alert("You didn't fill all fields!");
            return;
        }
        else{
            nizPonuda.unshift({
                idPonude: sledeci_id_ponuda(),
                idDela: idDela,
                user: korisnik,
                iznos: $f_ponude.val() + "€"
            });
            localStorage.setItem("ponude", JSON.stringify(nizPonuda));
            popuniPonudeKomentare();
            $f_ponude.val("");
        }
    }
}


function popuniPonudeKomentare(){
    let htmlPonude = "";
    let htmlKomentari = "";
    $ponude.html("");
    $komentari.html("");
    let idDela = $("#delo").attr("alt");

    for(let i = 0; i < nizPonuda.length; i++){
        if(nizPonuda[i].idDela == idDela){
            htmlPonude = "";
            htmlPonude = $("<div></div>").addClass("blok_ponuda");
            if(jezik == "srb")
                htmlPonude.append($("<p></p>").html("Iznos: " + nizPonuda[i].iznos));
            else
                htmlPonude.append($("<p></p>").html("Value: " + nizPonuda[i].iznos));
            htmlPonude.append($("<div></div>").addClass("blok_ponuda_user").html(nizPonuda[i].user));
            $ponude.append(htmlPonude);
        }
    }
    for(let i = 0; i < nizKomentara.length; i++){
        if(nizKomentara[i].idDela == idDela){
            htmlKomentari = "";
            htmlKomentari = $("<div></div>").addClass("blok_komentar");
            htmlKomentari.append($("<p></p>").html(nizKomentara[i].komentar));
            htmlKomentari.append($("<div></div>").addClass("blok_komentar_user").html(nizKomentara[i].user));
            $komentari.append(htmlKomentari);
        }
    }
}

function sledeci_id_komentar(){
    let mx = 0;
    for(let i = 0; i < nizKomentara.length; i++){
        mx = Math.max(mx, parseInt(nizKomentara[i].idKomentar.substr(3, 5)));
    }
    return "ko_" + (mx + 1);
}

function sledeci_id_ponuda(){
    let mx = 0;
    for(let i = 0; i < nizPonuda.length; i++)
        mx = Math.max(mx, parseInt(nizPonuda[i].idPonude.substr(3, 4)));
    return "po_" + (mx + 1);
}