function buscarProductos() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let productos = document.getElementsByClassName('producto');
    
    for (let i = 0; i < productos.length; i++) {
      let nombre = productos[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
      if (nombre.includes(input)) {
        productos[i].style.display = '';
      } else {
        productos[i].style.display = 'none';
      }
    }
  }
  

let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  alert(nombre + ' ha sido agregado al carrito.');
  mostrarCarrito();
}

function mostrarCarrito() {
  let carritoElement = document.getElementById('carrito');
  carritoElement.innerHTML = '';
  let total = 0;

  carrito.forEach(item => {
    carritoElement.innerHTML += `<p>${item.nombre} - $${item.precio}</p>`;
    total += item.precio;
  });

  carritoElement.innerHTML += `<h3>Total: $${total}</h3>`;
}


function mostrarNotificacion(mensaje) {
    let notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.innerText = mensaje;
    document.body.appendChild(notificacion);
    notificacion.style.display = 'block';
  
    setTimeout(() => {
      notificacion.style.display = 'none';
      document.body.removeChild(notificacion);
    }, 3000);
  }
  
  function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarNotificacion(nombre + ' ha sido agregado al carrito.');
    mostrarCarrito();
  }
  

fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    let catalogo = document.getElementById('catalogo');
    data.forEach(producto => {
      catalogo.innerHTML += `
        <div class="producto">
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio}</p>
          <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al Carrito</button>
        </div>
      `;
    });
  });
