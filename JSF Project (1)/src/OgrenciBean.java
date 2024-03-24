/**
 * 
 */
import java.util.ArrayList;

/**
 * @author mturk
 *
 */
public class OgrenciBean {
	private Ogrenci ogrenci1 = new Ogrenci();
	ArrayList<Ogrenci> listele = new ArrayList<Ogrenci>();
	
	public void gosterVeKaydet() {
		
		System.out.println(ogrenci1.getAd());
		System.out.println(ogrenci1.getSoyad());
		System.out.println(ogrenci1.getYas());
		System.out.println(ogrenci1.getCinsiyet());
		System.out.println(ogrenci1.getSehir());
		
		listele.add(ogrenci1);
		ogrenci1 = new Ogrenci();
		
	}
	
	public Ogrenci getOgrenci1() {
		return ogrenci1;
	}
	public void setOgrenci1(Ogrenci ogrenci1) {
		this.ogrenci1 = ogrenci1;
	}

	public ArrayList<Ogrenci> getListele() {
		return listele;
	}

	public void setListele(ArrayList<Ogrenci> listele) {
		this.listele = listele;
	}
}
