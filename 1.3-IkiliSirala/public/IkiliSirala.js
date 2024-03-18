/**
 * Bu program girilen iki sayıyı büyükten küçüğe sıralaycaktır
 */

 function karsilastir(){
	 var birinciSayi = +document.getElementById("input-1").value;
	 var ikinciSayi = +document.getElementById("input-2").value;
	 var sonuc = "";
	 
	  if(birinciSayi > ikinciSayi)
		  sonuc = birinciSayi + " > " + ikinciSayi;
	  
	  else if(birinciSayi == ikinciSayi)
		  sonuc = birinciSayi + " = " + ikinciSayi;

	  else
		  sonuc = ikinciSayi + " > " + birinciSayi;
		  
	// else sonuc = (birinciSayi > ikinciSayi) ? birinciSayi + " > " + ikinciSayi : ikinciSayi + " > " + birinciSayi;
	//this is ternary operator else if ve else kısmını tek satır kodda yapan kısım
	
	//tüm if bloğunu ise şu şekilde yapabiliriz:
	// sonuc = (birinciSayi == ikinciSayi) ? birinciSayi + " = " + ikinciSayi : (birinciSayi > ikinciSayi) ? birinciSayi + " >> " + ikinciSayi : ikinciSayi + " >> " + birinciSayi;
		  
		  document.getElementById("p-1").innerHTML = sonuc;
 }
 
 function temizle(){
	 document.getElementById("input-1").value = "";
	 document.getElementById("input-2").value = "";
	 document.getElementById("p-1").innerHTML = "Sonuç burada görüntülenecektir...";
 }