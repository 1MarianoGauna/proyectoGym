const myProductos = [];
const myProductosTotal = [];
class Producto {
    constructor(id, tipo, precio, image) {
        this.id = parseInt(id);
        this._tipo = tipo;
        this._precio = parseInt(precio);
        this._image = image;
    }
    get tipo() {
        return this._tipo
    }
    get precio() {
        return this._precio
    }
    createCard() {
        const nuevoArticle = document.createElement('article');
        nuevoArticle.setAttribute("class", "miSection__article");
        nuevoArticle.innerHTML = `<img src='${this._image}'/>
        <h3 class="precio" id="precio">${this._precio}</h3>
        <b class="tipo">${this._tipo}</b>
        <button id="${this.id}" class="myButton">Agregar</button>`;
        return nuevoArticle
    }
    addCart() {
        document.getElementById(`${this.id}`).addEventListener("click", (tipo, precio) => {
            myProductosTotal.push(this._precio)
            let total = myProductosTotal.reduce((a, b) => a + b, 0);
            myProductos.push(new Producto(this.id, this._tipo, this._precio));
            localStorage.setItem("miProductos", JSON.stringify(myProductos))
            localStorage.setItem('precioTotal', total)
            $('#checkout').html(`${total}`);
            $('#bodyModalChildren2').html(`${total}`)
        });
    }
}

const productos = [
    new Producto("1", "mancuerna simple", "3000", "../img/imagen1.jpg"),
    new Producto("2", "pesa doble", "5000", "../img/imagen2.jpg"),
    new Producto("3", "Pesa Rusa", "6000", "../img/imagen3.jpg"),
    new Producto("4", "Pesa para Armar", "2000", "../img/imagen4.jpg"),
    new Producto("5", "Gimnasio Multifuncion", "4500", "../img/imagen5.jpg"),
    new Producto("6", "Caminadora", "6500", "../img/imagen6.jpg"),
    new Producto("7", "Banco multifuncion", "9000", "../img/imagen7.jpg"),
    new Producto("8", "Banco abdominales", "13000", "../img/imagen9.jpg")
];
const miSection = document.getElementById('miSection');
for (let i = 0; i < productos.length; i++) {
    const newCarrito = productos[i];
    miSection.appendChild(newCarrito.createCard());
    newCarrito.addCart()
};
$(document).ready(() => {
    for (let i = 0; i < localStorage.length; i++) {
        $('#checkout').html(`${localStorage.getItem('precioTotal')}`)
        $('#bodyModalChildren2').html(`${localStorage.getItem('precioTotal')}`)
    }
});
$('#checkout').click(()=> {
    const almacenados = JSON.parse(localStorage.getItem("miProductos"));
    const productos = [];
    for(const objeto of almacenados){
        productos.push(new Producto(objeto.id, objeto._tipo, objeto._precio))
    }
    $('#bodyModalChildren').children().remove();
    if($('#bodyModalChildren').children().length<1){
        for(const object of productos){
            $('#bodyModalChildren').append(`<p>${object.tipo}</p>`)
    }
    }
})
$('#submit').click(() => {
    localStorage.clear()
})

$('#buttonBorrar').click(()=>{
    myProductos.splice(0, myProductos.length)
    myProductosTotal.splice(0, myProductosTotal.length)
    localStorage.clear()
    $('#bodyModalChildren').children().remove();
    ($('#checkout').html(`${localStorage.getItem('precioTotal')}`).children().lenght)
    $('#bodyModalChildren2').html(`${localStorage.getItem('precioTotal')}`).children().remove()
    $('#bodyModalChildren2').html(`${0}`)
    $('#checkout').html(`0`)
})
