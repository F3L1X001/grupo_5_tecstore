const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea');

const expresiones = {
	marca: /^[a-zA-ZÀ-ÿ0-9\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    cod_prod: /^\d{1,14}$/, // 1 a 14 numeros.
    precio: /^\d{1,14}$/,
    descuento: /^\d{1,14}$/,
    descripcion: /^[a-zA-ZÀ-ÿ\s]{20,254}$/
    
}

const campos = {
	marca: false,
	cod_prod: false,
    precio: false,
    descuento:false,
    descripcion:false
	
}


const validarFormulario = (e) => {
     //trae el nombre del campo (input), es evento target , naem
    switch(e.target.name){
        case "marca":
			validarCampo(expresiones.marca, e.target, 'marca');
		break;
        case "cod_prod":
            validarCampo(expresiones.cod_prod, e.target, 'cod_prod');
        break;
        case "precio":
            validarCampo(expresiones.precio, e.target, 'precio');
        break;
        case "descuento":
            validarCampo(expresiones.precio, e.target, 'descuento');
        break;
        case "descripcion":
            validarCampo(expresiones.precio, e.target, 'descripcion');
        break;
       
        
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
}




inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	
     
     console.log(campos.descripcion);
	if(!campos.marca || !campos.cod_prod || !campos.precio || !campos.descuento){
		e.preventDefault();

		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');

		};
});








