import {articulos} from "../modelos/articulos.js";

const listado = document.querySelector("#listado");

articulos.map(articulo =>
    listado.innerHTML += `
         <div class= "col">
        <div class="card" style="width: 18rem;">
        <img src="./imagenes/productos/${articulo.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> <span id="spancodigo">${articulo.codigo}</span> <span id="spannombre"> ${articulo.nombre}</span></h5>
                <p class="card-text">
                    <img src="./imagenes/memoria.svg"> Procesador: ${articulo.descripcion.procesador} <br>
                    <img src="./imagenes/almacenamiento.svg"> Almacenamiento ${articulo.descripcion.almacenamiento} <br>
                    <img src="./imagenes/camara.svg"> Cámaras ${articulo.descripcion.camaras} <br>
                    <img src="./imagenes/aod.svg"> Pantalla ${articulo.descripcion.pantalla}
                </p>   
                <h5>$ <span id="spanprecio">${articulo.precio} </span></h5>
                <input class="form-control" value="0" min="0" max="11" type="number" name="" id="inputcantidad1" onchange="calcularPedido()">
            </div>
    </div>
    `
)