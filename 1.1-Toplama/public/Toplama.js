/**
 * 2 adet sayıyı toplayan program
 */
function topla(){
//	var birinciSayi = ~~document.getElementById("input-1").value;  // tilde symbol is for convert string values to int value
//	var ikinciSayi = ~~document.getElementById("input-2").value;
	var birinciSayi = +document.getElementById("input-1").value;  //+ symbol is for convert string values to int value but for fractional number
	var ikinciSayi = +document.getElementById("input-2").value;
	var toplam = birinciSayi + ikinciSayi;
	document.getElementById("p1").innerHTML = toplam;
}