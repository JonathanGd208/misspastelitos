function realizarCompraAlert() {
     
    Swal.fire({
        title: '¡Reserva Realizada!',
        text: 'Tu pedido ha sido procesado. Te enviaremos un correo con los detalles de la compra.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#F87171' // Un color rojo similar al de tu botón
    });

}