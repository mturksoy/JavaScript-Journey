/**
 * 
 */

const acilisDizgisi = "Sayi tahmin oyununa hoş geldiniz!..";
var sonucParagrafi;
var tutulanDeger = 0;
var tahminAltDeger = 1;
var tahminUstDeger = 20;
var tahminSayisi;
 
function sayfaYukle(){
	var tahminGirisi = document.getElementById("input-3");
	sonucParagrafi = document.getElementById("p-1");
	sonucParagrafi.innerHTML = acilisDizgisi;
	
	document.getElementById("input-3").disabled = true;
	document.getElementById("button-1").disabled = true;
	
	document.getElementById("input-1").setAttribute("min",tahminAltDeger);  // Alt Sınır
	document.getElementById("input-1").setAttribute("max",tahminUstDeger);
	document.getElementById("input-2").setAttribute("min",tahminAltDeger);  // Üst Sınır
	document.getElementById("input-2").setAttribute("max",tahminUstDeger);
	tahminGirisi.setAttribute("min",tahminAltDeger);  // Tahmin
	tahminGirisi.setAttribute("max",tahminUstDeger);
	
	
	//Enter key addEventlistener
	tahminGirisi.addEventListener("keyup",function(event){
		if(event.keyCode === 13){
			event.preventDefault();
			document.getElementById("button-1").click();
		}
	})
	
}

function yeniSayiTut(){
	var min = +document.getElementById("input-1").value;
	var max = +document.getElementById("input-2").value;
	var deger = rastgeleSayi(min,max);
	
	if(min < max){
		var tahminGirisi = document.getElementById("input-3");
		tahminGirisi.setAttribute("min",min);
		tahminGirisi.setAttribute("max",max);
		tahminGirisi.disabled = false;
		tahminGirisi.value = min;
		document.getElementById("button-1").disabled = false;
		
		//tutulan sayi denetimi
		tutulanDeger = deger;
		tahminSayisi = 0;
		sonucParagrafi.innerHTML = min + " ile " + max + " aralığında bir sayi tuttum...";
		console.log("Tutulan değer -> " + tutulanDeger);
	}else
		alert("min < max şeklinde değer aralığı giriniz...");
}

function rastgeleSayi(min,max){
	var hamDeger,asilDeger;
	min = Math.ceil(min);
	max = Math.floor(max);
	hamDeger = Math.random();
	asilDeger = hamDeger*(max-min+1)+min;
	asilDeger = Math.floor(asilDeger);
	return asilDeger;
}

function tahminEt(){
	 var tahmin = ~~document.getElementById("input-3").value;
	 if(tahmin > tutulanDeger)
	 	sonucParagrafi.innerHTML = ++tahminSayisi + ". tahmininiz yanlış. Aşağı inin...";
	 else if(tahmin < tutulanDeger)
	 	sonucParagrafi.innerHTML = ++tahminSayisi + ". tahmininiz yanlış. Yukarı çıkın...";
	 else{
		 sonucParagrafi.innerHTML = "Tebrikler " + ++tahminSayisi + ". tahminde bildiniz";
		 document.getElementById("input-3").disabled = true;
		document.getElementById("button-1").disabled = true;
	 }
}