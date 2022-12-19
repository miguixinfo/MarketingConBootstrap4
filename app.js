window.addEventListener("load" , function() {
    const formulario = document.getElementById("formulario")

    const nombre = document.getElementById("nombre");

    const apellidos = document.getElementById("apellidos");

    const email = document.getElementById("email");
    email.addEventListener("blur", e=> {
        const email = e.target;
        validaEmail(email);
    });

    const telefono = document.getElementById("telefono");
    telefono.addEventListener("blur", e=> {
        const telefono = e.target;
        validaTel(telefono);
    });


    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        evento.stopPropagation();

        let valido = true;

        if(!validaNombre(nombre)) {
            valido = false;
        }

        if(!validaApellidos(apellidos)) {
            valido = false;
        }

        if(!validaEmail(email)) {
            valido = false;
        }

        if(!validaTelefono(telefono)) {
            valido = false;
        }

        if(valido) {
            formulario.submit();
        }
    })


    function validaNombre(el) {
        n = el.value;
        if (!n) {
           el.parentNode.querySelector("p").textContent = "Debe completar el campo ";
           el.parentNode.classList.add("error");
           return false; 
        } else {
            el.parentNode.querySelector("p").textContent = "";
            el.parentNode.classList.remove("error");
            return true;
        }
   }

   function validaApellidos(el) {
    a = el.value;
    if (!a) {
       el.parentNode.querySelector("p").textContent = "Debe completar el campo ";
       el.parentNode.classList.add("error");
       return false; 
    } else {
        el.parentNode.querySelector("p").textContent = "";
        el.parentNode.classList.remove("error");
        return true;
    }
}

function validaEmail(el) {
    let e = el.value;
    if (/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/.test(e)) {
        marcaValido(el);
        return true;
    } else {
        marcaError(el, "El email no es válido");
        return false;
    }
};

function validaTelefono(el) {
    let t = el.value;
    if (/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(t)) {
        marcaValido(el);
        return true;
    } else {
        marcaError(el, "Número de teléfono no válido");
        return false;
    }
};


function marcaError(elemento, mensaje) {
    elemento.parentNode.querySelector(".error-feedback").textContent = mensaje;
    elemento.parentNode.classList.add("error");
    console.log(mensaje,elemento);
}

function marcaValido(elemento) {
    elemento.parentNode.querySelector(".error-feedback").textContent = "";
    elemento.parentNode.classList.remove("error");
}

})