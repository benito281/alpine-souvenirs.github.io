let carrito = 0;
document.querySelector("#carrito").addEventListener("click",(e) =>{
    e.preventDefault();
    document.querySelector("#cantidad").innerHTML = carrito++;
    console.log(carrito)
})