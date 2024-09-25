/**
 * 
 */

function sayfaYukle(){
	alert("Evet sayfa yükleniyor...");
}

function ciftTikla(parametre){
	switch (parametre){
		case 1: 
			document.getElementById("label-1").setAttribute("class", "label-2");
			document.getElementById("label-1").innerHTML = "Örnek Çizelge";
			break;
		case 2:
			alert("Çizelgeye çift tıkladınız...");
			break;
		case 3:
			alert("Paragrafa çift tıkladınız...");
			break;
	}
}

function tarihiGoster(parametre){
	var haftaninGunleri = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
	var yilinAylari = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
	var tarih = new Date();
	var saat = tarih.toLocaleTimeString();
	
	switch (parametre){
		case 1:
			document.getElementById("span-1").innerHTML = tarih.toLocaleDateString() + ", " + saat;
			break;
		case 2:
			document.getElementById("span-2").innerHTML = tarih.getDate();
			break;
		case 3:
			document.getElementById("span-3").innerHTML = yilinAylari[tarih.getMonth()];
			break;
		case 4:
			//document.getElementById("span-4").innerHTML = tarih.getDay;
			document.getElementById("span-4").innerHTML = haftaninGunleri[tarih.getDay() - 1];
			break;
		case 5:
			document.getElementById("span-5").innerHTML = tarih.getFullYear();
			break;
		case 6:
			document.getElementById("span-6").innerHTML = saat;
			break;
	}
}
 
function imlecIslemi_1(cagiranGirisNesnesi, renkDizgisi){
	 cagiranGirisNesnesi.style.background = renkDizgisi;
}

function tusTiklandi(cagiranGirisNesnesi){
	cagiranGirisNesnesi.setAttribute("class", "button-C");
	cagiranGirisNesnesi.disabled = true;
}

function imlecIslemi_2(cagiranGirisNesnesi, yukseklik){
	 cagiranGirisNesnesi.style.height = yukseklik;
}

function imlecIslemi_3(cagiranGirisNesnesi, sinifAdi, metin){
	cagiranGirisNesnesi.setAttribute("class", sinifAdi);
	cagiranGirisNesnesi.innerHTML = metin;
}