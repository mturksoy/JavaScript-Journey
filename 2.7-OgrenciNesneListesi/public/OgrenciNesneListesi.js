/**
 * 
 */

 const ogrenciNumaralari = [201,202,203,204,205,206,207,
 							208,209,210,211,212,213,214,
 							215,216,217];
 
 const ogrenciAdlari = ["Damla","Kayra","Muhammet","Ayşe","Hakan",
 						"Aslı","Azra","Batuhan","Mert","Boran","Esra",
 						"İlayda","Esra","Can","Emre","Talha","Tuğrul"];
 
 const puanlar = [417,408,407,397,392,394,389,
 				  435,422,434,432,429,427,423,
 				  395,380,383];
 
 const fakulteler = ["Eğitim","Mühendislik","Fen","Tıp","Mühendislik",
 					 "Tıp","Fen","Eğitim","Hukuk","Besyo","Fen",
 					 "Tıp","Mühendislik","Hukuk","Eğitim","Tıp","Fen"];
 					
 /**Ogrenci Nesnesi Aşama 1 */					 
// const ogrenci = {
//	 no: -1,
//	 adi: ""
// };
 
 /**Ogrenci Nesnesi Aşama 2 */					 
// const ogrenci = {
//	 no: -1,
//	 adi: "",
//	 noAdi: function(){
//		 let geciciDizgi = this.no + " -> " + this.adi;
//		 return geciciDizgi;
//	 }
// };

/**Ogrenci Nesnesi Aşama 3 */					 
 const ogrenci = {
	 no: -1,
	 adi: "",
	 fakulte: "",
	 puan: 0.0,
	 noAdi: function(){
		 let geciciDizgi = this.no + " -> " + this.adi;
		 return geciciDizgi;
	 },
	 tumBilgiler: function(){
		 let geciciDizgi = this.no + ", " + this.adi + ", " + this.fakulte + ", " + this.puan;
		 return geciciDizgi; 
	 }
 };

/**Aşama 4 Ogrenci "Constructor" yöntemi */
function Ogrenci(no,adi,fakulte,puan){
	this.no = -1;
	this.adi = "";
	this.fakulte = "";
	this.puan = -1;
	this.tumBilgiler = function(){
		let geciciDizgi = this.no + ", " + this.adi + ", " + this.fakulte + ", " + this.puan;
		return geciciDizgi; 
	}
}

 function sayfaYukle(){
	 var cizelge = document.getElementById("table-1");
	 var ogrenciSayisi = ogrenciNumaralari.length;
	 
	 for (let k = 0; k < ogrenciSayisi; k++){
		 let numara = ogrenciNumaralari[k];
		 let adi = ogrenciAdlari[k];
		 
		 ogrenci.no = numara;
		 ogrenci.adi = adi;
		 /**ilk tasarım */
//  	 cizelge.innerHTML += " <tr> <td> " + numara + "</td> <td>" + isim + "</td></tr>"; 
		/**Aşama 1 */
//		cizelge.innerHTML += " <tr> <td> " + ogrenci.no + "</td> <td>" + ogrenci.adi + "</td></tr>"; 
		
		/**Aşama 2 */
//		cizelge.innerHTML += " <tr> <td> " + ogrenci.no + "</td> <td>" + ogrenci.adi + "</td><td>" + ogrenci.noAdi() + "</td></tr>"; 
		
		/**Aşama 3 */
		ogrenci.fakulte = fakulteler[k];
		ogrenci.puan = puanlar[k];
		cizelge.innerHTML += " <tr> <td> " + ogrenci.no +
							  "</td> <td>" + ogrenci.adi +
							  "</td><td>" + ogrenci.fakulte + 
							  "</td><td>" + ogrenci.puan +
							  "</td></tr>"; 

		/**Aşama 3.1 */
		cizelge.innerHTML += " <tr> <td colspan='4'> " + ogrenci.tumBilgiler() + "</td> </tr>"; 	
	 }
	 
	 //**************************************************** */
	 /****************Öğrenci Listesi (array of object) (Aşama 4) */
	 
	 var ogrenciListesi = [];
	 
	 for(let k = 0; k < ogrenciSayisi; k++){
		 let ogr = new Ogrenci;
		 ogr.no = ogrenciNumaralari[k];
		 ogr.adi = ogrenciAdlari[k];
		 ogr.fakulte = fakulteler[k];
		 ogr.puan = puanlar[k];
		 ogrenciListesi.push(ogr);
	 }
	 
	 for (let ogr of ogrenciListesi){
		 console.log("-> " + ogr.tumBilgiler());
	 }
	 console.log("**********************************");
	 
	 ogrenciListesi.pop(ogrenciListesi.length - 1); // girilen yerden veri çıkartmayı sağlar. burada sondakini kaldırır.
	 for (let ogr of ogrenciListesi){
		 console.log("-> " + ogr.tumBilgiler());
	 }
	 
	 }
	 
	 
	
function digerBilgiler(){
	let enKucukNumara = Math.min(...ogrenciNumaralari);
	let enKucukIndis = ogrenciNumaralari.indexOf(enKucukNumara);
	let enKucukAd = ogrenciAdlari[enKucukIndis];
	document.getElementById("p-1").innerHTML = "En küçük numaralı öğrencimiz: " + enKucukAd + " , " + enKucukNumara;

}
 
 