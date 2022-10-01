import java.util.ArrayList;

public class MangosNaranjas {
	private int mangos;
	private int naranjas;
	
	public MangosNaranjas(int mangos, int naranjas) {
		this.mangos = mangos;
		this.naranjas = naranjas;
	}

	public int getMangos() {
		return mangos;
	}

	public void setMangos(int mangos) {
		this.mangos = mangos;
	}

	public int getNaranjas() {
		return naranjas;
	}

	public void setNaranjas(int naranjas) {
		this.naranjas = naranjas;
	}
	
	public String mcd() {
		
		ArrayList <Integer> cajaMangos = new ArrayList<>();
		ArrayList <Integer> cajaNaranjas = new ArrayList<>();
		int cajaMayor = 0;
		
		for (int i = 2; i <= mangos; i++) { 
			if(mangos % i == 0) {
				cajaMangos.add(i);
			} /*else if(mangos %i !=0){
				cajaMangos.add(i);
			}*/
		}
		for (int i = 2; i <= naranjas; i++) { 
			if(naranjas % i == 0) {
				cajaNaranjas.add(i);
			} /*else if(naranjas %i !=0){
				cajaNaranjas.add(i);
			}*/
		}
		
		for (Integer cajaMax : cajaMangos) {
			for (Integer caja : cajaNaranjas) {
				if(cajaMax == caja && caja > cajaMayor) {
					cajaMayor = cajaMax;
				}
				
			}
		}		
		
		int numMango = mangos /  cajaMayor ;
		int numNara =  naranjas /  cajaMayor ;
		
		return "El numero de cajas es: " + cajaMayor + "\nEl numero de Mangos en caja es de: " + numMango +
				"\nEl numero de Naranjas en caja es de: " + numNara;
	}// mcd
}
