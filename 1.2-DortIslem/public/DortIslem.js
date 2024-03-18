/**
 * klavyeden girilen 2 sayıyı toplayan, çıkaran, bölen, çarpan program
 */

 /*toplama kısmı */
 
function topla(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi = +document.getElementById("input-2").value;
	
	var sonuc = birinciSayi + ikinciSayi;
	document.getElementById("p-1").innerHTML = sonuc;
}
function cikar(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi = +document.getElementById("input-2").value;
	
	var sonuc = birinciSayi - ikinciSayi;
	document.getElementById("p-1").innerHTML = sonuc;
}
function carp(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi = +document.getElementById("input-2").value;
	
	var sonuc = birinciSayi * ikinciSayi;
	document.getElementById("p-1").innerHTML = sonuc;
}
function bol(){
	var birinciSayi = +document.getElementById("input-1").value;
	var ikinciSayi = +document.getElementById("input-2").value;
	
	var sonuc = birinciSayi / ikinciSayi;
	document.getElementById("p-1").innerHTML = sonuc;
}

function temizle(){
	document.getElementById("input-1").value = ""; // kutucukları temizlemiyor
	document.getElementById("input-2").value = "";
	document.getElementById("p-1").innerHTML = "Sonuçlar burada olucak...";

}