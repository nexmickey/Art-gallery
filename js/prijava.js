$(document).ready(function(){
    ucitavanjeStanice();
    $prijava = $("#prijava_dugme");
    $user = $("#user");
    $pass = $("#pass");

    $prijava.click(function(){
        if(provera == 1){
            if(jezik == "srb")
                alert("Vec ste prijavljeni!");
            else
                alert("You are already logged in!");
            if(jezik == "srb")
                window.location.href="nalog.html";
            else
                window.location.href="nalog_e.html";
            return;
        }
        let p_user = $user.val();
        let p_pass = $pass.val();
        let uspesno_logovan = 0;
        for(let i = 0; i < nizKorisnika.length; i++){
            if(p_user == nizKorisnika[i].user && p_pass == nizKorisnika[i].pass){
                localStorage.setItem("logovan_korisnik", 1);
                localStorage.setItem("korisnik", p_user);
                uspesno_logovan = 1;
                if(jezik == "srb")
                    alert("Uspesna prijava!");
                else
                    alert("Successful login!");
                if(jezik == "srb")
                    window.location.href="nalog.html";
                else
                    window.location.href="nalog_e.html";
            }
        }
        if(uspesno_logovan == 0){
            if(jezik == "srb")
                alert("Ne postoji korisnik sa unetim imenom/lozinkom!");
            else
                alert("User with such name/password doesn't exist!");
            $user.val("");
            $pass.val("");
        }
    });
});