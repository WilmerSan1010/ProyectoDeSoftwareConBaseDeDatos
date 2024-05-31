document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('#development-area nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            cargarContenido(page);
        });
    });

    function cargarContenido(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.querySelector('#content-area').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching page:', error);
            });
    }
});


    const form = document.getElementById('formularioPerfil');
    const skillsSelect = document.getElementById('habilidades');
    const addSkillButton = document.getElementById('btnAddHabilidad');
    const removeSkillButton = document.getElementById('btnRemoveHabilidad'); 
    const selectedSkillsContainer = document.getElementById('listaHabilidades');
    
    let selectedSkills = [];

    addSkillButton.addEventListener('click', () => {
        const selectedSkill = skillsSelect.value;

        if (selectedSkills.length < 3 && !selectedSkills.includes(selectedSkill)) {
            selectedSkills.push(selectedSkill);
            updateSelectedSkillsDisplay();
        }
    });


    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!validarNombre() || !validarTelefono() || !validarProfesion()) {
            return; 
        }

       /* const fullName = form['nombre'].value;
        const profession = form['profesion'].value;
        const phone = form['telefono'].value;
        const email = form['correo'].value;
        const linkedin = form['linkedin'].value;
        var imagen = document.getElementById('imagen').files[0];

        const reader = new FileReader();
        reader.onload = function(e) {
            const imagenBase64 = e.target.result;
            const newWindow = window.open('', '_blank');
            newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Tarjeta de Postulación</title>
                    <style>
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            background-color: #f4f4f9;
                        }
                        .card-preview {
                            max-width: 400px;
                            width: 100%;
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            text-align: center;
                        }
                        .card-preview img {
                            max-width: 100%;
                            height: auto;
                            border-radius: 50%;
                            margin-bottom: 20px;
                        }
                        .card-preview p {
                            margin: 5px 0;
                            font-size: 1.1em;
                            color: #555;
                        }
                        .card-preview h3 {
                            margin-top: 0;
                            color: #333;
                        }
                        .card-preview .skill {
                            display: inline-block;
                            background-color: #007bff;
                            color: #fff;
                            border-radius: 5px;
                            padding: 5px 10px;
                            margin: 2px;
                        }
                        footer {
                            background-color: #333;
                            color: #fff;
                            text-align: center;
                            padding: 5px 0;
                            font-size: 0.7em;
                            position: fixed;
                            bottom: 0;
                            width: 100%;
                        }
                    </style>
                </head>
                <body>
                    <div class="card-preview">
                        <img src="${imagenBase64}" alt="Imagen">
                        <h3>${fullName}</h3>
                        <p><strong>Profesión:</strong> ${profession}</p>
                        <p><strong>Teléfono:</strong> ${phone}</p>
                        <p><strong>Correo Electrónico:</strong> ${email}</p>
                        <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
                        <p><strong>Habilidades:</strong></p>
                        <div>${selectedSkills.map(skill => `<span class="skill">${skill}</span>`).join('')}</div>
                    </div>
                    <footer>
                        <p>&copy; 2024 Desarrolladora de Software</p>
                    </footer>
                </body>
                </html>
            `);
        };
        reader.readAsDataURL(imagen);*/
        
    });

    function updateSelectedSkillsDisplay() {
        selectedSkillsContainer.innerHTML = selectedSkills.map(skill => `<span class="skill">${skill}</span>`).join('');
    }

    function validarNombre() {
        const nombreInput = document.getElementById('nombre');
        const nameError = document.getElementById('name-error');
        const nombreValido = /^[a-zA-Z\s]+$/.test(nombreInput.value);
        if (!nombreValido) {
            nombreInput.classList.add('is-invalid');
            nameError.style.display = 'block';
            return false;
        } else {
            nombreInput.classList.remove('is-invalid');
            nameError.style.display = 'none';
            return true;
        }
    }

    function validarTelefono() {
        const telefonoInput = document.getElementById('telefono');
        const phoneError = document.getElementById('phone-error');
        const telefonoValido = /^[0-9]+$/.test(telefonoInput.value);
        if (!telefonoValido) {
            telefonoInput.classList.add('is-invalid');
            phoneError.style.display = 'block';
            return false;
        } else {
            telefonoInput.classList.remove('is-invalid');
            phoneError.style.display = 'none';
            return true;
        }
    }

    function validarProfesion() {
        const profesionInput = document.getElementById('profesion');
        const professionError = document.getElementById('profession-error');
        const profesionValido = /^[a-zA-Z\s]+$/.test(profesionInput.value);
        if (!profesionValido) {
            profesionInput.classList.add('is-invalid');
            professionError.style.display = 'block';
            return false;
        } else {
            profesionInput.classList.remove('is-invalid');
            professionError.style.display = 'none';
            return true;
        }
    }
;









