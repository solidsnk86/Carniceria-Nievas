// función sumar productos
const cantidadInputs = document.querySelectorAll('.cantidad');
const precioInputs = document.querySelectorAll('.precio');
const totalInputs = document.querySelectorAll('.total');
const subtotalInput = document.querySelector('.subtotal');
const impuestosInput = document.querySelector('.impuestos');
const totalFinalInput = document.querySelector('.total_final');

function calcularTotales() {
  let subtotal = 0;
  let impuestos = parseFloat(impuestosInput.value) || 0;

  for (let i = 0; i < cantidadInputs.length; i++) {
    let cantidad = parseInt(cantidadInputs[i].value) || 0;
    let precio = parseFloat(precioInputs[i].value) || 0;
    let total = cantidad * precio;

    totalInputs[i].value = total.toFixed(2);

    subtotal += total;
  }

  subtotalInput.value = subtotal.toFixed(2);

  let impuestosCalculados = (subtotal * impuestos) / 100;
  impuestosInput.value = impuestosCalculados.toFixed(2);

  let totalFinal = subtotal + impuestosCalculados;
  totalFinalInput.value = totalFinal.toFixed(2);
}

for (let i = 0; i < cantidadInputs.length; i++) {
  cantidadInputs[i].addEventListener('change', calcularTotales);
  precioInputs[i].addEventListener('change', calcularTotales);
}



// función menú carta
function compartirFormulario() {
  card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <!-- Compartir -->
  <div class="container-card">
      
    <div class="compartirMenu">
    <button id="cerrarCarta" onclick="cerrarCarta()"><i class="fa-solid fa-xmark"></i></button>
      <div class="redesMenu">
      <br>
   <center>
    <div class="container">
        <div class="colaboracion">
            <h1>Carnicería Nievas</h1>
            <h3>De Jorge Nievas</h3>
            <h5><i  id="reloj" class="fa-regular fa-clock"></i>Horarios de Atención</h5>
            <div class="horarios">
            <div class="dias">
             <h5>Lunes</h5>
             <h5>Martes</h5>
             <h5>Miércoles</h5>
             <h5>jueves</h5>
             <h5>Viernes</h5>
             <h5>Sábado</h5>
             <h5>Domingo</h5>
            </div>
            <span class="separador"></span>
            <div class="hora">
             <h5>9:00 – 13:00, 17:00 – 21:00</h5>
             <h5>9:00 – 13:00, 17:00 – 21:00</h5>
             <h5>9:00 – 13:00, 17:00 – 21:00</h5>
             <h5>9:00 – 13:00, 17:00 – 21:00</h5>
             <h5>9:00 – 13:00, 17:00 – 21:00</h5>
             <h5>9:00 – 13:00, 17:00 – 21:00</h5>
             <h5>9:00 – 13:00</h5>
            </div>
         </div>
         <div class="informacion">
             <h5>Los esperamos en calle Pedernera 642<br>Teléfono fijo: <a href="tel:02656481164"><i class="fa-solid fa-phone"></i> 02656-481164</a></h5>
         </div>
        </div>
    </div>
    <br>
</center>
      <hr>
      <p>Compartir en redes sociales:</p>
      <button onclick="compartirFacebook()"><i id="face" class="fa-brands fa-facebook-f"></i></span></button>
      <button onclick="compartirTwitter()"><i id="twitt" class="fa-brands fa-twitter"></i></span></button>
      <button onclick="compartirWhatsapp()"><i id="what" class="fa-brands fa-whatsapp"></i></span></button>
      <button onclick="compartirLinkedIn()"><i id="linked" class="fa-brands fa-linkedin"></i></span></button>
  </div>
    </div>
  </div>
  `;
  document.body.appendChild(card);
};

function cerrarCarta() {
  document.body.removeChild(card);
}
// función imprimir
function imprimirFormulario() {
  var formularioHTML = window.location('/index.html');
  formularioHTML.onload = function() {
    formularioHTML.window.print();
  } 
};


const botonImprimir = document.getElementById('imprimir');
botonImprimir.addEventListener('click', function(event) {
  event.preventDefault();
  window.print();
})


// función para expandir área de texto
var textAreas = document.querySelectorAll('#textArea');
textAreas.forEach(function(textArea) {
  textArea.addEventListener("input", autoResize);
});

function autoResize() {
  this.style.width = "auto";
  this.style.width = this.scrollWidth + "px";
};

// guardar formulario
const form = document.querySelector('#myForm');
const inputField = document.querySelector('#inputField');
const selectField = document.querySelector('#selectField');

// Restore form data from local storage when page loads
window.onload = function() {
  const savedInput = localStorage.getItem('myFormInput');
  if (savedInput) {
    inputField.value = savedInput;
  }

  const savedSelect = localStorage.getItem('myFormSelect');
  if (savedSelect) {
    selectField.value = savedSelect;
  }
}


// Función compartir en redes sociales
function compartirFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
};

function compartirWhatsapp() {
  var mensaje = "Echa un vistazo a éste formulario web para facturas, recibos, presupuestos!: " + window.location.href;
  window.open('https://wa.me/?text=' + encodeURIComponent(mensaje));
};

function compartirTwitter() {
  window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href));
};

function compartirLinkedIn() {
  var url = encodeURIComponent(window.location.href);
  var title = encodeURIComponent(document.title);
  var shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`';
  window.open(shareUrl, '_blank');
};

