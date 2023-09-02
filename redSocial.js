class Amigo{
    #nombre;
    #edad;

    constructor(){}

    get Nombre(){
        return this.#nombre;
    }

    set Nombre(nombre){
        this.#nombre = nombre;
    }

    get Edad(){
        return this.#edad;
    }

    set Edad(edad){
        this.#edad = edad;
    }
}

class Perfil{
    #nombre;
    #edad;
    #amigos = [];

    constructor(){}

    get Nombre(){
        return this.#nombre;
    }

    set Nombre(nombre){
        this.#nombre = nombre;
    }

    get Edad(){
        return this.#edad;
    }

    set Edad(edad){
        this.#edad = edad;
    }

    get #Amigos(){
        return this.#amigos;
    }

    set #Amigos(amigo){
        this.#amigos.push(amigo);
    }

    AgregarAmigos(nombre, edad){
        let amigo = new Amigo();
        amigo.Nombre = nombre;
        amigo.Edad = edad;

        this.#Amigos = amigo;
    }

    MostrarAmigoMasJoven(){
        let nombreAmigo = "";
        let minEdad = this.#Amigos[0].Edad;
        
        this.#Amigos.forEach(amigo => {
            if (amigo.Edad < minEdad){
                minEdad = amigo.Edad;
                nombreAmigo = amigo.Nombre;
            } 
        })

        console.log(`El amigo más joven de ${this.Nombre} es ${nombreAmigo} con ${minEdad} años.`);
    }
}

let perfil = new Perfil();
perfil.Nombre = "Gerardo";
perfil.Edad = 42;
perfil.AgregarAmigos("Fede", 43);
perfil.AgregarAmigos("Kevin", 27);
perfil.AgregarAmigos("Sergio", 28);
perfil.AgregarAmigos("Emma", 29);
perfil.MostrarAmigoMasJoven();
