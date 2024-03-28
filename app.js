//let obrisiDugme=document.getElementsByClassName("obrisi");
//console.log(obrisiDugme);
function menjanjeBoje(boja){
    
    for (const dugme of obrisiDugme) {
        dugme.style.backgroundColor=boja;
        
    }
}
//menjanjeBoje("green");
let  menjanjeBojeA=(boja)=>{

    let obrisiDugme=document.getElementsByClassName("obrisi")
for (const dugme of obrisiDugme) {
    dugme.style.backgroundColor=boja;
}
}
//menjanjeBojeA("blue");
let menjanjeBojeB=(boja)=> Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja);
menjanjeBojeB("purple");
let obrisiDugme=document.getElementsByClassName("obrisi");
for (const dugme of obrisiDugme) {
    dugme.addEventListener("click",function(e){
        console.log(this);
        console.log(this.parentNode);
        let elementZaBrisanje=this.parentNode;
        elementZaBrisanje.remove();
        
    })
}
//function obrisiRed(){
   // this.parentNode.remove();

//}
//for (const dugme of obrisiDugme) {
    
//}
function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje=document.querySelector("#dodaj-destinaciju input");

    let nazivNoveDestinacije=inputPolje.value;
    if(nazivNoveDestinacije){
        let ul=document.getElementById("lista");
        let novili=document.createElement("li");
        novili.innerHTML= <span class="naziv">$[nazivNoveDestinacije]</span>;
        <span class="obrisi">obrisi </span>;
        Uint16Array.appendChild(novili);
        inputPolje.value="";
    }

function pozivCallback(){
    let form=document.forms["dodaj-destinaciju"];
    forma.addEventListener("submit",dodajDestinaciju);
}
}

