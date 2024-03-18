/**
 * Bu program girilen sayının faktoriyelini hesaplayacaktır.
 */

const bilgi_satiri = "Sonuç burada görüntülecektir...";


// faktoriyel hesabı
 function faktoriyel_hesapla(){
	 var sayi= ~~document.getElementById("input-1").value;
	 var deger ;
	 var sonuc = 1;
	 
	 if(sayi >= 0){
		 for(deger = sayi; deger > 1 ; deger--){
			 sonuc *= deger;
		 }
		 document.getElementById("input-2").value = sayi + " sayisinin faktoriyeli: " + sonuc;
	 }else
	 alert("lütfen 0 veya pozitif bir sayı giriniz!!!");
	 

	 
 }
 
 function sayfa_yukle(){
	 var kaynak = arguments[0]
	 if(kaynak == 1)
	 	alert("sayfa_yukle(), onload() tarafından çağırılıyor...");
	 else if (kaynak == 2)
		 alert("sayfa_yukle(), temizle() tarafından çağırılıyor...");
	 
	 document.getElementById("input-2").value = bilgi_satiri;
 }
 
 //kutucukları temizleyecek fonksiyon
 function temizle(){
	 document.getElementById("input-1").value = "";
	 sayfa_yukle(2);
	 
 }