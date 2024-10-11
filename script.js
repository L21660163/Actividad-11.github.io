// Abre el modal y muestra la imagen seleccionada
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src; // Esta línea debe establecer la fuente de la imagen del modal
    captionText.innerHTML = img.alt; // Asigna el texto alternativo como título
}

// Cierra el modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta el modal al cerrarlo
}
