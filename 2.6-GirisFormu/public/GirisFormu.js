const acilisDizgisi = "<div style=\"border: #222299 solid 2px;\">Hoş geldiniz...</div>";
const veriGirisDizgisi = "Adınızı Giriniz";
const bilgiDizisi_1 = "Şu anda sistemde ";
const bilgiDizisi_2 = "İşlem yapılıyor...";
const yukleDizgisi = "yukle";
const temizleDizgisi = "temizle";
const girisDugmeDizgisi = "Giriş";
const cikisDugmeDizgisi = "Çıkış";

function sayfaYukle(){
	
	document.getElementById("button-1").innerText = girisDugmeDizgisi;
	document.getElementById("input-1").value = veriGirisDizgisi;
	var paragraphObject = document.getElementById("p-1");
	paragraphObject.innerHTML = acilisDizgisi;
	document.getElementById("select-1").disabled = true;
	document.getElementById("button-2").disabled = true;
	
	if(arguments[0] == yukleDizgisi){
		
		document.addEventListener("dblclick", belgeCiftTiklandi);
		document.getElementById("input-1").addEventListener("dblclick", girisNesnesiCiftTiklandi);
		document.getElementById("input-1").addEventListener("keyup", function(event){
			if(event.keyCode === 13){
				event.preventDefault();
				document.getElementById("button-1").click();
			}
		});
		console.log(paragraphObject.dataset); /**dataSet örneği */
		console.log(paragraphObject.dataset.kisaAdi);
		console.log(paragraphObject.dataset.uzunAdi);
		paragraphObject.dataset.yeniBirNitelik1 = "Yeni Bir Nitelik...";
		console.log(paragraphObject.dataset.yeniBirNitelik1);
		
		let optionGroupObject;
		let optionGroupArray = ["Etkinlik Alanı", "Aritmetik ve Mantıksal Karşılaştırma"];
		let optionArray = [["Etkinlik Alanı-1", "Etkinlik Alanı-2"],
							["Aritmetik ve Mantıksal Karşılaştırma-1", "Aritmetik ve Mantıksal Karşılaştırma-2"]];
		let selectObject_1 = document.getElementById("select-1");
		let optionObject;
		let k = 0;
		
		for (let optionGroupGeciciDizgi of optionGroupArray){
			optionGroupObject = document.createElement("optgroup");
			optionGroupObject.innerHTML = optionGroupObject.value = optionGroupObject.label = optionGroupGeciciDizgi;
			
			for(let optionGeciciDizgi of optionArray[k]){
				optionObject = document.createElement("option");
				optionObject.innerHTML = optionObject.value = optionGeciciDizgi;
				optionGroupObject.append(optionObject);
			}
			selectObject_1.append(optionGroupObject);
			k++;
		}
	}
}

function belgeCiftTiklandi(event){
	alert("Belgeye çift tıklandı(2)...");
	console.log(event.target);
	console.log(event.currentTarget);
}

function girisNesnesiCiftTiklandi(event){
	alert("Giriş nesnesine çift tıklandı(2)...");
	event.stopPropagation();  /*bubbling -> capturing */
}

function giris(){
	var geciciDizgi = "?";
	geciciDizgi = document.getElementById("input-1").value;
	
	if(document.getElementById("button-1").innerText != cikisDugmeDizgisi){
		if(geciciDizgi != veriGirisDizgisi){
			alert("Hoş geldin " + geciciDizgi);
			document.getElementById("p-1").innerHTML = bilgiDizisi_1 + geciciDizgi +" " + bilgiDizisi_2;
			document.getElementById("select-1").disabled = false;
			document.getElementById("button-2").disabled = false;
			document.getElementById("input-1").disabled = true;
			document.getElementById("button-1").innerText = cikisDugmeDizgisi;
		}else{
			alert("Önce adınızı giriniz");
			document.getElementById("input-1").focus();
		}
	}else{
		alert("Böylece kullanıcının \"Çıkış\"ı gerçekleştirilir...");
    	temizle();
    }
}

function secilenUygulamayiCalistir(){
	var selectElement = document.getElementById("select-1");
	alert(selectElement.options[selectElement.selectedIndex].text);
}

function veriGirisBasladi (cagiranGirisNesnesi, renkDizgisi){
	cagiranGirisNesnesi.style.background = renkDizgisi;
	if(cagiranGirisNesnesi.value == veriGirisDizgisi)
		cagiranGirisNesnesi.value = "";
}

function veriGirisBitti (cagiranGirisNesnesi){
	cagiranGirisNesnesi.style.background = '#FFFFFF';
	if(cagiranGirisNesnesi.value == "")
		cagiranGirisNesnesi.value = veriGirisDizgisi;
}

function temizle(){
	document.getElementById("input-1").disabled = false;
	sayfaYukle(temizleDizgisi);
}

