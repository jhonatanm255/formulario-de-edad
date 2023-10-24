function validarFormulario() {
  // Obtener los valores del formulario
  const edad = parseInt(document.getElementById("edad").value);
  const sexo = document.getElementById("sexo").value;

  // Validar los datos
  if (isNaN(edad) || edad <= 0) {
    mostrarMensaje("La edad ingresada no es válida.", "red");
    return;
  }

  function mostrarMensaje(mensaje, colorDeFondo) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = mensaje;
    resultadoElement.style.backgroundColor = colorDeFondo;
  }

  // Aplicar condicionales

  if (edad >= 18 && edad <= 65 && sexo === "masculino") {
    mostrarMensaje("Eres un hombre mayor de edad.", "green");
  } else if (edad >= 18 && edad <= 65 && sexo === "femenino") {
    mostrarMensaje("Eres una mujer mayor de edad.", "green");
  } else if (edad > 65 && sexo === "masculino") {
    mostrarMensaje("Eres un hombre de la tercera edad.", "purple");
  } else if (edad > 65 && sexo === "femenino") {
    mostrarMensaje("Eres una mujer de la tercera edad.", "purple");
  } else if (edad < 18 && sexo === "masculino") {
    mostrarMensaje("Eres un chico menor de edad.", "orange");
  } else {
    mostrarMensaje("Eres una chica menor de edad.", "orange");
  }
}
