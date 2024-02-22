$(document).ready(function(){
    ucitavanjeStanice();
    $registracija = $("#registracija_dugme");
    let proveraIstiEmail = 0;
    let proveraIstiUsername = 0;

    $registracija.click(function(){
        if(provera == 1){
            if(jezik == "srb")
                alert("Vec ste prijavljeni!");
            else
                alert("You are already registered!");
            if(jezik == "srb")
                window.location.href="nalog.html";
            else
                window.location.href="nalog_e.html";
            return;
        }
        let reg1 = /^\w+@\w+(\.\w{2,3})$/;
        let p_mail = $(".f_mail").val();
        let p_user = $(".f_user").val();
        let p_pass1 = $(".f_pass1").val();
        let p_pass2 = $(".f_pass2").val();
        proveraIstiEmail = 0;
        proveraIstiUsername = 0;
        if(p_mail != "" && p_user != "" && p_pass1 != "" && p_pass2 != "" && reg1.test(p_mail) && proveraProfila(p_mail, p_user) && p_pass1 == p_pass2){
            nizKorisnika.push({
                mejl : p_mail,
                user : p_user,
                pass : p_pass1
            });
            localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
            if(jezik == "srb")
                alert("Uspesna registracija!");
            else
                alert("Successful registration!");
            if(jezik == "srb")
                window.location.href="prijava.html";
            else
                window.location.href="prijava_e.html";
        }
        else{
            if(p_mail == "" || p_user == "" || p_pass1 == "" || p_pass2 == ""){
                if(jezik == "srb")
                    alert("Sva polja moraju biti popunjena!");
                else
                    alert("All fields must be filled!");
                return;
            }
            else if(reg1.test(p_mail) == false){
                if(jezik == "srb")
                    alert("Elektronska pošta nije u pravilnom obliku!");
                else
                    alert("The email address is not in the correct format!");
                return;
            }
            else if(proveraIstiEmail == 1){
                if(jezik == "srb")
                    alert("Postoji korisnik sa istom elektronskom poštom!");
                else
                    alert("There is a user with the same email address!");
                return;
            }
            else if(proveraIstiUsername == 1){
                if(jezik == "srb")
                    alert("Postoji korisnik sa istim korisničkim imenom!");
                else
                    alert("There is a user with the same username!");
                return;
            }
            else if(p_pass1 != p_pass2){
                if(jezik == "srb")
                    alert("Ponovljena lozinka je različita!");
                else
                    alert("The repeated password is different!");
                return;
            }
        }
    });

    function proveraProfila(p_mail, p_user){
        let provera1 = true;
        for(i = 0; i < nizKorisnika.length; i++){
            if(p_user == nizKorisnika[i].user){
                proveraIstiUsername = 1;
                provera1 = false;
            }
            if(p_mail == nizKorisnika[i].mejl){
                proveraIstiEmail = 1;
                provera1 = false;
            }
        }
        return provera1;
    }
});