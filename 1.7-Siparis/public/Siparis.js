/**
 * ALIŞVERİŞ UYGULAMASI
 */

 const bilgi_satiri = "Siparişleriniz burada görüntülenecektir...";
 const giris_satiri = "Tesekkür Ederiz... ";
 const sabit_siparis_adeti = 10;
 
 function sayfayi_yukle(){
	 document.getElementById("p-1").innerHTML = bilgi_satiri;
 }
 
 function adet_urun_ekle(){
	 var siparis_adedi, urun = document.getElementById("input-1").value, gecici_dizgi = giris_satiri;
	 
	 if(arguments[0] == 'ADET'){
		 siparis_adedi = ~~document.getElementById("input-2").value;
	 }else if(arguments[0] == 'ON'){
		 siparis_adedi = sabit_siparis_adeti;
	 }
	 
	 if(siparis_adedi < 1)
	 	siparis_adedi=1;
	 	
	 for(var i = siparis_adedi; i > 0; i--){
		 gecici_dizgi += urun + " ";
	 }
	 
	 document.getElementById("p-1").innerHTML = gecici_dizgi;
 }
 
 function temizle(){
	 document.getElementById("input-1").value = "";
	 document.getElementById("input-2").value = "";
	 document.getElementById("p-1").innerHTML = bilgi_satiri;

 }