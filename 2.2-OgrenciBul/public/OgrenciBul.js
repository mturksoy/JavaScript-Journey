/**
 * 
 */

 const numaralar = [201,202,203,204,205,206,207,
 					208,209,210,211,212,213,214,
 					215,216,217];
 					
 const adlar = ["Damla","Kayra","Muhammet","Ayşe","Hakan",
 				"Aslı","Azra","Batuhan","Mert","Boran","Esra",
 				"İlayda","Esra","Can","Emre","Talha","Tuğrul"];
 	
var diziBoyutu;	
 		
 function sayfaYukle(){
	 var minNumara = Math.min(...numaralar);
	 var maxNumara = Math.max(...numaralar);
	 diziBoyutu = numaralar.length;
	 document.getElementById("input-1").setAttribute("min",minNumara);
	 document.getElementById("input-1").setAttribute("max",maxNumara);
	
     document.getElementById("input-2").setAttribute("min",1);
     document.getElementById("input-2").setAttribute("max",diziBoyutu);
     console.log(diziBoyutu);	
 }
 
 function numaradanBul(){
	 var bulunacakOgrenci = ~~document.getElementById("input-1").value;
	 var ogrenciSirasi = numaralar.indexOf(bulunacakOgrenci);
	 var spanNesnesi = document.getElementById("span-1");
	 spanNesnesi.innerHTML = bulunacakOgrenci;
	 if (ogrenciSirasi == -1){
		 spanNesnesi.innerHTML += "'lı öğrenci bulunamadı...";
	 }else
	 spanNesnesi.innerHTML += ", " + ++ogrenciSirasi + ". sırada...";
 }
 
 function sıradanBul(){
	 var ogrenciSirasi = ~~document.getElementById("input-2").value;
	 var spanNesnesi = document.getElementById("span-2");
	 
	 if((ogrenciSirasi < 1) || ogrenciSirasi > diziBoyutu){
		 spanNesnesi.innerHTML = ogrenciSirasi + " sıralı öğrenci mevcut değil veya hatalı giriş!!!";
	 }else{
	 var ogrenciAdi = adlar[ogrenciSirasi - 1];
	 var ogrenciNumarasi = numaralar[ogrenciSirasi - 1];
	 spanNesnesi.innerHTML = ogrenciSirasi + ". ve " + ogrenciNumarasi + "'li öğrenci: " + ogrenciAdi;
	 }
	 
 }