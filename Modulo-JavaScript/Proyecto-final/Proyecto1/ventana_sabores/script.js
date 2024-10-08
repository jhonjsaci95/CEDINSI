document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("open-modal-button");
    const closeModalButton = document.getElementById("close-modal-button");
    const itemModal = document.getElementById("item-modal");
    const itemSelect = document.getElementById("item-select");
    const addItemButton = document.getElementById("add-item-button");
    const itemList = document.getElementById("item-list");

    openModalButton.addEventListener("click", function () {
        itemModal.style.display = "block"; // Mostrar el modal al hacer clic en el botón "Abrir Ventana Emergente"
    });

    closeModalButton.addEventListener("click", function () {
        itemModal.style.display = "none"; // Cerrar el modal al hacer clic en la "x"
    });

    addItemButton.addEventListener("click", function () {
        const selectedOption = itemSelect.options[itemSelect.selectedIndex].value;
        const listItem = document.createElement("li");
        listItem.textContent = selectedOption;
        itemList.appendChild(listItem);
        itemModal.style.display = "none"; // Cerrar el modal después de agregar el elemento
    });
});
