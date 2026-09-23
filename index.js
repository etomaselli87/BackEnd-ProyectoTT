console.log("Iniciando Servidor");
console.log(process.argv);

const args = process.argv.slice(2) ;


/* -------------------------------------------------------------------------- */
/*              CREO FUNCION getAllProducts() para el primer GET              */
/* -------------------------------------------------------------------------- */

async function getAllProducts() {
    console.log('-------------------------------------------------------');
    console.log('Inicio de la tarea 1 ==> OBTENER TODOS LOS PRODUCTOS...');

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return console.log(data);

    } catch (error) {
        console.log(error);

    } finally {
        console.log('Fin de la tarea 1.Retornar Todos los Productos ✅');
        console.log('--------------------------------------------------');
    }
}


/* -------------------------------------------------------------------------- */
/*    CREO FUNCION getProductById() para obtener producto por Id específico   */
/* -------------------------------------------------------------------------- */

async function getProductById(id) {
    console.log('---------------------------------------------------');
    console.log(`Inicio de tarea 2 ==> BUSCAR PRODUCTO POR ID: ${id}`);

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);

    } finally {
        console.log('Fin de la tarea 2.Retornar Producto por ID ✅');
        console.log('--------------------------------------------------');
    }
}


/* -------------------------------------------------------------------------- */
/*                 CREO FUNCION para crear producto nuevo POST                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                CREO FUNCION para eliminar un producto DELETE               */
/* -------------------------------------------------------------------------- */

async function deleteProductById(id) {
    console.log('-----------------------------------------------------');
    console.log(`Inicio de tarea 4 ==> ELIMINAR PRODUCTO POR ID: ${id}`);

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,{method: "DELETE"});

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log('PRODUCTO ELIMINADO ✅')
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);

    } finally {
        console.log('Fin de la tarea 4.Retornar Producto Eliminado ID ✅');
        console.log('----------------------------------------------------');
    }
}





/*--SWITCH INICIAL PARA ELEGIR FUNCION CORRESPONDIENTE DE ACUERDO AL COMANDO--*/

switch (args[0]) {
    case "GET":

        // Punto 1 ==> Llamo a función que devuelve Todos los productos
        if (args[1] === "products") {
            getAllProducts();
        
        // Punto 2 ==> Llamo a función que devuelve producto de Id consultado
        } else if (args[1].startsWith("products/")) {
            const id = args[1].split("/")[1];
            getProductById(id);

        } else {
            console.log("Recurso inválido");
        }
        break;


    case "POST":
        console.log("POST");
        if (args[2]) {
            console.log(`Recibimos ${args[1]} satisfactoriamente`)
        }else{
            console.log("Comando POST Incompleto")
        }
        break;    
  


    case "DELETE":
        // Punto 4 ==> Llamo a función DELETE que Elimina producto por ID y lo muestra 
        if (args[1].startsWith("products/")) {
            const id = args[1].split("/")[1];
            deleteProductById(id);

        } else {
            console.log("Recurso inválido");
        }
        break;





    default:
        console.log("Comando Incompleto o Inválido")
}