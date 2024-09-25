/**
 * 
 */

//Türkiyedeki 'A' ve 'B' ile başlayan iller matrisi

 const ilVektoru = ["ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI",
 					 "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", 
 					 "AYDIN",  "BALIKESİR", "BİLECİK", "BİNGÖL",
 					  "BİTLİS", "BOLU", "BURDUR", "BURSA"];
 					  
//Türkiyedeki 'A' ve 'B' ile başlayan iller arasındaki mesafenin matrisi 	
 					  
const mesafeMatrisi = [
	[0, 339, 578, 980, 602, 491, 546, 1003, 880, 902, 785, 633, 743, 688, 647, 856],
	[339, 0, 917, 647, 625, 732, 885, 715, 1219, 1241, 1032, 347, 410, 920, 986, 1104],
	[578, 917, 0, 1320, 595, 255, 287, 1224, 340, 324, 207, 1096, 1287, 417, 166, 278],
	[980, 647, 1320, 0, 740, 1055, 1424, 364, 1634, 1579, 1361, 359, 237, 1146, 1401, 1418],
	[602, 625, 595, 740, 0, 330, 822, 679, 934, 845, 626, 641, 832, 411, 760, 683],
	[491, 732, 255, 1055, 330, 0, 542, 960, 595, 536, 314, 887, 1078, 190, 421, 385],
	[546, 885, 287, 1424, 822, 542, 0, 1430, 345, 505, 472, 1188, 1289, 682, 121, 543],
	[1003, 715, 1224, 364, 679, 960, 1430, 0, 1564, 1454, 1236, 371, 545, 1021, 1390, 1293],
	[880, 1219, 340, 1634, 934, 595, 345, 1564, 0, 291, 525, 1398, 1589, 735, 286, 441],
	[902, 1241, 324, 1579, 845, 536, 505, 1454, 291, 0, 257, 1410, 1601, 434, 393, 152],
	[785, 1032, 207, 1361, 626, 314, 472, 1236, 525, 257, 0, 1187, 1378, 215, 351, 95],
	[633, 347, 1096, 359, 641, 887, 1188, 371, 1398, 1410, 1187, 0, 192, 1075, 1165, 1259],
	[743, 410, 1287, 237, 832, 1078, 1289, 545, 1589, 1601, 1378, 192, 0, 1266, 1356, 1450],
	[688, 920, 417, 1146, 411, 190, 682, 1021, 735, 434, 215, 1075, 1266, 0, 561, 272],
	[647, 986, 166, 1401, 760, 421, 121, 1390, 286, 393, 351, 1165, 1356, 561, 0, 422],
	[856, 1104, 278, 1418, 683, 385, 543, 1293, 441, 152, 95, 1259, 1450, 272, 422, 0]
];

const tasitMatrisi = [
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
];

var arrayBoyutu = mesafeMatrisi[0].length;

const mesafeVeTasitMatrisi = Array.of(
	new Array(arrayBoyutu),
	new Array(arrayBoyutu)
);

const ucakSiniri = 749.999, trenSiniri = 499.999, otobusSiniri = 99.999;
 					  
function sayfaYukle(){
	
//	for(var k = 0; k <dizgiBoyutu; k++)
//		console.log( (k+1).toString().padStart(2,'0') + " - " + ilVektoru[k]);  
//		//padStart ->> eğer string 2 karakterden düşükse başına 2 karakter olana kadar 0 ekle demek
	
	var sehir1Nesnesi = document.getElementById("select-1");
	var sehir2Nesnesi = document.getElementById("select-2");
	var sehir1 = document.createElement("option");
	var sehir2 = document.createElement("option");
	sehir1.innerText = sehir1.innerHTML = sehir1.text = sehir1.value = "Seçiniz-1";
	sehir1Nesnesi.append(sehir1);
	sehir2.innerText = sehir1.innerHTML = sehir2.text = sehir2.value = "Seçiniz-1";
	sehir2Nesnesi.append(sehir2);
	
	for(let sehirGeciciDizgi of ilVektoru){
		sehir1 = document.createElement("option");
		sehir1.innerText = sehir1.innerHTML = sehir1.text = sehir1.value = sehirGeciciDizgi;
		sehir1Nesnesi.append(sehir1);
		
		sehir2 = document.createElement("option");
		sehir2.innerText = sehir1.innerHTML = sehir2.text = sehir2.value = sehirGeciciDizgi;
		sehir2Nesnesi.append(sehir2);
	}
	mesafeVeTasitMatrisi[0] = [...mesafeMatrisi];
	mesafeVeTasitMatrisi[1] = [...tasitMatrisi];
	ucBoyutluDiziyiYazdir();
}

