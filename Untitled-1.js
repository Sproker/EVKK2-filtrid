
let variable = 0;
let variable2 = 0;
let suguvariable = 0;
let elukohtvariable = 0;
let vanusvariable = 0;
let haridusvariable = 0;
let emakeelvariable = 0;
let keelevaldaminevariable = 0;
let sotsvariable = 0;
let kodukeelvariable = 0;
let tekstvariable = 0;
let abivariable = 0;
let tekstikeelvariable = 0;

PeidaIsikFiltrid();
PeidaTekstiFiltrid();

PeidaSuguFilter();
PeidaElukohtFilter();
PeidaVanusFilter();
PeidaHaridusFilter();
PeidaEmakeelFilter();
PeidaKeeletaseFilter();
PeidaSotsiaalneFilter();
PeidatekstityypFilter();
PeidaAbivahendidFilter();
PeidaTekstikeelFilter();
PeidakodunekeelFilter();
document.getElementById("Isiku_heading2").onclick = function() {PeidaIsikFiltrid()};
document.getElementById("Teksti_heading2").onclick = function() {PeidaTekstiFiltrid()};

document.getElementById("sugu_filter").onclick = function() {PeidaSuguFilter()};
document.getElementById("Elukoht_Filter").onclick = function() {PeidaElukohtFilter()};
document.getElementById("Vanus_Filter").onclick = function() {PeidaVanusFilter()};
document.getElementById("Haridus_Filter").onclick = function() {PeidaHaridusFilter()};
document.getElementById("Emakeel_Filter").onclick = function() {PeidaEmakeelFilter()};
document.getElementById("Keelevaldamisetase_Filter").onclick = function() {PeidaKeeletaseFilter()};
document.getElementById("sotsiaalnetaust_Filter").onclick = function() {PeidaSotsiaalneFilter()};
document.getElementById("Kodunekeel_Filter").onclick = function() {PeidakodunekeelFilter()};
document.getElementById("Tekstikeel_filter").onclick = function() {PeidaTekstikeelFilter()};
document.getElementById("tekstityyp_Filter").onclick = function() {PeidatekstityypFilter()};
document.getElementById("abivahendid_Filter").onclick = function() {PeidaAbivahendidFilter()};




function TESTIMINEONHOMO(){      
    console.log("k2ivitans");   
    document.getElementById('Elukoht_Filter_Nupud').innerHTML="";
    var x = document.getElementById("filters");
    let list1=['Tallinn', 'Pärnu', 'Tartu'];
    let list2=['Tundmatu', 'Mees', 'Naine'];
    

    var docFrag = document.createDocumentFragment();

    for(var x = 0; x < list1.length; x++){
        var button = document.createElement('input');
        button.setAttribute('type', 'checkbox');
        button.setAttribute('name', 'Elukoht');
        button.setAttribute('value', list1[x]);
        button.setAttribute('class', 'btn-check');
        button.setAttribute('id', ("btn-check22"+x));
        button.setAttribute('autocomplete', 'off');
        button.setAttribute('checked', '');

        docFrag.appendChild(button);

        var button2 = document.createElement('label');
        button2.setAttribute('class', 'checkbox');
        button2.setAttribute('for', ("btn-check22"+x));
        var button3 = document.createElement('i');
        button3.setAttribute('class', 'fas fa-check');

        button2.appendChild(button3);

        var button4 = document.createElement('span');
        button4.innerHTML = list1[x];
        button2.appendChild(button4);

        docFrag.appendChild(button2);

    }
    
    document.getElementById('Elukoht_Filter_Nupud').appendChild(docFrag); 
}


function PeidaIsikFiltrid() {
    console.log(variable);
    if(variable == 0){
        document.getElementById("sugu").style.visibility = "hidden";
        document.getElementById("sugu").style.display = 'none';
        document.getElementById("elukoht").style.visibility = "hidden";
        document.getElementById("elukoht").style.display = 'none';
        document.getElementById("vanus").style.visibility = "hidden";
        document.getElementById("vanus").style.display = 'none';
        document.getElementById("haridus").style.visibility = "hidden";
        document.getElementById("haridus").style.display = 'none';
        document.getElementById("emakeel").style.visibility = "hidden";
        document.getElementById("emakeel").style.display = 'none';
        document.getElementById("keelevaldamisetase").style.visibility = "hidden";
        document.getElementById("keelevaldamisetase").style.display = 'none';
        document.getElementById("sotsiaalnetaust").style.visibility = "hidden";
        document.getElementById("sotsiaalnetaust").style.display = 'none';
        document.getElementById("kodunekeel").style.visibility = "hidden";
        document.getElementById("kodunekeel").style.display = 'none';
  
        variable = 1;
    }else{
        document.getElementById("sugu").style.visibility = "visible";
        document.getElementById("sugu").style.display = 'block';
        document.getElementById("elukoht").style.visibility = "visible";
        document.getElementById("elukoht").style.display = 'block';
        document.getElementById("vanus").style.visibility = "visible";
        document.getElementById("vanus").style.display = 'block';
        document.getElementById("haridus").style.visibility = "visible";
        document.getElementById("haridus").style.display = 'block';
        document.getElementById("emakeel").style.visibility = "visible";
        document.getElementById("emakeel").style.display = 'block';
        document.getElementById("keelevaldamisetase").style.visibility = "visible";
        document.getElementById("keelevaldamisetase").style.display = 'block';
        document.getElementById("sotsiaalnetaust").style.visibility = "visible";
        document.getElementById("sotsiaalnetaust").style.display = 'block';
        document.getElementById("kodunekeel").style.visibility = "visible";
        document.getElementById("kodunekeel").style.display = 'block';
        variable = 0;
    }
    console.log(variable);
}
function PeidaTekstiFiltrid() {
    console.log(variable);
    if(variable2 == 0){
        document.getElementById("tekstikeel").style.visibility = "hidden";
        document.getElementById("tekstikeel").style.display = 'none';
        document.getElementById("tekstityyp").style.visibility = "hidden";
        console.log("m2hin");
        document.getElementById("tekstityyp").style.display = 'none';
        document.getElementById("abivahendid").style.display = 'none';
        document.getElementById("abivahendid").style.display = 'none';


        variable2 = 1;
    }else{
        document.getElementById("tekstikeel").style.visibility = "visible";
        document.getElementById("tekstikeel").style.display = 'block';
        document.getElementById("tekstityyp").style.visibility = "visible";
        document.getElementById("tekstityyp").style.display = 'block';
        document.getElementById("abivahendid").style.visibility = 'visible';
        document.getElementById("abivahendid").style.display = 'block';
        variable2 = 0;
    }
}

