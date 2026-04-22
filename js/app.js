// Contador interactivo de países
let cantidad = 32;

function aumentarMiembro() {
    cantidad++;
    document.getElementById('contador').innerText = cantidad;
    
    // Efecto visual
    const numero = document.querySelector('.numero');
    numero.style.transform = 'scale(1.3)';
    numero.style.transition = 'transform 0.3s';
    
    setTimeout(() => {
        numero.style.transform = 'scale(1)';
    }, 300);
}

// FUNCIÓN DEL CUESTIONARIO
function verificarRespuesta(boton, numeroPregunta, esCorrecta) {
    // Obtener el div donde se muestra el resultado
    const resultadoDiv = document.getElementById('resultado' + numeroPregunta);
    
    // Quitar todos los estilos primero
    const opciones = boton.parentElement.querySelectorAll('.opcion');
    opciones.forEach(op => {
        op.classList.remove('correcta', 'incorrecta');
        op.disabled = true; // Desactivar botones para que no cambien
    });

    if (esCorrecta) {
        boton.classList.add('correcta');
        resultadoDiv.innerHTML = "✅ ¡Correcto!";
        resultadoDiv.style.color = "#2ecc71";
    } else {
        boton.classList.add('incorrecta');
        resultadoDiv.innerHTML = "❌ Incorrecto. Intenta de nuevo.";
        resultadoDiv.style.color = "#e74c3c";
    }
}
