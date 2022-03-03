//Guardamos los nodos del formulario en una variable "formulario".
const formulario = document.querySelector("#formulario");

//Guardamos el boton de enviar, el boton de cargando y el mensaje emergente toast.
const btnSubmit = document.querySelector("#btnSubmit");
const btnLoading = document.querySelector("#btnLoading");

//Creamos un evento para la variable formulario.
formulario.addEventListener("submit", e => {
    e.preventDefault();

    //Creamos un nuevo objeto "FormData" cuyo nombre será "datos".
    const datos = new FormData(formulario);

    console.log("Email: " + datos.get("campoEmail"));
    console.log("Contraseña: " + datos.get("campoPassword"));
    console.log("Número de Telefono: " + datos.get("campoPhoneNumber"));
    console.log("Recibir Emails: " + datos.get("campoCheck1"));
    console.log("Recibir Mensajes: " + datos.get("campoCheck2"));

    displayStatus();

    formulario.reset();
});

//Hacemos una funcion que modifique la visibilidad de nuestros botones y el mensaje toast. El delay es de 2 seg.
function displayStatus () {

    btnSubmit.classList.add("d-none");
    btnLoading.classList.remove("d-none");

    window.setTimeout(()=> {
        btnSubmit.classList.remove("d-none");
        btnLoading.classList.add("d-none");

        const eventoToast = new bootstrap.Toast(msjToast);
        eventoToast.show();
    } ,2000);
}
