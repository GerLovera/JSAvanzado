class Contacto{
    #nombre;
    #telefono;
    #email;

    constructor(){}

    get Nombre(){
        return this.#nombre;
    }

    set Nombre(nombre){
        this.#nombre = nombre;
    }

    get Telefono(){
        return this.#telefono;
    }

    set Telefono(telefono){
        this.#telefono = telefono;
    }

    get Email(){
        return this.#email;
    }

    set Email(email){
        this.#email = email;
    }
}

class Contactos{
    #contactos = [];

    constructor(){}

    get #Contactos(){
        return this.#contactos;
    }

    set #Contactos(contacto){
        this.#contactos = contacto;
    }

    AgregarContacto(nombre, telefono, email){
        let contacto = new Contacto();
        contacto.Nombre = nombre;
        contacto.Telefono = telefono;
        contacto.Email = email;

        this.#Contactos.push(contacto);
    }

    MostrarContactos(){
        console.log("LISTADO DE CONTACTOS");
        let cantContactos = this.#Contactos.length;

        this.#Contactos.forEach(contacto => {
            console.log(`- ${contacto.Nombre} [Telefono: ${contacto.Telefono} - Email: ${contacto.Email}]`);
        });

        console.log(`Cantidad de contactos: ${cantContactos}`);
    }
}

let contactos = new Contactos();
contactos.AgregarContacto("Gerardo", 2954665544, "ger80.lovera@gmail.com");
contactos.AgregarContacto("Federico", 2954614490, "fede@gmail.com");
contactos.AgregarContacto("Emmanuel", 2954441540, "emma.villa@hotmail.com");
contactos.AgregarContacto("Lucia", 2954626488, "lucia@gmail.com");
contactos.AgregarContacto("Sofia", 2954643214, "sofi.abbona@gmail.com");
contactos.MostrarContactos();