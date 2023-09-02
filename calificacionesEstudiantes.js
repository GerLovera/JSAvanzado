class Estudiante{
    #nombre;
    #calificaciones = [];

    constructor(){}

    get Nombre(){
        return this.#nombre;
    }

    set Nombre(nombre){
        this.#nombre = nombre;
    }

    get Calificaciones(){
        return this.#calificaciones;
    }

    set Calificaciones(calificacion){
        this.#calificaciones = calificacion;
    }
}

class Clase{
    #estudiantes = [];

    constructor(){}

    get #Estudiantes(){
        return this.#estudiantes;
    }

    set #Estudiantes(estudiante){
        this.#estudiantes.push(estudiante);
    }

    AgregarEstudiante(nombre, calificaciones){
        let estudiante = new Estudiante();
        estudiante.Nombre = nombre;
        estudiante.Calificaciones = calificaciones;
        this.#Estudiantes = estudiante;
    }

    ListarPromedios(){
        console.log("LISTADO DE PROMEDIOS:");

        this.#Estudiantes.forEach(estudiante => {
            let sumaCalificaciones = 0;

            estudiante.Calificaciones.forEach(calificacion => {
                sumaCalificaciones += calificacion;
            })
            
            console.log(`${estudiante.Nombre}: ${Math.round(sumaCalificaciones / estudiante.Calificaciones.length)}`);
        })
    }
}

let clase = new Clase();
clase.AgregarEstudiante("Federico", [10, 8, 8]);
clase.AgregarEstudiante("Gerardo", [9, 9, 9]);
clase.AgregarEstudiante("Emmanuel", [8, 7, 8]);
clase.AgregarEstudiante("Sergio", [6, 8, 4]);
clase.ListarPromedios();