//function mesafeBul(){
//	var birinciSehir = document.getElementById("input-1").value;
//	var ikinciSehir = document.getElementById("input-2").value;
//	
//	var birinciSehirKonum = ilVektoru.indexOf(birinciSehir);
//	var ikinciSehirKonum = ilVektoru.indexOf(ikinciSehir);
//	
//	console.log(mesafeMatrisi[birinciSehirKonum][ikinciSehirKonum]);
//	
//}

function ucBoyutluDiziyiYazdir(){
	const ucak = 0, otobus = 1, taksi = 1, Ilici = 3, tren = 4;
	const tasitlar = ["Uçak", "Otobüs", "Taksi", "İl içi", "Tren"];
	var geciciDizgi = "";
	var x = mesafeVeTasitMatrisi;
	
	for (var k = 0; k < arrayBoyutu; k ++){
		for (var l = 0; l < arrayBoyutu; l++){
			if(k != l){
				if(x[0][k][l] > ucakSiniri)
					x[1][k][l] = ucak;
				else if(x[0][k][l] > trenSiniri)
					x[1][k][l] = tren;
				else if(x[0][k][l] > otobusSiniri)
					x[1][k][l] = otobus;
				else
					x[1][k][l] = taksi;
			}
			else	
				x[1][k][l] = Ilici;
		}
	}
	var anaCizelge = document.getElementById("ana_cizelge");
	var satir;
	var hucre;
	var satirNo = 0, sutunNo = 0, ilDikeySirasi = 0;
	
	while (satirNo <= arrayBoyutu){
		sutunNo = 0;
		satir = anaCizelge.insertRow(satirNo);
		if(satirNo == 0){/*Önce illeri yazdır */
		/*Boş hücre [0][0] */
		hucre = satir.insertCell(sutunNo);
		hucre.style.backgroundColor = "#9999FF";
		hucre.style.textAlign = "center";
		hucre.innerHTML = "<span class = \"span-2\"> \\ </span>";
		
		for (sutunNo = 1; sutunNo <= ilVektoru.length; sutunNo++){
			geciciDizgi += ilVektoru[sutunNo-1].slice(0,7);
			hucre = satir.insertCell(sutunNo);
			hucre.innerHTML = geciciDizgi;
			geciciDizgi = "";
		}
		sutunNo = 0;
		satir = anaCizelge.insertRow(++satirNo);	
	}
	while(sutunNo <= arrayBoyutu){
		if(sutunNo == 0){ /*İlk sütunda ilk olarak İl adı görüntülenmeli*/
			geciciDizgi += ilVektoru[ilDikeySirasi++].slice(0,7);
			hucre = satir.insertCell(sutunNo);
			hucre.innerHTML = geciciDizgi;
			geciciDizgi = "";
		}else{
			let km = x[0][satirNo-1][sutunNo-1];
			hucre = satir.insertCell(sutunNo);
			if(km > 0)
				geciciDizgi += km + "km, ";
			else
				hucre.style.backgroudColor = "#DDDDDD";
			geciciDizgi += tasitlar[x[1][satirNo-1][sutunNo-1]];
			hucre.innerHTML = geciciDizgi;
			geciciDizgi = "";
		}
		sutunNo++;
	}
	satirNo++;
	}
}

function sehirSecildi(){
	var secilenSehirler = ["",""];
	var sehir1Nesnesi = document.getElementById("select-1");
	var sehir2Nesnesi = document.getElementById("select-2");
	
	
	if((sehir1Nesnesi.selectedIndex != 0) && (sehir2Nesnesi.selectedIndex != 0) && 
	(sehir1Nesnesi.selectedIndex != sehir2Nesnesi.selectedIndex)){
		
		var secilenSehir1 = sehir1Nesnesi.value;
		var secilenSehir2 = sehir2Nesnesi.value;
		secilenSehirler[0] = secilenSehir1;
		secilenSehirler[1] = secilenSehir2;
	}
	return secilenSehirler;
}

function sehirSecildiOrtak(){
	var sehir1Nesnesi = document.getElementById("select-1");
	var sehir2Nesnesi = document.getElementById("select-2");
	
	if((sehir1Nesnesi.selectedIndex != 0) && (sehir2Nesnesi.selectedIndex != 0) && 
	(sehir1Nesnesi.selectedIndex != sehir2Nesnesi.selectedIndex)){
		
		var secilenSehir1 = sehir1Nesnesi.value;
		var secilenSehir2 = sehir2Nesnesi.value;
		
		let sehir1Dizini = sehir1Nesnesi.selectedIndex - 1;
		let sehir2Dizini = sehir2Nesnesi.selectedIndex - 1;
		let mesafe = mesafeMatrisi[sehir1Dizini][sehir2Dizini];
		
		document.getElementById("span-1").innerText = secilenSehir1 + " ile " + secilenSehir2 + " arasındaki mesafe: " + mesafe + " km'dir...";
		
		
	}
	
}

