/**
 * Bu program girilen 3 adet sayıyı büyükten küçüğe sıralamaya yarar
 */
const bilgiSatiri ="Sonuç burada görüntülenecektir...";
//Üç sayıyı sıralayan fonksiyon
 function ucluSirala(){
	 var birinciSayi = +document.getElementById("input-1").value;
	 var ikinciSayi = +document.getElementById("input-2").value;
	 var ucuncuSayi = +document.getElementById("input-3").value;
	 
	 var enBuyuk,ortanca,enKucuk;
	 
	 if(birinciSayi > ikinciSayi){
		 enBuyuk = birinciSayi;
		 enKucuk = ikinciSayi;
		 if(birinciSayi > ucuncuSayi){
			 if(ucuncuSayi > ikinciSayi){
				 ortanca = ucuncuSayi;
			 }else{
				 ortanca = ikinciSayi;
				 enKucuk = ucuncuSayi;
			 }
		 }else{
			 enBuyuk = ucuncuSayi;
			 ortanca = birinciSayi;
		 }
	 }else{
		 enBuyuk = ikinciSayi;
		 enKucuk = birinciSayi;
		 if(ikinciSayi > ucuncuSayi){
			 if(ucuncuSayi > birinciSayi){
				 ortanca = ucuncuSayi;
			 }else{
				 ortanca = birinciSayi;
				 enKucuk = ucuncuSayi;
			 }
		 }else{
			 enBuyuk = ucuncuSayi;
			 ortanca = ikinciSayi;
		 }
	 }
	 
	 
document.getElementById("p-1").innerHTML= enBuyuk + ">>" + ortanca + ">>" + enKucuk;
	 
 }
 
 function sayfaYukle(){
	 document.getElementById("p-1").innerHTML = bilgiSatiri;
 }
 
 //Textbox'ları sıfırlayan fonksiyon
 function temizle(){
	 document.getElementById("input-1").value="";
	 document.getElementById("input-2").value="";
	 document.getElementById("input-3").value="";
	 
	 document.getElementById("p-1").innerHTML=bilgiSatiri;


 }