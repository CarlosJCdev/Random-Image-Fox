const isIntersection = (entry) => {
    return entry.isIntersecting; //Si es true es por que esta dentro del viewport
}
const accion = (entry) => { //El entry es un argumento del IntersectionObserver
    const nodo = entry.target //De esta manera definimos el nodo especifico que se esta evaluando
    console.log("hola");
    observer.unobserve(nodo); //Cuando ya se ha visto la imagen debe dejar de observar el nodo actual
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersection) //Filtramos solo las imagenes que estan intersectadas en el wiewport
        .forEach(accion) //Iteramos en los elementos 
})

//Esta funcion estara escuchando a la creacion de las imagenes 
export const registerImage = (imagen) => {
    observer.observe(imagen);
}