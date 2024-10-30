function cevapla(){
isaretlenen = [''];
sayi=0;
const malzeme=document.getElementsByName("option1");
let sa=0;
sayac=0;
rapor='';
kutu_ol="";
let sayan=0;

if(document.getElementById('rapor').innerHTML!=""){
    document.getElementById('rapor').innerHTML="";
}
for(eleman of malzeme){
    sa++;
}
console.log(sa);
for(i=0; i <= sa-1; i++){
var secenekler=document.getElementsByName("option1");
if(secenekler[i].checked){
    //alert(secenekler[i].value);
    //isaretlenen[i]=secenekler[i].value;
    
    isaretlenen.unshift(secenekler[i].value);
    
    
    }
    else{
        //alert("fgrfghmkıth");
    }
}
isaretlenen.pop();
console.log(isaretlenen);
console.log(isaretlenen.length);
//console.log(isaretlenen.toString());
window.alert(isaretlenen);
//document.writeln(isaretlenen);


tarifler= [["yogurt","su","salatalik","tuz"],["peynir","sut"]];
tarifadlri=["cacik","peysu",]
tarif_linkleri=[]

for(m=0;m<tarifler.length;m++){
for(r=0;r<isaretlenen.length;r++){

var sonuc=tarifler[m].indexOf(isaretlenen[r]);

if(sonuc>-1){
console.log(isaretlenen[r]);
sayac++;

if(tarifler[m].length== sayac)
{   
    calisti_mi=true;
    sayan++;
    let firstName = sayan;

    let text = `yaz${firstName}`;
   
    
    //kutu_ol+='<div id="'+text+'" class="div1"></div><br>' '<div id="'+text+'" class="div1"></div><br>'
    document.getElementById('rapor').innerHTML+='<div class="row row-cols-1 row-cols-md-3 g-4">'+
    '<div class="col">'+
    '<div class="card h-100">'+
    '<a href="https://www.google.com.tr/?hl=tr">'+'<img src="https://placehold.co/200" class="card-img-top" alt="https://placehold.co/400">'+'</a>'+
        '<div class="card-body">'+
        '<h5 class="card-title" id="'+text+'">Card title</h5>'+
          '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
        '</div>'+
        '<div class="card-footer">'+
          '<small class="text-muted">Last updated 3 mins ago</small>'+
        '</div>'+
      '</div>'+
    '</div>'+
    
  '</div>'+'<br>';
    //rapor=tarifadlri[m]+ " yapabilirsin"+"<br/>";
    document.getElementById(text).innerHTML=tarifadlri[m]+ " yapabilirsin"+"<br>";
    console.log(tarifadlri[m]);
    
}

}
//sonuc=-1;
}

sayac=0;

}

}


    
    



