document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

function calcularPrecioConDescuento() {
    const precio = document.getElementById('precio');
    const descuento = document.getElementById('descuento');
    const resto = Number(precio.value) - (Number(descuento.value) / 100) * Number(precio.value);

    if (precio.value == '' && descuento.value == '') {
        document.getElementById('precioConDescuento').innerHTML = `<p class="mt-1">No ha ingresado ningun valor</p`;
    } else {
        if (precio.value > 0 && descuento.value <= 100 ) {
            document.getElementById('precioConDescuento').innerHTML = `<p>${resto}</p`;
        } else {
            document.getElementById('precioConDescuento').innerHTML = `<p class="mt-1">Valor no valido</p`;
        }
    }
}

function calcularPrecioConDescuentoInteligente() {
    const precio = document.getElementById('precioInteligente');
    const cupon = document.getElementById('cupon-descuento');
    const cupones = [
        {
            name: 'PLATZIDAY',
            value: 10
        },
        {
            name: 'PLATZIMONTH',
            value: 20
        },
        {
            name: 'PLATZIYEAR',
            value: 30
        }
    ];

    if (precio.value > 0) {
        if (cupon.value == cupones.filter(c => c.name === cupon.value)[0].name) {
            let descuento = cupones.filter(c => c.name === cupon.value)[0]
            const resto = Number(precio.value) - (Number(descuento.value) / 100) * Number(precio.value);
            document.getElementById('precioConDescuentoInteligente').innerHTML = `<p>${resto}</p`;
         } else {
             console.log('NO SE ENCUENTRA EL CUPON!')
         }
    } else {
        document.getElementById('precioConDescuentoInteligente').innerHTML = `<p class="mt-1">Valor no valido</p`;
    }
}