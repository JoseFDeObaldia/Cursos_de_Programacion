console.log("holaaaaaaa");

const customRange = document.getElementById("customRange");
const price = document.getElementById("price");
const visits = document.getElementById("visits");
const arrayVisitas = ["10K", "50K", "100K", "500K", "1M"];

customRange.addEventListener("input", ()=> {

    console.log(customRange.value);
    price.textContent = customRange.value;

    visits.textContent = arrayVisitas[(customRange.value / 8 - 1)];
});
