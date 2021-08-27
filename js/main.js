/* class Carrito{
    constructor(tipo, precio){
        this._tipo = tipo;
        this._precio = parseInt(precio);
    }
    sumaIva (){
        this._precio = this._precio * 1.21
    }
    getElements(){
        return `El tipo de <strong>producto</strong> es: ${this._tipo}, y el <strong>precio</strong> con <strong>IVA</strong> es de ${this._precio}`
    }
    get precio(){
        return this._precio
    }
    get tipo(){
        return this._tipo
    }
}

const productos = [];
let total = 0;
function agregarProductos(){
    let ingresar = prompt('¿Queres acceder al carrito de compras? si/no');
    if (ingresar.toLowerCase() == "si"){
        let preguntar = prompt("¿Deseas agregar un nuevo producto al Carrito?")
        while (preguntar.toLowerCase() !== "no"){
        var tipo = prompt('Ingrese el producto a comprar');
        var precio = prompt('Ingrese el precio del producto');
        productos.push(new Carrito(tipo, precio));
        preguntar = prompt("¿Deseas agregar un nuevo producto al Carrito?");
    }
}
else{
    alert(`Usted ingreso ${ingresar}, por lo tanto no accede al carrito`);
}
}







let miCarro = document.getElementById('carro')
miCarro.addEventListener('click', agregarProductos);

let seccion = document.getElementsByTagName('section')[0];
let miProducto = document.getElementById('misProductos')
miProducto.addEventListener('click', verProductos);

function verProductos(){
    for (const x of productos){
        let art = document.createElement('p')
        x.sumaIva()
        art.innerHTML= `
        <p>${x.getElements()}<br></p>
        <p>El precio total es de: ${total += x.precio}</p>`
        seccion.appendChild(art)
    }
}; */

let productos = [];
let total = 0;


function add(producto, precio){
    console.log(producto, precio);
    localStorage.setItem(producto, precio)
    productos.push(producto);
    total = total + precio;
    document.getElementById('checkout').innerHTML = `Pagar $${total}`
}


function pay(){
    window.alert(productos.join(", \n"));
}