// Datos del menú (pueden venir de backend o ser estáticos)
const menuData = [
  {
    categoria: "Entradas",
    platos: [
      { id: "e1", nombre: "Papas Fritas", precio: 150 },
      { id: "e2", nombre: "Aros de Cebolla", precio: 180 },
      { id: "e3", nombre: "Ensalada César", precio: 220 }
    ]
  },
  {
    categoria: "Platos Principales",
    platos: [
      { id: "p1", nombre: "Hamburguesa Clásica", precio: 450 },
      { id: "p2", nombre: "Milanesa con Puré", precio: 520 },
      { id: "p3", nombre: "Pasta Alfredo", precio: 480 }
    ]
  },
  {
    categoria: "Bebidas",
    platos: [
      { id: "b1", nombre: "Agua Mineral", precio: 100 },
      { id: "b2", nombre: "Gaseosa", precio: 130 },
      { id: "b3", nombre: "Jugo Natural", precio: 160 }
    ]
  },
  {
    categoria: "Postres",
    platos: [
      { id: "d1", nombre: "Flan Casero", precio: 180 },
      { id: "d2", nombre: "Helado", precio: 200 },
      { id: "d3", nombre: "Torta de Chocolate", precio: 220 }
    ]
  }
];

// Estado del pedido
let pedido = {};

// Función para mostrar el menú
function mostrarMenu() {
  const menuDiv = document.getElementById("menu");
  menuDiv.innerHTML = "";
  menuData.forEach(categoria => {
    const catDiv = document.createElement("div");
    catDiv.className = "categoria";
    const catTitulo = document.createElement("h2");
    catTitulo.textContent = categoria.categoria;
    catDiv.appendChild(catTitulo);

    categoria.platos.forEach(plato => {
      const platoDiv = document.createElement("div");
      platoDiv.className = "plato";

      const infoDiv = document.createElement("div");
      infoDiv.className = "plato-info";

      const nombreSpan = document.createElement("span");
      nombreSpan.className = "plato-nombre";
      nombreSpan.textContent = plato.nombre;

      const precioSpan = document.createElement("span");
      precioSpan.className = "plato-precio";
      precioSpan.textContent = "$" + plato.precio.toFixed(0);

      infoDiv.appendChild(nombreSpan);
      infoDiv.appendChild(precioSpan);

      const btnAgregar = document.createElement("button");
      btnAgregar.className = "agregar";
      btnAgregar.textContent = "Agregar";
      btnAgregar.onclick = () => agregarAlPedido(plato.id);

      platoDiv.appendChild(infoDiv);
      platoDiv.appendChild(btnAgregar);

      catDiv.appendChild(platoDiv);
    });

    menuDiv.appendChild(catDiv);
  });
}

// Función para agregar al pedido
function agregarAlPedido(platoId) {
  if (!pedido[platoId]) {
    pedido[platoId] = 1;
  } else {
    pedido[platoId]++;
  }
  mostrarPedido();
}

// Función para mostrar el pedido
function mostrarPedido() {
  const pedidoItemsDiv = document.getElementById("pedido-items");
  pedidoItemsDiv.innerHTML = "";

  if (Object.keys(pedido).length === 0) {
    pedidoItemsDiv.textContent = "No hay productos seleccionados.";
    document.getElementById("pedido-total").textContent = "";
    document.getElementById("btn-imprimir").style.display = "none";
    return;
  }

  const fragment = document.createDocumentFragment();
  let total = 0;

  for (const platoId in pedido) {
    const cantidad = pedido[platoId];
    const plato = buscarPlatoPorId(platoId);

    const itemDiv = document.createElement("div");
    itemDiv.className = "pedido-item";

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = plato.nombre;

    const cantidadSpan = document.createElement("span");
    cantidadSpan.textContent = cantidad + " x";

    const subtotalSpan = document.createElement("span");
    const subtotal = plato.precio * cantidad;
    subtotalSpan.textContent = "$" + subtotal.toFixed(0);

    total += subtotal;

    itemDiv.appendChild(cantidadSpan);
    itemDiv.appendChild(nombreSpan);
    itemDiv.appendChild(subtotalSpan);

    fragment.appendChild(itemDiv);
  }

  pedidoItemsDiv.appendChild(fragment);

  const totalDiv = document.getElementById("pedido-total");
  totalDiv.textContent = "Total: $" + total.toFixed(0);

  document.getElementById("btn-imprimir").style.display = "block";
}

// Buscar plato por id
function buscarPlatoPorId(id) {
  for (const categoria of menuData) {
    for (const plato of categoria.platos) {
      if (plato.id === id) return plato;
    }
  }
  return null;
}

// Función para imprimir ticket
function imprimirTicket() {
  let ventana = window.open("", "Imprimir Ticket", "width=400,height=600");
  ventana.document.write("<html><head><title>Ticket de Pedido</title>");
  ventana.document.write("<style>");
  ventana.document.write("body { font-family: Arial, sans-serif; padding: 20px; }");
  ventana.document.write("h2 { text-align: center; }");
  ventana.document.write(".item { display: flex; justify-content: space-between; margin: 10px 0; }");
  ventana.document.write(".cantidad { width: 30px; }");
  ventana.document.write(".nombre { flex-grow: 1; text-align: left; }");
  ventana.document.write(".subtotal { width: 70px; text-align: right; }");
  ventana.document.write(".total { font-weight: bold; font-size: 1.2em; margin-top: 20px; text-align: right; }");
  ventana.document.write("</style>");
  ventana.document.write("</head><body>");
  ventana.document.write("<h2>Ticket de Pedido</h2>");

  let total = 0;
  for (const platoId in pedido) {
    const cantidad = pedido[platoId];
    const plato = buscarPlatoPorId(platoId);
    const subtotal = plato.precio * cantidad;
    total += subtotal;

    ventana.document.write("<div class='item'>");
    ventana.document.write("<span class='cantidad'>" + cantidad + "x</span>");
    ventana.document.write("<span class='nombre'>" + plato.nombre + "</span>");
    ventana.document.write("<span class='subtotal'>$" + subtotal.toFixed(0) + "</span>");
    ventana.document.write("</div>");
  }

  ventana.document.write("<div class='total'>Total: $" + total.toFixed(0) + "</div>");
  ventana.document.write("</body></html>");

  ventana.document.close();
  ventana.focus();
  ventana.print();
  ventana.close();
}

// Eventos
document.getElementById("btn-imprimir").onclick = imprimirTicket;

// Inicializamos menú y pedido
mostrarMenu();
mostrarPedido();
