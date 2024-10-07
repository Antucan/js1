/*
3. 2p] Crea un document HTML amb un div amb id “taula_propietats”. Programa amb JS que es creï
una taula formada per dos columnes. En la primera columna has de mostrar els texts indicats a
continuació, i en la segona columna els valors corresponents obtinguts dinàmicament amb JS:
a. Valor máxim que pot tenir un número JS
b. Altura total de la pantalla
c. Altura interna de la finestra
d. URL de la web
*/
showTable();
window.setInterval(showTable, 1000);
function showTable() {
    let llista = document.getElementById("taula_propietats");
    let data = new Date();
    llista.innerHTML = `<table border=1px><tr><td>Valor màxim que pot tenir un número JS: </td><td>` +
        Number.MAX_VALUE + `</td></tr>
                        <tr><td>Altura total de la pantalla: </td><td>`+
        screen.height + `</td></tr>
                        <tr><td>Altura interna de la finestra: </td><td>`+
        window.innerHeight + `</td></tr>
                        <tr><td>URL de la web: </td><td>`+
        document.URL + `</td></tr>
                        </table>`;
}
