/**
 * ALIŞVERİŞ UYGULAMASI
 */

 const bilgi_satiri = "Siparişleriniz burada görüntülenecektir...";
 const giris_satiri = "Tesekkür Ederiz... ";
 const meyve_1 = "elma";
 const meyve_2 = "armut";
 const sebze_1 = "havuç";
 const sebze_2 = "biber";

 
 function sayfayi_yukle(){
	 document.getElementById("p-1").innerHTML = bilgi_satiri;
 }
 
 function adet_urun_ekle(){
	 var siparis_adedi = ~~document.getElementById("input-2").value, urun = document.getElementById("input-1").value;
	 var siparis_onay = true;
	 var gecici_dizgi = giris_satiri;
	 
	 if(siparis_adedi < 1)
	 	siparis_adedi=1;
	 
	 switch(urun){
		 case meyve_1: case meyve_2:
		 	alert ("Meyve stoklarımız yeterlidir...");
		 	break;
		 case sebze_1: case sebze_2:
			 alert ("Sebzelerimiz kendi bahçemizden. Teşekkür ederiz...");
			 break;
		 default:
			 if(siparis_adedi > 99){
				 alert("Stoklarımızda yeteri kadar ürün bulunmamaktadır. Üzgünüz...");
				 siparis_onay = false;
				 gecici_dizgi = "Siparişiniz onaylanmadı, <br/> Özür dileriz...";
			 }
			 else
			 	alert("Stoklarımızda " + siparis_adedi + " adet " + urun + " mevcuttur. Teşekkür ederiz...");
	 }
	 if(siparis_onay){
		  if(siparis_adedi < 1)
	 		 siparis_adedi=1;
		  for(var i = siparis_adedi; i > 0; i--){
		 	 gecici_dizgi += urun + " ";
	 }
	 }
	 document.getElementById("p-1").innerHTML = gecici_dizgi;
 }
 
 function temizle(){
	 document.getElementById("input-1").value = "";
	 document.getElementById("input-2").value = "";
	 document.getElementById("p-1").innerHTML = bilgi_satiri;

 }