// Función de Geolocalización API de Google // Pagando esa función de Google
function buscarDireccion() {
  const direccion = document.getElementById('direccion').value;

  // Obtener las coordenadas de la ubicación del usuario
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;

    // Mostrar las coordenadas en el mapa utilizando la API de Google Maps
    const mapa = document.getElementById('mapa');
    mapa.src = `https://www.google.com/maps/embed/v1/place?key=TU_API_KEY&q=${latitud},${longitud}&zoom=15`;
  });
}

// función para cambiar de color

const elegirColor = document.querySelector('#elegir-color');
const elementos = document.querySelectorAll('#elemento');

elegirColor.addEventListener('change', function() {
  const color = elegirColor.value;
  localStorage.setItem('selectedColor', color);
  actualizarColor(color);
});

function actualizarColor(color) {
  elementos.forEach(function (elementos) {
    elementos.style.backgroundColor = color;
  })
};

window.addEventListener('load', function () {
  const selectedColor = localStorage.getItem('selectedColor');
  if (selectedColor) {
    actualizarColor(selectedColor);
    elegirColor.value = selectedColor;
  }
});

// Obtener el elemento select de forma de pago
  const formaPagoSelect = document.getElementById("forma-pago");

// Escuchar el evento de cambio en el select
  formaPagoSelect.addEventListener("change", function() {
    const formaPagoValue = formaPagoSelect.value;
    const containerForma = document.querySelector(".container-forma");

    // Limpiar el contenido existente en el contenedor
    containerForma.innerHTML = "";

    // Crear elementos según el valor seleccionado
    if (formaPagoValue === "opcion1") {
      const div = document.createElement("div");
      const heading = document.createElement("h4");
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Ingrese su CBU");
      heading.textContent = "Número de cuenta Bancaria:"
      div.appendChild(heading);
      div.appendChild(input);
      containerForma.appendChild(div);
    } else if (formaPagoValue === "opcion2") {
      const div = document.createElement("div");
      const paragraph = document.createElement("h4");
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Ingrese su CVU o alias de Mercado Pago");
      paragraph.textContent = "Número de CVU/alias:";
      div.appendChild(paragraph);
      div.appendChild(input);
      containerForma.appendChild(div);
    } else if (formaPagoValue === "opcion3") {
        const div3 = document.createElement("div");
      const etiqueta = document.createElement("label");
       const etiqueta2 = document.createElement("label");
      const input = document.createElement("input");
      const input2 = document.createElement("input")
      input.setAttribute("type", "radio", "value", "dolar");
      input2.setAttribute("type", "radio", "value", "pesos");
      etiqueta.textContent = "Dólar";
      etiqueta2.textContent = "Pesos"
      div3.appendChild(etiqueta);
      div3.appendChild(input);
      div3.appendChild(etiqueta2);
      div3.appendChild(input2);
      containerForma.appendChild(div3);
      div3.style.display = 'flex';
      div3.style.margin = '20px';
      div3.style.width = '110px';
      etiqueta2.style.marginLeft = '30px';
    }
  });


