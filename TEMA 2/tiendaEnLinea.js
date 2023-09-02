class Producto{
    #nombre;
    #precio;
    #disponible;

    constructor(){}

    get Nombre(){
        return this.#nombre;
    }

    set Nombre(nombre){
        this.#nombre = nombre;
    }

    get Precio(){
        return this.#precio;
    }

    set Precio(precio){
        this.#precio = precio;
    }

    get Disponible(){
        return this.#disponible;
    }

    set Disponible(disponible){
        this.#disponible = disponible;
    }
}

class Productos{
    #productos = [];

    constructor(){}

    get #Productos(){
        return this.#productos;
    }

    set #Productos(producto){
        this.#productos = producto;
    }

    AgregarProducto(nombre, precio, disponible){
        let producto = new Producto();
        producto.Nombre = nombre;
        producto.Precio = precio;
        producto.Disponible = disponible;

        this.#Productos.push(producto);
    }

    MostrarProductos(nombre){
        let filtrado = this.#Productos.filter(producto => { 
            return producto.Nombre.includes(nombre) 
        });

        if (filtrado.length > 0){
            console.log(`LISTADO DE PRODUCTOS QUE INCLUYAN LA PALABRA: ${nombre}`);

            filtrado.forEach(producto => {
                console.log(`- ${producto.Nombre} [Precio: ${producto.Precio} - Disponible: ${producto.Disponible}]`);
            });
        }
        else{
            console.log(`No existen productos que contengan la palabra "${nombre}".`);
        }
    }
}

let listadoProductos = new Productos();
listadoProductos.AgregarProducto("Azucar Ledesma", 675, 150);
listadoProductos.AgregarProducto("Mermelada Higo", 1050, 15);
listadoProductos.AgregarProducto("Azucar Dominó", 630, 190);
listadoProductos.AgregarProducto("Mayonesa Natura", 800, 32);
listadoProductos.AgregarProducto("Harina 000", 770, 500);
listadoProductos.AgregarProducto("Harina Leudante", 675, 180);
listadoProductos.MostrarProductos("Azucar");
