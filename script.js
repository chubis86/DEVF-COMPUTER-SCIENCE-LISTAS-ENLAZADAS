/* 
Una lista enlazada es una estructura de datos lineal similar a un arreglo. Sin embargo, a diferencia de los arreglos, los elementos no son almacenados en una ubicación de la memoria o índice en particular. Más bien, cada elemento es un objeto separado que contiene un puntero/apuntador o enlace al siguiente objeto en esa lista.

Cada elemento (comúnmente llamados nodos) contiene otros dos: el dato almacenado y un enlace al siguiente nodo. El dato puede ser de cualquier tipo válido. Puedes ver esto ilustrado en el diagrama de abajo.
*/

/* 
1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
*/

console.log("1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.");
//Clase de la lista

class ListaEnlazada {
    constructor(cabecera = null) {
        this.cabecera = cabecera;

    }

    nuevoNodo(id, dato){
        //checamos si es el primer nodo para que se vuelva cabecera o enlazar el nuevo nodo con el nodo anterior
        
        if(this.cabecera==null){
            this.cabecera = new NodoLista(id, dato);
        }else{
            let ultimoNodo = this.cabecera;
                
            while (ultimoNodo.siguiente) {
                if(ultimoNodo.dato==dato){
                    console.log("DATO REPETIDO!!!!!!");
                    break;
                }else{
                    ultimoNodo = ultimoNodo.siguiente;
                }
                
            }
            
            //En caso de que el dato de la cabecera sea igual al del inmediato dato del siguiente nodo en meterse
            if(ultimoNodo.dato==dato){
                console.log("DATO REPETIDO!!!!!!");
                
            }else{
                ultimoNodo.siguiente = new NodoLista(id, dato);
            }
                
            
        }
        
        
    }

}

class NodoLista {
    constructor(id, dato) {
        this.id=id;
        this.dato = dato;
        this.siguiente = null;                
    }
}

//Iniciamos la lista enlazada
let lista = new ListaEnlazada();
lista.nuevoNodo(1,1);
lista.nuevoNodo(1,1);
lista.nuevoNodo(3,3);
lista.nuevoNodo(4,4);
lista.nuevoNodo(5,5);

//IMPRIMIMOS LA LISTA
let ultimoNodo = lista.cabecera;
            
    while (ultimoNodo.siguiente) {
        console.log(ultimoNodo);
        ultimoNodo = ultimoNodo.siguiente;
    }




/* 
2.- Escribir un programa para formar una lista que realice las siguientes tareas:
- Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
- Mostrar todos los Nodos que superen un valor determinado.        
*/
console.log("2.- Escribir un programa para formar una lista que realice las siguientes tareas:");
console.log("- Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.");
console.log("- Mostrar todos los Nodos que superen un valor determinado.");
  
class ListaEnlazada2 {
    constructor(cabecera = null) {
        this.cabecera = cabecera;

    }

    nuevoNodo(id){
        
        //generamos el valor del nodo de manera aleatoria
        let dato=Math.floor(Math.random()*1000);

        //checamos si es el primer nodo para que se vuelva cabecera o enlazar el nuevo nodo con el nodo anterior
        
        if(this.cabecera==null){
            this.cabecera = new NodoLista2(id, dato);
        }else{
            
            let ultimoNodo = this.cabecera;
                
            while (ultimoNodo.siguiente) {
                ultimoNodo = ultimoNodo.siguiente;
            }
            
            ultimoNodo.siguiente = new NodoLista2(id, dato);
                
        }
        
        
    }

}

class NodoLista2 {
    constructor(id, dato) {
        this.id=id;
        this.dato = dato;
        this.siguiente = null;                
    }
}

//Iniciamos la lista enlazada
let lista2 = new ListaEnlazada2();
lista2.nuevoNodo(1);
lista2.nuevoNodo(2);
lista2.nuevoNodo(3);
lista2.nuevoNodo(4);
lista2.nuevoNodo(5);

//MOSTRAR LOS NODOS QUE TENGAN UN VALOR MAYOR A 500
let ultimoNodo2 = lista2.cabecera;
            
    while (ultimoNodo2.siguiente) {
        if(ultimoNodo2.dato>500){
            console.log("NODO:"+ultimoNodo2.id+" DATO:"+ultimoNodo2.dato);
        }
        ultimoNodo2 = ultimoNodo2.siguiente;
    }

