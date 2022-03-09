/*Historia de cofla7A: Despues de aprobar cofla se compra una mejor computadora para poder programar mejor y hacer todo de una forma más práctica. Pero el problema viene al necesitar una pantalla de una resolución de al menos fullHD. 
Crear un sistema que nos imprima la resolución de la pantalla, luego de eso preguntar al usuario si esta seguro de la resolucion de la misma antes de comprar.*/

let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es de ${alto}, el ancho es de ${ancho}`);

if (comprar) {
    alert("compra realizada exitosamente");
} else {
    alert("compra cancelada");
}

/*Historia de cofla 7B: Cofla llega a su casa y abre una página web, luego apreta la tecla F11. Ahora cofla puede navegar en pantalla completa pero esto le genera un problema,no puede visualizar ni la barra de marcadores, el protocolo, la URL, o alguna información que le pueda otorgar la barra de búsqueda. 
Crear un sistema que muestre los suficientes daros como para conocer el sitio web.*/

let width = window.screen.height;
let height = window.screen.width;

let href = window.location.href, pathName = window.location.pathname, hostName = window.location.hostname, protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b> <br>
            Host-Name: <b>${hostName}</b> <br>
            Path-Name: <b>${pathName}</b> <br>
            URL Completa: <b>${href}</b> <br>
            Width: <b>${width}px</b> <br>
            height: <b>${height}px</b> <br>`

document.write(html);