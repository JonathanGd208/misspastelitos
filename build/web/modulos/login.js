function validar() {
    const usuario = document.getElementById("txtUsuario").value;
    const contrasena = document.getElementById("txtPassword").value;

    const us = localStorage.getItem("usuario");
    const cn = localStorage.getItem("contrasena");

    if (us === usuario && cn === contrasena) {
        alert("usuario correcto");
        
        window.location.href = "menu.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}




