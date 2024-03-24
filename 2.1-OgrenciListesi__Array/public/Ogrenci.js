/**
 * 
 */

 const ogrenciNumaralari = [651,984,56115,4162,8920,9174];
 
 const ogrenciAdlari = ["Ayşe","Zeki", "Damla", "Kayra", "Ahmet", "Buse"];
 
 function sayfaYukle(){
	 var cizelge = document.getElementById("table-1");
	 var ogrenciSayisi = ogrenciNumaralari.length;
	 
	 for (let k = 0; k < ogrenciSayisi; k++){
		 let numara = ogrenciNumaralari[k];
		 let isim = ogrenciAdlari[k];
		 
		 cizelge.innerHTML += " <tr> <td> " + numara + "</td> <td>" + isim + "</td></tr>"; 
	 }
	 
	 let enKucukNumara = Math.min(...ogrenciNumaralari);
	 let enKucukIndis = ogrenciNumaralari.indexOf(enKucukNumara);
	 let enKucukAd = ogrenciAdlari[enKucukIndis];
	 document.getElementById("p-1").innerHTML = "En küçük numaralı öğrencimiz: " + enKucukAd + " , " + enKucukNumara;
 }
 
 