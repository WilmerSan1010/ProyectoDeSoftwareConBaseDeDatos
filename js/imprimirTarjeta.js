window.onload = function () {
    var formulario = document.getElementById("formularioPerfil");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var profesion = document.getElementById("profesion").value;
        var telefono = document.getElementById("telefono").value;
        var correo = document.getElementById("correo").value;
        var linkedin = document.getElementById("linkedin").value;
        var habilidadesSelect = document.getElementById('habilidades');
        var habilidadesSeleccionadas = [];

        for (var i = 0; i < habilidadesSelect.options.length; i++) {
            var option = habilidadesSelect.options[i];
            if (option.selected) {
                habilidadesSeleccionadas.push(option.value);
            }
        }


        if (habilidadesSeleccionadas.length > 3) {
            habilidadesSeleccionadas = habilidadesSeleccionadas.slice(0, 3);
        }

        var foto = document.getElementById('foto').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            var base64Image = reader.result;

            var contenidoHTML = `
                <!DOCTYPE html>
                <html lang='es'>
                <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <title>Datos de Postulación</title>
                    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'>
                    <style>
                        body { 
                            background-color: #f8f9fa; 
                            font-family: 'Arial', sans-serif; 
                        }
                        .card { 
                            margin: 20px auto; 
                            border-radius: 15px; 
                            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); 
                            max-width: 800px;
                            border: none;
                        }
                        .card-img-top { 
                            border-top-left-radius: 15px; 
                            border-top-right-radius: 15px; 
                            width: 100%; 
                            height: 400px; 
                            object-fit: cover; 
                        }
                        .card-body { 
                            padding: 30px; 
                            background-color: #ffffff; 
                        }
                        .card-title { 
                            font-size: 32px; 
                            font-weight: bold; 
                            color: #333333; 
                            margin-bottom: 20px;
                        }
                        .card-text { 
                            color: #555555; 
                            margin-bottom: 15px; 
                            font-size: 18px;
                        }
                        .badge { 
                            background-color: #007bff; 
                            color: #fff; 
                            margin-right: 5px; 
                            padding: 5px 10px; 
                            font-size: 16px; 
                            border-radius: 5px;
                        }
                        .card-text strong {
                            color: #333333;
                        }
                        a {
                            color: #007bff;
                            text-decoration: none;
                        }
                        a:hover {
                            text-decoration: underline;
                        }
                    </style>
                </head>
                <body>
                    <div class='container'>
                        <div class='card'>
                            <img class='card-img-top' src='${base64Image}' alt='Card image cap'>
                            <div class='card-body'>
                                <h5 class='card-title'>${nombre}</h5>
                                <p class='card-text'><strong>Profesión:</strong> ${profesion}</p>
                                <p class='card-text'><strong>Teléfono:</strong> ${telefono}</p>
                                <p class='card-text'><strong>Correo electrónico:</strong> ${correo}</p>
                                <p class='card-text'><strong>Perfil de LinkedIn:</strong> <a href='${linkedin}' target='_blank'>${linkedin}</a></p>
                                <p class='card-text'><strong>Habilidades:</strong> ${habilidadesSeleccionadas.map(habilidad => `<span class='badge'>${habilidad}</span>`).join(' ')}</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;

            var nuevaVentana = window.open("", "Datos de Postulación", "width=800,height=800");
            nuevaVentana.document.write(contenidoHTML);
            nuevaVentana.document.close();
        };

        if (foto) {
            reader.readAsDataURL(foto);
        } else {
            alert("Por favor, seleccione una foto.");
        }
    });
};







