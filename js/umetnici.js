function f(umetnik1){
    const { jsPDF } = jspdf;
    const doc = new jsPDF();

    doc.setFont("Helvetica", "bold"); doc.setFontSize(25);
    doc.setDrawColor(0, 0, 0);

    if(umetnik1 == "Pablo Picasso"){
        if(jezik == "srb") doc.text("Pablo Pikaso", 105, 30, null, null, "center");
        else doc.text("Pablo Picasso", 105, 30, null, null, "center");
        doc.setFont("times", "normal"); doc.setFontSize(15);
        doc.text("(1881–1973)", 105, 38, null, null, "center");
    }
    else if(umetnik1 == "Salvador Dali"){
        if(jezik == "srb") doc.text("Salvador Dali", 105, 30, null, null, "center");
        else doc.text("Salvador Dali", 105, 30, null, null, "center");
        doc.setFont("times", "normal"); doc.setFontSize(15);
        doc.text("(1904-1989)", 105, 38, null, null, "center");
    }
    else if(umetnik1 == "Marc Chagall"){
        if(jezik == "srb") doc.text("Mark Šagal", 105, 30, null, null, "center");
        else doc.text("Marc Chagall", 105, 30, null, null, "center");
        doc.setFont("times", "normal"); doc.setFontSize(15);
        doc.text("(1887–1985)", 105, 38, null, null, "center");
    }
    doc.line(70, 45, 140, 45);

    let y = 60;
    let niz1 = ["slika", "skulptura", "ostalo"];
    let niz2 = ["Slike:", "Skulpture:", "Ostalo:"];
    let niz2_e = ["Paintings:", "Sculptures:", "Other:"];

    for(let j = 0; j < 3; j++){
        y += 25;
        if(j > 0)
            doc.line(30, y - 10, 180, y - 10);
        doc.setTextColor(0,0,0);
        doc.setFont("times", "normal"); doc.setFontSize(20);
        if(jezik == "srb") doc.text(niz2[j], 30, y);
        else doc.text(niz2_e[j], 30, y);
        for(let i = 0; i < nizUmetnickihDela.length; i++){
            if(nizUmetnickihDela[i].umetnik_e == umetnik1 && nizUmetnickihDela[i].vrsta == niz1[j]){
                y += 10;
                doc.setTextColor(0,0,0);
                doc.setFont("times", "italic"); doc.setFontSize(18);
                let s1 = friz(nizUmetnickihDela[i].naziv);
                if(jezik == "srb") doc.text(s1 + " (" + nizUmetnickihDela[i].godina_nastanka + ")", 50, y);
                else doc.text(nizUmetnickihDela[i].naziv_e + " (" + nizUmetnickihDela[i].godina_nastanka + ")", 50, y);
            }
        }
    }
    y += 25;
    doc.line(30, y - 10, 180, y - 10);
    doc.setFont("times", "normal"); doc.setFontSize(15);
    doc.save('newFile.pdf');
}

function promeni(str, ind, slovo){
    return str.substring(0, ind) + slovo + str.substring(ind + 1);
}

function friz(s){
    let s1 = s;
    for(let i = 0; i < s1.length; i++){
        if(s1[i] == 'Đ') s1 = promeni(s1, i, "Dj");
        else if(s1[i] == 'đ') s1 = promeni(s1, i, "dj");
        else if(s1.charAt(i) == 'Č' || s1[i] == 'Ć') s1 = promeni(s1, i, "C");
        else if(s1.charAt(i) == 'č' || s1[i] == 'ć') s1 = promeni(s1, i, "c");
        //else if(s1.charAt(i) == 'Š') s1 = promeni(s1, i, "S");
        //else if(s1.charAt(i) == 'š') s1 = promeni(s1, i, "s");
    }
    return s1;
}
