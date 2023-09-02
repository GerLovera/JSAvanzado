class Pelicula{
    #titulo;
    #año;

    constructor(){}

    get Titulo(){
        return this.#titulo;
    }

    set Titulo(titulo){
        this.#titulo = titulo;
    }

    get Año(){
        return this.#año;
    }

    set Año(año){
        this.#año = año;
    }
}

class Usuario{
    #apellido;
    #nombre;
    #peliculasFavoritas = [];

    constructor(){} 

    get Apellido(){
        return this.#apellido;
    }

    set Apellido(apellido){
        this.#apellido = apellido;
    }

    get Nombre(){
        return this.#nombre;
    }

    set Nombre(nombre){
        this.#nombre = nombre;
    }

    get #PeliculasFavoritas(){
        return this.#peliculasFavoritas;
    }

    set #PeliculasFavoritas(peliculaFavorita){
        this.#peliculasFavoritas.push(peliculaFavorita);
    } 

    MostrarDatosUsuario(){
        console.log(`Usuario: ${this.Nombre} ${this.Apellido}`);
    }

    AgregarPeliculaFavorita(titulo, año){
        let pelicula = new Pelicula();
        pelicula.Titulo = titulo;
        pelicula.Año = año;

        this.#PeliculasFavoritas = pelicula;
    }

    MostrarPeliculasFavoritas(){
            this.#PeliculasFavoritas.forEach((pelicula, i) => {
            console.log(`Titulo ${i+1}: ${pelicula.Titulo} (${pelicula.Año})`);
        });
    }

    MostrarPeliculaFavorita(numero){
        for (let i = 1; i <= this.#PeliculasFavoritas.length; i++){
            if (i == numero){
                console.log(`La película favorita nro. ${numero} es: ${this.#PeliculasFavoritas[i-1].Titulo} (${this.#PeliculasFavoritas[i-1].Año})`);
                break;
            }
        }
    }
}

let usuario1 = new Usuario();
usuario1.Apellido = "Lovera";
usuario1.Nombre = "Gerardo";
usuario1.AgregarPeliculaFavorita('El Señor de los Anillos', 2008);
usuario1.AgregarPeliculaFavorita("Mision Imposible", 2011);
usuario1.AgregarPeliculaFavorita("Iron Man", 2010);

usuario1.MostrarDatosUsuario();
usuario1.MostrarPeliculasFavoritas();
usuario1.MostrarPeliculaFavorita(2);
