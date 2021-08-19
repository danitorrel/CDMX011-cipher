import cipher from './cipher.js';

document.getElementById("encrypt").addEventListener("click", () => {
        let text = document.getElementById("input").value;
        let shift = document.getElementById("offset").value;
        let result = cipher.encode(shift, text);
        document.getElementById("output").value = result;
});

document.getElementById("decrypt").addEventListener("click", () => {
        let text = document.getElementById("input").value;
        let shift = document.getElementById("offset").value;
        let result = cipher.decode(shift, text);
        document.getElementById("output").value = result;
});

const boton3 = document.getElementById("btn3")
        boton3.addEventListener("click", () => {
        document.getElementById("input").value = "";
        document.getElementById("output").value = "";
});

console.log(cipher);
