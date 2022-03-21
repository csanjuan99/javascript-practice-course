document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

// Cuadrado
function perimetroCuadrado() {
    const lado = document.getElementById('lado-cuadrado');
    return alert(lado.value * 4);
}

function areaCuadrado() {
    const lado = document.getElementById('lado-cuadrado');
    return alert(lado.value * lado.value);
};

function perimetroTriangulo() {
    const lado1 = document.getElementById('lado1-triangulo');
    const lado2 = document.getElementById('lado2-triangulo');
    const base = document.getElementById('base-triangulo');
    return alert(lado1.value + lado2.value + base.value);
}

function areaTriangulo() {
    const lado1 = document.getElementById('lado1-triangulo');
    const lado2 = document.getElementById('lado2-triangulo');
    const base = document.getElementById('base-triangulo');
    const h = document.getElementById('altura-triangulo');
    return alert((h.value * base.value) / 2);
}

// Circulo
function perimetroCirculo() {
    const radio = document.getElementById('radio-circulo');
    const PI = Math.PI;
    return alert(2 * PI * radio.value);
}

function areaCirculo() {
    const radio = document.getElementById('radio-circulo');
    const PI = Math.PI;
    return alert(PI * (radio.value ** 2));
}

//Isoceles
function perimetroTrianguloIsoceles() {
    const lado1 = document.getElementById('lado1-triangulo-isoceles');
    const lado2 = document.getElementById('lado2-triangulo-isoceles');
    const lado3 = document.getElementById('lado3-triangulo-isoceles');

    if (lado1.value === lado2.value || lado1.value === lado3.value || lado2 === lado3) {
        return alert(Number(lado1.value)+ Number(lado2.value) + Number(lado3.value))
    } else {
        return alert('No es un triangulo isoceles!')
    }
}

function alturaTrianguloIsoceles() {
    const lado1 = document.getElementById('lado1-triangulo-isoceles');
    const lado2 = document.getElementById('lado2-triangulo-isoceles');
    const lado3 = document.getElementById('lado3-triangulo-isoceles');

    if (lado1.value === lado2.value || lado1.value === lado3.value || lado2 === lado3) {
        const h = Math.sqrt((lado1.value**2) - ((lado2.value**2)/4));
        return alert(h)
    } else {
        return alert('No es un triangulo isoceles!')
    }
}
