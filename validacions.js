document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    const data = document.getElementById("data_naixement");
    const correu = document.getElementById("correu");
    const telefon = document.getElementById("telefon");

    const dataError = document.getElementById("data_error");
    const correuError = document.getElementById("correu_error");
    const telefonError = document.getElementById("telefon_error");

    form.addEventListener("submit", (e) => {
        let isValid = true;

        //Validacio i creació del input de la data
        const dataUsuari = new Date(data.value);
        const avui = new Date();
        const majordedat = new Date(
            avui.getFullYear() - 18,
            avui.getMonth(),
            avui.getDate()
        );

        if (data.value === "" || dataUsuari > majordedat) {
            dataError.classList.remove("hidden");
            data.classList.add("border-red-500");
            console.log("És menor d'edat");
            isValid = false;
        } else {
            console.log("És major d'edat.");
            dataError.classList.add("hidden");
            data.classList.remove("border-red-500");
        }

        //Validacio del correu
        const correuValidacio = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!correuValidacio.test(correu.value.trim())) {
            correuError.classList.remove("hidden");
            correu.classList.add("border-red-500");
            console.log("El correu no és vàlid");
            isValid = false;
        } else {
            console.log("El correu és vàlid.");
            correuError.classList.add("hidden");
            correu.classList.remove("border-red-500");
        }

        //Validacio del telefon
        if (!/^\d{9}$/.test(telefon.value.trim())) {
            telefonError.classList.remove("hidden");
            telefon.classList.add("border-red-500");
            console.log("El telèfon necessita ser de 9 digits.");
            isValid = false;
        } else {
            console.log("El telèfon és vàlid.");
            telefonError.classList.add("hidden");
            telefon.classList.remove("border-red-500");
        }

        //Prevenir l'enviament en cas d'error
        if (!isValid) {
            e.preventDefault();
        }
    });
});
