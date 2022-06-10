const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})

const redesSociales = document.getElementById("redesSociales");

redesSociales.addEventListener("click", () => {
    Swal.fire({
        title: "Esta saliendo a una página externa",
        text: '¿Deseas continuar?',
        icon: 'error',
        confirmButtonText: 'SI'
    });
    
})