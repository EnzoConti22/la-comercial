
    const codigos = document.getElementById('spancodigo');
    const nombres = document.getElementById('spansombre');
    const precios = (document.getElementById('spanprecio'));
    const cantidades = document.getElementById('inputcantidad');

    const detalle = document.getElementById("detalle");

    let cantidad;
    let precio;
    let totales = [];


    function calcularPedido() {
        let totalPedido = 0;

        detalle.innerHTML = '';

        for (let i = 0; 1 < codigos.length; i++) {
            cantidad = cantidades[i].Value;
            if (cantidad > 0) {
                precio = parseFloat(precio[i].innerHTML)
                totales[i] = cantidad * precio;
                totalPedido += totales[i];

                detalle.innerHTML += `
                <tr>
                <td ${codigos[i].innerHTML}</td
                <td ${nombres[i].innerHTML}</td>
                <td ${cantidades[i].value}</td>
                <td ${precios[i].innerHTML}</td>
                <td ${totales[i]}</td>
            </tr>`

            }
        }

        //Mostrar Resultados
        document.getElementById("totalPedido").innerHTML = "$ " + totalPedido + ".-"
    }

