$(document).ready(function(){
    ucitavanjeStanice();
    popuniPonude();

    function popuniPonude(){
        $polje = $(".polje0");
        htmlPolje = "";
        htmlSlike = "";
        delo = [];
        for(let i = 0; i < Math.min(3, nizPonuda.length); i++){
            $polje = $(".polje" + i);
            for(let j = 0; j < nizUmetnickihDela.length; j++){
                if(nizUmetnickihDela[j].idDela == nizPonuda[i].idDela){
                    delo = nizUmetnickihDela[j];
                    break;
                }
            }
            htmlSlike = $("<img>").attr("src", delo.src);
            if(jezik == "srb") $polje.append($("<a href = " + delo.putanja + "> </a>").append(htmlSlike));
            else $polje.append($("<a href = " + delo.putanja_e + "> </a>").append(htmlSlike));

            $polje.append($("<br>")); $polje.append($("<br>"));
            if(jezik == "srb") $polje.append($("<span></span>").html("Korisnik: " + nizPonuda[i].user).addClass("ponude_korisnik"));
            else $polje.append($("<span></span>").html("User: " + nizPonuda[i].user).addClass("ponude_korisnik"));
            $polje.append($("<br>"));
            if(jezik == "srb") $polje.append($("<span></span>").html("Ponuda: " + nizPonuda[i].iznos).addClass("ponude_ponuda"));
            else $polje.append($("<span></span>").html("Offer: " + nizPonuda[i].iznos).addClass("ponude_ponuda"));
        }
    }
});

