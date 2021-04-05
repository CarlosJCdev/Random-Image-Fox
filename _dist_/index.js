import { registerImage } from "./lazy.js";

const maximun = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximun - minimum)) + minimum
    //Crear imagen dentro del div
const createImageNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = "320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen); //Agrego a la imagen dentro del div
    return container;
};
//Agregar imagen
const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

//Selecciono al boton
const addButton = document.querySelector("button");

//Le asigno el evento de createImageNode, para que cree los elementos.
const addImage = () => {
        const newImage = createImageNode();
        //Despues lo agrego al DOM
        mountNode.append(newImage);
        registerImage(newImage);
        // Ademas de agregarla en el dom, que se registre en el lazy loading y la este monitoreando
    }
    //Le asigno al boton el evento que al dar click llame al evento addImage
addButton.addEventListener("click", addImage);