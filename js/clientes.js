let boton = document.getElementById(`calcular`);
let respuesta = document.getElementById(`respuesta`);

boton.addEventListener(`click`, hacerSuma);

function hacerSuma () {
    let n1 = parseFloat ( document.getElementById(`n1`).value);
    let n2 = parseFloat ( document.getElementById(`n2`).value);
    let n3 = parseFloat ( document.getElementById(`n3`).value);
    let n4 = parseFloat ( document.getElementById(`n4`).value);
    let n5 = parseFloat ( document.getElementById(`n5`).value);
    let n6 = parseFloat ( document.getElementById(`n6`).value);
    let n7 = parseFloat ( document.getElementById(`n7`).value);
    let n8 = parseFloat ( document.getElementById(`n8`).value);
    let totales = n1 + n2 + n3 - n4 - n5 - n6 - n7 - n8;
    respuesta.innerHTML = `Tus ingresos mensuales son de $ ${totales} pesos argentinos`;
};

let contenido = document.querySelector(`#contenido`)

function traer() {
    fetch(`texto.txt`)
    .then(data => data.text())
    .then(data => {
        console.log(data)
        contenido.innerHTML = `${data}`
    })

}