/**
 * 
 */

 const onLoadString = "load";
 const onCleanString = "clean";
 const dizgiGirisUyarisi = "Bir dizgi giriniz";
 const sonuclarBolgesi = "Dizgi İşlemleri Burada Görüntülenir... <br />";
 const girisRengi = "#787878";
 const girisRengiEtkin = "#770000";
 const girisArkaPlanRengi = "#FFFFAA";
 const girisArkaPlanRengiEtkin = "#FFDFDF";
 var giris_1, giris_2, sonuclar, selectNesnesi;
 
 const dizgiOptGroupListesi = ["Temel Dizgi İşlemleri", "Diğer Dizgi İşlemleri"];
 const dizgiOptionListesi = [
 							["length", "+, concat()", "slice(), substring(), substr()", "replace()", "toUpperCase()", "toLowerCase()"],
 							["padStart()", "padEnd()", "Karakter Listesi []","", "",""]
 							];
 
 function sayfaYukle(){
	 if(arguments[0] == onLoadString){
		 giris_1 = document.getElementById("input-1");
		 giris_2 = document.getElementById("input-2");
		 sonuclar = document.getElementById("p-1");
		 
		 giris_1.style.backgroundColor = girisArkaPlanRengi;
		 giris_1.style.color = girisRengi;
		 giris_2.style.backgroundColor = girisArkaPlanRengi;
		 giris_2.style.color = girisRengi;
		 
		 selectNesnesi = document.getElementById("select-1");
		 let k = 0;
		 let optionGroupNesnesi, optionNesnesi;
		 
		 for(let optionGroupGeciciDizgisi of dizgiOptGroupListesi){
			 optionGroupNesnesi = document.createElement("optgroup"); //Ekleyeceğimiz verinin türünü belirliyoruz --> optgroup
			 optionGroupNesnesi.label = optionGroupGeciciDizgisi;
			 for(let optionGeciciDizgi of dizgiOptionListesi[k]){
				 if(optionGeciciDizgi != ""){
					 optionNesnesi = document.createElement("option");
					 optionNesnesi.innerHTML = optionNesnesi.value = optionGeciciDizgi;
					 optionGroupNesnesi.appendChild(optionNesnesi);
				 }
				 else	
				 	break;
			 }
			 selectNesnesi.append(optionGroupNesnesi);
			 k++;
		 }
	 }
	 
	 giris_1.value = dizgiGirisUyarisi;
	 
	 giris_2.value = dizgiGirisUyarisi;
	 
	 document.getElementById("button-2").disabled = true;
	 document.getElementById("p-1").innerHTML = sonuclarBolgesi;
 }
 
 function veriGirisiBasladi(cagiranGirisNesnesi){
	 cagiranGirisNesnesi.style.backgroundColor = girisArkaPlanRengiEtkin;
	 cagiranGirisNesnesi.style.color = girisRengiEtkin;
	 if(cagiranGirisNesnesi.value == dizgiGirisUyarisi)
	 	cagiranGirisNesnesi.value = "";
 }
 
 function veriGirisiBitti(cagiranGirisNesnesi){
	 cagiranGirisNesnesi.style.backgroundColor = girisArkaPlanRengi;
	 cagiranGirisNesnesi.style.color = girisRengi;
	 if(cagiranGirisNesnesi.value == "")
	 	cagiranGirisNesnesi.value = dizgiGirisUyarisi;
	 else
	 	document.getElementById("button-2").disabled = false;	 
 }
 
 function islemSecildi(){
	 var geciciDizgi = document.getElementById("select-1").value;
	 var islemKodu = dizgiOptionListesi[0].indexOf(geciciDizgi);
	 if(islemKodu == -1){ //yani bulamadıysa
		 islemKodu = dizgiOptionListesi[0].length + dizgiOptionListesi[1].indexOf(geciciDizgi);
	 }
	 dizgiIslemleri2(islemKodu);
 }
 
 function temizle(){
	 sayfaYukle(onCleanString);
 }
 
 function dizgiIslemleri2(islemKodu){
	 var dizgi_1 = giris_1.value;
	 var dizgi_2 = giris_2.value;
	 var geciciDizgi = "";
	 
	 if((dizgi_1 != dizgiGirisUyarisi) && (dizgi_2 != dizgiGirisUyarisi)){
	 	sonuclar.innerHTML = sonuclarBolgesi;
	 	
	 	switch (islemKodu){
	 		case 0:
			 	geciciDizgi = "dizgi_1.length -> " + dizgi_1.length + "  dizgi_2.length -> " + dizgi_2.length;
			 	sonuclar.innerHTML += geciciDizgi + "<br />";
			 	break;
			 	
			 case 1:
				 geciciDizgi = "dizgi_1 + dizgi_2 -> " + dizgi_1 + dizgi_2;	
				 sonuclar.innerHTML += geciciDizgi + "<br />"; 
				 
				 geciciDizgi = "dizgi_1.concat(dizgi_2) -> " + dizgi_1.concat(dizgi_2);	
				 sonuclar.innerHTML += geciciDizgi + "<br />";
				 break;
			 	
			 case 2:	
			 	try{
					 if(dizgi_1.length < 8){
						 var hata = new Error("slice(), substring ve substr için en az 8 karakter uzunluğunda dizgiler girmelisiniz...");
						 hata.name = "Uyarı: slice(), substring() ve substr() uyarısı: ";
						 throw(hata);
					 }
					 geciciDizgi = "dizgi_1.slice(3, 8) -> " + dizgi_1.slice(3,8);
					 sonuclar.innerHTML += geciciDizgi + "<br />";
					 
					 geciciDizgi = "dizgi_1.substring(3, 8) -> " + dizgi_1.substring(3,8);
					 sonuclar.innerHTML += geciciDizgi + "<br />";
					 
					 geciciDizgi = "dizgi_1.substr(3, 8) -> " + dizgi_1.substr(3,8);
					 sonuclar.innerHTML += geciciDizgi + "<br />";
				 }catch(hata){
					 console.log("(Akış durdu)" + hata.name + " İleti: " + hata.message);
				 }
				 break;
				 
			 case 3: 
				 geciciDizgi = "dizgi_1.replace(\"e\", \"A\") -> " + dizgi_1.replace("e", "A");	
				 sonuclar.innerHTML += geciciDizgi + "<br />";
				 
				 geciciDizgi = "dizgi_1.replace(\"dene\", \"söyle\") -> " + dizgi_1.replace("dene", "söyle");	
				 sonuclar.innerHTML += geciciDizgi + "<br />";
				 break;
				 
			 case 4:
				 geciciDizgi = "dizgi_1.toUpperCase() -> " + dizgi_1.toUpperCase();	
				 sonuclar.innerHTML += geciciDizgi + "<br />";
				 break;
				 
			 case 5:
				 geciciDizgi = "dizgi_1.toLowerCase() -> " + dizgi_1.toLowerCase();	
				 sonuclar.innerHTML += geciciDizgi + "<br />";
				 break;
				
				 /*geciciDizgi = "dizgi_1.trim() -> " + dizgi_1.trim();	
				 sonuclar.innerHTML += geciciDizgi + "<br />";*/
				 
			 case 6:
				 geciciDizgi = "dizgi_2.padStart(20,'*') -> " + dizgi_2.padStart(20,'*');	
				 sonuclar.innerHTML += geciciDizgi + "<br />";
				 break;
				 
			 case 7:
				 geciciDizgi = "dizgi_2.padEnd(20, '*') -> " + dizgi_2.padEnd(20, '*');	
				 sonuclar.innerHTML += geciciDizgi + "<br />"; 
				 break;
				 
			 case 8:
				 geciciDizgi = "";
				 
				 for(let k = 0; k <dizgi_1.length; k++)
				 	geciciDizgi += "dizgi_! [" +k+ "]: " + dizgi_1[k] + "<br />";
				 	
				 sonuclar.innerHTML += geciciDizgi + "<br />";
				 break;
	 	}
	 	
	 }else{	
	 	alert("İşlem yapılacak dizgileri giriniz: ");
	 	selectNesnesi[0].selected = 'true';
	 	}
 }
 
 function dizgiIslemleri(){
	 var dizgi_1 = giris_1.value;
	 var dizgi_2 = giris_2.value;
	 var geciciDizgi = "";
	 
	 if((dizgi_1 != dizgiGirisUyarisi) && (dizgi_2 != dizgiGirisUyarisi)){
	 	sonuclar.innerHTML = sonuclarBolgesi;
	 	
	 	geciciDizgi = "dizgi_1.length -> " + dizgi_1.length + "  dizgi_2.length -> " + dizgi_2.length;
	 	sonuclar.innerHTML += geciciDizgi + "<br />";
	 	
	 	try{
			 if(dizgi_1.length < 8){
				 var hata = new Error("slice(), substring ve substr için en az 8 karakter uzunluğunda dizgiler girmelisiniz...");
				 hata.name = "Uyarı: slice(), substring() ve substr() uyarısı: ";
				 throw(hata);
			 }
			 geciciDizgi = "dizgi_1.slice(3, 8) -> " + dizgi_1.slice(3,8);
			 sonuclar.innerHTML += geciciDizgi + "<br />";
			 
			 geciciDizgi = "dizgi_1.substring(3, 8) -> " + dizgi_1.substring(3,8);
			 sonuclar.innerHTML += geciciDizgi + "<br />";
			 
			 geciciDizgi = "dizgi_1.substr(3, 8) -> " + dizgi_1.substr(3,8);
			 sonuclar.innerHTML += geciciDizgi + "<br />";
		 }catch(hata){
			 console.log("(Akış durdu)" + hata.name + " İleti: " + hata.message);
		 }
		 geciciDizgi = "dizgi_1 + dizgi_2 -> " + dizgi_1 + dizgi_2;	
		 sonuclar.innerHTML += geciciDizgi + "<br />"; 
		 
		 geciciDizgi = "dizgi_1.concat(dizgi_2) -> " + dizgi_1.concat(dizgi_2);	
		 sonuclar.innerHTML += geciciDizgi + "<br />";
		 
		 geciciDizgi = "dizgi_1.replace(\"e\", \"A\") -> " + dizgi_1.replace("e", "A");	
		 sonuclar.innerHTML += geciciDizgi + "<br />";
		 
		 geciciDizgi = "dizgi_1.replace(\"dene\", \"söyle\") -> " + dizgi_1.replace("dene", "söyle");	
		 sonuclar.innerHTML += geciciDizgi + "<br />";
		 
		 geciciDizgi = "dizgi_1.toUpperCase() -> " + dizgi_1.toUpperCase();	
		 sonuclar.innerHTML += geciciDizgi + "<br />";
		 
		 geciciDizgi = "dizgi_1.toLowerCase() -> " + dizgi_1.toLowerCase();	
		 sonuclar.innerHTML += geciciDizgi + "<br />";
		 
		 /*geciciDizgi = "dizgi_1.trim() -> " + dizgi_1.trim();	
		 sonuclar.innerHTML += geciciDizgi + "<br />";*/
		 
		 geciciDizgi = "dizgi_2.padStart(20,'*') -> " + dizgi_2.padStart(20,'*');	
		 sonuclar.innerHTML += geciciDizgi + "<br />";
		 
		 geciciDizgi = "dizgi_2.padEnd(20, '*') -> " + dizgi_2.padEnd(20, '*');	
		 sonuclar.innerHTML += geciciDizgi + "<br />"; 
		 
		 geciciDizgi = "";
		 
		 for(let k = 0; k <dizgi_1.length; k++)
		 	geciciDizgi += "dizgi_! [" +k+ "]: " + dizgi_1[k] + "<br />";
		 	
		 sonuclar.innerHTML += geciciDizgi + "<br />";
	 }else	
	 	alert("İşlem yapılacak dizgileri giriniz: ");
 }
 