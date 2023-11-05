let precioSeguro= document.getElementById("tipo_seguro")
let mostrar= document.getElementById("mostrar")

precioSeguro.addEventListener("change", (a)=>{
    mostrar.innerText=precioSeguro.value
})

