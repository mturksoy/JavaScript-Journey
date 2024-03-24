/**
 * 
 */
const metin = "merhaba konsol // global scope";
const genelvar = 200;

function sayfaYukle(){
	window.console.log("Sayfa yükle fonksiyonunda " + metin);
	let genelvar = "dbskgdbd"; // scope a özgü değişken tanımlaması
	var l = "araba";
	var l = 34; // error olmaz
	
	blok:{
		forblok1: for(let k = 0; k < 5; k++){
			for(let l = 0; l < 5; l++){
				if(l>3)
				break forblok1 //break blok; da olabilir break komutu blok a gider.
				
			}
		}
	}
	
	//let l = 56; // console error
	console.log(l);
	
	//let genelvar = 34; ERROR yeniden let kullanamazsın
	console.log(genelvar);
}