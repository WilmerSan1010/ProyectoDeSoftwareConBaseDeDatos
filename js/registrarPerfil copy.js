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
            return;
        }

        // Recolectar datos del formulario
        const nombre = document.getElementById('nombre').value;
        const imagen = document.getElementById('imagen').value;
        const profesion = document.getElementById('profesion').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const linkedin = document.getElementById('linkedin').value;

        const data = {
            nombre: nombre,
            imagen: imagen,
            profesion: profesion,
            telefono: telefono,
            correo: correo,
            linkedin: linkedin,
            habilidad1: habilidadesSeleccionadas[0] || '',
            habilidad2: habilidadesSeleccionadas[1] || '',
            habilidad3: habilidadesSeleccionadas[2] || ''
        };

        fetch('http://localhost:5000/registrarPerfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert(data);
            console.log('Success:', data);
        })
        .catch((error) => {
            alert('Hubo un error al registrar el perfil');
            console.error('Error:', error);
        });
    });
});

