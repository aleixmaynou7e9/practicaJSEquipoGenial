
/* exercici 3
const TIPUS_IVA = 21;
function crearComandes(nomProducte, preuUnitat, unitats){
    const baseImposable = preuUnitat * unitats;
    const iva = (baseImposable * TIPUS_IVA) /100;
    const preuTotal = baseImposable + iva;
    
    return {
        nomProducte,
        preuUnitat,
        unitats,
        baseImposable,
        iva,
        preuTotal
    }
};
let comanda1 = crearComandes("poma",100,7);
let comanda2 = crearComandes("pera",25,18);
let comanda3 = crearComandes("platan",50,29);
let comandes = [comanda1, comanda2, comanda3];
comandes.forEach(function(comanda,i){
    console.log(comanda);
});

exercici 4
const tbody = document.querySelector('.bodyTable');
comandes.forEach(comanda => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${comanda.nomProducte}</td>
        <td>${comanda.preuUnitat}</td>
        <td>${comanda.unitats}</td>
        <td>${comanda.baseImposable}</td>
        <td>${comanda.preuTotal}</td>
    `;
    
    tbody.appendChild(tr)
});
*/

