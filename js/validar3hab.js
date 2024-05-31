document.addEventListener('DOMContentLoaded', function() {
    const habilidadesSelect = document.getElementById('habilidades');
    const listaHabilidades = document.getElementById('listaHabilidades');
    const btnAddHabilidad = document.getElementById('btnAddHabilidad');
    const btnRemoveHabilidad = document.getElementById('btnRemoveHabilidad');
    let habilidadesSeleccionadas = [];

    btnAddHabilidad.addEventListener('click', function() {
        const seleccionadas = Array.from(habilidadesSelect.selectedOptions).map(option => option.value);

        seleccionadas.forEach(habilidad => {
            if (habilidadesSeleccionadas.length < 3 && !habilidadesSeleccionadas.includes(habilidad)) {
                habilidadesSeleccionadas.push(habilidad);
                habilidadesSelect.querySelector(`[value="${habilidad}"]`).disabled = true;
            }
        });

        mostrarHabilidades();
    });

    btnRemoveHabilidad.addEventListener('click', function() {
        const seleccionadas = Array.from(habilidadesSelect.selectedOptions).map(option => option.value);

        seleccionadas.forEach(habilidad => {
            const index = habilidadesSeleccionadas.indexOf(habilidad);
            if (index !== -1) {
                habilidadesSeleccionadas.splice(index, 1);
                habilidadesSelect.querySelector(`[value="${habilidad}"]`).disabled = false;
            }
        });

        mostrarHabilidades();
    });

    function mostrarHabilidades() {
        listaHabilidades.innerHTML = ''; 
    
        habilidadesSeleccionadas.forEach(habilidad => {
            const badge = document.createElement('span');
            badge.classList.add('badge', 'badge-primary', 'mr-2');
            badge.textContent = habilidad;
            listaHabilidades.appendChild(badge);
        });
    }
    

    document.getElementById('formularioPerfil').addEventListener('submit', function(event) {
        if (habilidadesSeleccionadas.length !== 3) {
            alert('Debe seleccionar exactamente 3 habilidades');
            event.preventDefault(); // Evitar que el formulario se envíe si no se cumplen las condiciones
        }
    });
});


