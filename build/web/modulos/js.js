function guardarLocal() {
    
    const usuario = document.getElementById("txtUsuario").value;
    const contrasena = document.getElementById("txtPassword").value;
    const nombre = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApellido").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contrasena", contrasena);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
         
        alert("Usuario Registrado");
    
    
}