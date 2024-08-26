const detailsElements = document.querySelectorAll('details');

detailsElements.forEach(detail => {
    detail.addEventListener('toggle', function() {
        if (this.open) {
            // Fecha todos os outros details quando um é aberto
            detailsElements.forEach(el => {
                if (el !== this && el.open) {
                    el.open = false;
                }
            });
        }
    });
});