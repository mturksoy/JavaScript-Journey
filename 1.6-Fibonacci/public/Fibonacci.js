/**
 * Sırası girilen sayının fibonacci değerini bulan program
 */

const bilgi_satiri = "Sonuç burada görüntülenecektir...";

//fibonacci hesabı
 function fibonacci_hesapla(){
	 var kaynak = ~~document.getElementById("input-1").value;
	 var fibonacci , bir_once = 1, iki_once = 1;
	 var gecici_dizge = "";
	 
	 if (kaynak > 2){	 
		 gecici_dizge = "İlk " + kaynak + " Leonardo Fibonacci sayisi: 1, 1";
		 for( var deger = 0; deger < kaynak-2; deger ++){
			 console.log("-> " + deger);
			 fibonacci = iki_once + bir_once;
			 iki_once = bir_once; 
			 bir_once = fibonacci;
			 
			 gecici_dizge += ", " + fibonacci;
		 }
	 	document.getElementById("p-1").innerHTML = gecici_dizge;
	}
	 else
	 	alert("3 veya daha büyük bir sayi giriniz!!!  İlk 2 Fibonacci değeri: 1, 1'dir...");
 }
 	
 
 //temizle tuşunu tekrar aktif hale getiren fonskiyon
 function temizle_tusu_aktif(){
	 document.getElementById("button-2").disabled = false;
 }
 
 //çıktı sıfırlama
 function sayfa_yukle(){
	 document.getElementById("p-1").innerHTML = bilgi_satiri;
	 document.getElementById("button-2").disabled = true;
 }
 
 //tüm panelleri sıfırlama
 function temizle(){
	 debugger;
	 document.getElementById("input-1").value =	"";
	 sayfa_yukle();
	 document.getElementById("button-2").disabled = true;
 }