function PeidaSuguFilter() {
    if(suguvariable == 0){
        document.getElementById("Sugu_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Sugu_Filter_Nupud").style.display = 'none';
        suguvariable = 1;
    }else{
        document.getElementById("Sugu_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Sugu_Filter_Nupud").style.display = 'block';
        suguvariable = 0;
    }
}

function PeidaElukohtFilter() {
    if(elukohtvariable == 0){
        document.getElementById("Elukoht_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Elukoht_Filter_Nupud").style.display = 'none';
        elukohtvariable = 1;
    }else{
        document.getElementById("Elukoht_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Elukoht_Filter_Nupud").style.display = 'block';
        elukohtvariable = 0;
    }
}
function PeidaVanusFilter() {
    if(vanusvariable == 0){
        document.getElementById("Vanus_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Vanus_Filter_Nupud").style.display = 'none';
        vanusvariable = 1;
    }else{
        document.getElementById("Vanus_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Vanus_Filter_Nupud").style.display = 'block';
        vanusvariable = 0;
    }
}
function PeidaHaridusFilter() {
    if(haridusvariable == 0){
        document.getElementById("Haridus_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Haridus_Filter_Nupud").style.display = 'none';
        haridusvariable = 1;
    }else{
        document.getElementById("Haridus_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Haridus_Filter_Nupud").style.display = 'block';
        haridusvariable = 0;
    }
}
function PeidaEmakeelFilter() {
    if(emakeelvariable == 0){
        document.getElementById("Emakeel_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Emakeel_Filter_Nupud").style.display = 'none';
        emakeelvariable = 1;
    }else{
        document.getElementById("Emakeel_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Emakeel_Filter_Nupud").style.display = 'block';
        emakeelvariable = 0;
    }
}
function PeidaKeeletaseFilter() {
    if(keelevaldaminevariable == 0){
        document.getElementById("Keelevaldamisetase_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Keelevaldamisetase_Filter_Nupud").style.display = 'none';
        keelevaldaminevariable = 1;
    }else{
        document.getElementById("Keelevaldamisetase_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Keelevaldamisetase_Filter_Nupud").style.display = 'block';
        keelevaldaminevariable = 0;
    }
}
function PeidaSotsiaalneFilter() {
    if(sotsvariable == 0){
        document.getElementById("sotsiaalnetaust_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("sotsiaalnetaust_Filter_Nupud").style.display = 'none';
        sotsvariable = 1;
    }else{
        document.getElementById("sotsiaalnetaust_Filter_Nupud").style.visibility = "visible";
        document.getElementById("sotsiaalnetaust_Filter_Nupud").style.display = 'block';
        sotsvariable = 0;
    }
}
function PeidakodunekeelFilter() {
    if(kodukeelvariable == 0){
        document.getElementById("Kodunekeel_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Kodunekeel_Filter_Nupud").style.display = 'none';
        kodukeelvariable = 1;
    }else{
        document.getElementById("Kodunekeel_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Kodunekeel_Filter_Nupud").style.display = 'block';
        kodukeelvariable = 0;
    }
}
function PeidatekstityypFilter() {
    if(tekstvariable == 0){
        document.getElementById("tekstityyp_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("tekstityyp_Filter_Nupud").style.display = 'none';
       
        tekstvariable = 1;
    }else{
        document.getElementById("tekstityyp_Filter_Nupud").style.visibility = "visible";
        document.getElementById("tekstityyp_Filter_Nupud").style.display = 'block';
        tekstvariable = 0;
    }
}
function PeidaAbivahendidFilter() {
    if(abivariable == 0){
        document.getElementById("abivahendid_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("abivahendid_Filter_Nupud").style.display = 'none';
        abivariable = 1;
    }else{
        document.getElementById("abivahendid_Filter_Nupud").style.visibility = "visible";
        document.getElementById("abivahendid_Filter_Nupud").style.display = 'block';
        abivariable = 0;
    }
}
function PeidaTekstikeelFilter() {
    if(tekstikeelvariable == 0){
        document.getElementById("Tekstikeel_Filter_Nupud").style.visibility = "hidden";
        document.getElementById("Tekstikeel_Filter_Nupud").style.display = 'none';
        tekstikeelvariable = 1;
    }else{
        document.getElementById("Tekstikeel_Filter_Nupud").style.visibility = "visible";
        document.getElementById("Tekstikeel_Filter_Nupud").style.display = 'block';
        tekstikeelvariable = 0;
    }
}
