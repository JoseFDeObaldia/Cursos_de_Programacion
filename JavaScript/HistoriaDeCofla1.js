//Problema 1 y 2: Selector de helados y calculo de vuelto para cofla.
let dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?: ");
let dineroPedro = prompt("¿Cuanto dinero tienes Pedro?: ");
let dineroCofla = prompt("¿Cuanto dinero tienes Cofla?: ");

alert("Roberto: ")
if (dineroRoberto < 0.6) {
    alert("Lo siento, no puedes comprar nada");
} else if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("compra el helado de agua");
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("compra el helado de crema");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("compra el helado de la marca Heladix");
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("compra el helado de la marca Heladovich");
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("compra el helado de la marca Helardo");
} else if (dineroRoberto >= 2.9) {
    alert("compra el helado con confites o el pote de 1/4 kg");
}

alert("Pedro: ")
if (dineroPedro < 0.6) {
    alert("Lo siento, no puedes comprar nada");
} else if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("compra el helado de agua");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("compra el helado de crema");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("compra el helado de la marca Heladix");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("compra el helado de la marca Heladovich");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("compra el helado de la marca Helardo");
} else if (dineroPedro >= 2.9) {
    alert("compra el helado con confites o el pote de 1/4 kg");
}

alert("Cofla: ");
if (dineroCofla < 0.6) {
    alert("Lo siento, no puedes comprar nada");
} else if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("compra el helado de agua, y te sobran: " + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("compra el helado de crema, y te sobran: " + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("compra el helado de la marca Heladix, y te sobran: " + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("compra el helado de la marca Heladovich, y te sobran: " + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("compra el helado de la marca Helardo, y te sobran: " + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
    alert("compra el helado con confites o el pote de 1/4 kg, y te sobran: " + (dineroCofla - 2.9));
}