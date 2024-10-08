document.addEventListener("DOMContentLoaded", function () {
    const flavorInput = document.getElementById("flavor-input");
    const addFlavorButton = document.getElementById("add-flavor-button");
    const flavorList = document.getElementById("flavor-list");

    addFlavorButton.addEventListener("click", function () {
        const flavor = flavorInput.value.trim(); // Obtener el sabor ingresado y eliminar espacios en blanco

        if (flavor) {
            const listItem = document.createElement("li");
            listItem.textContent = flavor;
            flavorList.appendChild(listItem);
            flavorInput.value = ""; // Limpiar el campo de entrada
        }
    });
});
