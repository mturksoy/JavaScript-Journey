/**
 * 
 */

 const genel1 = "mesaj değiştirilemez";
 var k = 100;
 
 function sayfaYukle(){
	 
	 try{
		 //genel1 = "dnfdsnfşd";
		 k = "sddobşb";
		 console.log("Atama Başarılı..."); // hata olmasaydı çalışacaktı
		 
		 var err = new Error("Denem amacıyla oluşturulmuş bir hata...");
		 err.name = "Kullanıcı tanımlı hata";
		 err.message = "Bu hatayı kendimiz ele alacağız";
		 throw err;
		 
		 console.log("kod buraya gelecek mi? -> " + k);
		 
	 }catch(err){ // hata yakalnaırsa çalıştırılıcak
		 console.log("sayfaYukle akışı, hatalı durumdan ötürü durdu, hata -> " + err.name + " | " + err.message );
	 }finally{
		 console.log("Her durumda çalışacak kısım..");
	 }
	 console.log("sayfaYukle buradan devam ediyor");
	 console.log("genel1 : " + genel1);
	 
	 sayfaYukleAltIsler(1230); // not error tolerans gösterir
 }
 
 function sayfaYukleAltIsler(a,b){
	 console.log("a + \"\"+ b -> " + a + " " + b);  // not error tolerans gösterir
	 console.log("a[0] -> " + a[0]); // not error tolerans gösterir
	 try{
		 console.log("a[0][0] -> " + a[0][0]); // error
	 }catch(err){ // hata yakalnaırsa çalıştırılıcak
		 console.log("sayfaYukleAltIsler akışı, hatalı durumdan ötürü durdu, hata -> " + err.name + " | " + err.message );
	 }finally{
		 console.log("Her durumda çalışacak kısım..");
	 }
	 

 }