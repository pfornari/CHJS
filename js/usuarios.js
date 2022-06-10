const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let entidadBancaria = document.getElementById('entidadBancaria').value;
        let tipoDeResumen = document.getElementById('tipoDeResumen').value;
        let nombres = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellido').value;
        let email = document.getElementById('email').value;
        let direccion = document.getElementById('direccion').value;
        let telefono = document.getElementById('telefono').value;
        let provincia = document.getElementById('provincia').value;
        
        clientesBancarios(entidadBancaria, tipoDeResumen, nombres, apellidos, email, direccion, telefono, provincia);
    })

    const guardarForm = JSON.stringify(form);
    const confirmacionAlerta = document.getElementById("confirmacion");

confirmacionAlerta.addEventListener("click", () => {
    Swal.fire({
        
        title: "Gracias por confirmar los datos",
        text: 'En 72 horas habiles, recibiras los resumenes en tu correo electronico. Te proporcionaremos un usuario y clave para gestionar tus datos',
        
    });
    
})