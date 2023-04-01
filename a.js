

function cambiarColor(opcion_color) {
    if (opcion_color == 1) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFC107"; //D3D26D
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 2) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFC107"; //D3D26D
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 3) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFC107"; //D3D26D   //amarillo fuerte #FFFD00
        texto.style.color = "#FFFFFF";
    }
}

function cambiarColorAzul(opcion_color) {
    if (opcion_color == 1) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#45AAF9";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 2) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#45AAF9";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 3) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#45AAF9";
        texto.style.color = "#FFFFFF";
    }
}

function cambiarColorRojo(opcion_color) {
    if (opcion_color == 1) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#DC3545";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 2) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#DC3545";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 3) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#DC3545";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 4) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#DC3545";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 5) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#DC3545";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 6) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#DC3545";
        texto.style.color = "#FFFFFF";
    }
    if (opcion_color == 7) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#DC3545";
        texto.style.color = "#FFFFFF";
    }
}

function colorPredeterminado(opcion_color) {
    if (opcion_color == 1) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFFFFF"; //D3D26D
        texto.style.color = "#000000";
    }
    if (opcion_color == 2) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFFFFF"; //D3D26D
        texto.style.color = "#000000";
    }
    if (opcion_color == 3) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFFFFF"; //D3D26D
        texto.style.color = "#000000";
    }
    if (opcion_color == 4) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFFFFF"; //D3D26D
        texto.style.color = "#000000";
    }
    if (opcion_color == 5) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFFFFF"; //D3D26D
        texto.style.color = "#000000";
    }
    if (opcion_color == 6) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFFFFF"; //D3D26D
        texto.style.color = "#000000";
    }
    if (opcion_color == 7) {
        var bodycard = "bodycard" + opcion_color;
        var texto = document.getElementById(bodycard);
        texto.style.background = "#FFFFFF"; //D3D26D
        texto.style.color = "#000000";
    }
}




function cambiarLetraNav() {

    var nav_completo = document.getElementById("nav_completo");
    var texto_nav = document.getElementById("texto_nav");
    nav_completo.style.background = "#FFFFFF ";
    texto_nav.style.color = "#000000";

}

function letraNavPredeterminado() {

    var nav_completo = document.getElementById("nav_completo");
    var texto_nav = document.getElementById("texto_nav");
    nav_completo.style.background = "#45AAF9 ";
    texto_nav.style.color = "#FFFFFF";

}

function cambiarLetraNavNav() {

    var nav_completo = document.getElementById("nav_nav");
    var texto_nav = document.getElementById("texto_nav_nav");
    nav_completo.style.background = "#FFFFFF ";
    texto_nav.style.color = "#000000";

}

function letraNavPredeterminadoNav() {

    var nav_completo = document.getElementById("nav_nav");
    var texto_nav = document.getElementById("texto_nav_nav");
    nav_completo.style.background = "#45AAF9 ";
    texto_nav.style.color = "#FFFFFF";

}


function a(opcion_color){
    if (opcion_color == 1) {
        var border = "b" + opcion_color;
        var temporal=document.getElementById(border);
        
        temporal.classList.add("border");
        temporal.classList.add("border-1");
        temporal.classList.add("border-warning");

        var border_img=document.getElementById("border_img_1");
        border_img.classList.add("border");
        border_img.classList.add("border-1");
        border_img.classList.add("border-warning");
        border_img.classList.add("border-end-1");
        border_img.classList.add("border-bottom-0");
        border_img.classList.add("border-start-0");
        border_img.classList.add("border-top-0");
        
    }

    if (opcion_color == 2) {
        var border = "b" + opcion_color;
        var temporal=document.getElementById(border);
        
        temporal.classList.add("border");
        temporal.classList.add("border-1");
        temporal.classList.add("border-warning");

        var border_img=document.getElementById("border_img_2");
        border_img.classList.add("border");
        border_img.classList.add("border-1");
        border_img.classList.add("border-warning");
        border_img.classList.add("border-end-1");
        border_img.classList.add("border-bottom-0");
        border_img.classList.add("border-start-0");
        border_img.classList.add("border-top-0");
        
    }

    if (opcion_color == 3) {
        var border = "b" + opcion_color;
        var temporal=document.getElementById(border);
        
        temporal.classList.add("border");
        temporal.classList.add("border-1");
        temporal.classList.add("border-primary");

        var border_img=document.getElementById("border_img_3");
        border_img.classList.add("border");
        border_img.classList.add("border-1");
        border_img.classList.add("border-primary");
        border_img.classList.add("border-end-1");
        border_img.classList.add("border-bottom-0");
        border_img.classList.add("border-start-0");
        border_img.classList.add("border-top-0");
        
    }

    if (opcion_color == 4) {
        var border = "b" + opcion_color;
        var temporal=document.getElementById(border);
        
        temporal.classList.add("border");
        temporal.classList.add("border-1");
        temporal.classList.add("border-primary");

        var border_img=document.getElementById("border_img_4");
        border_img.classList.add("border");
        border_img.classList.add("border-1");
        border_img.classList.add("border-primary");
        border_img.classList.add("border-end-1");
        border_img.classList.add("border-bottom-0");
        border_img.classList.add("border-start-0");
        border_img.classList.add("border-top-0");
        
    }

    if (opcion_color == 5) {
        var border = "b" + opcion_color;
        var temporal=document.getElementById(border);
        
        temporal.classList.add("border");
        temporal.classList.add("border-1");
        temporal.classList.add("border-danger");

        var border_img=document.getElementById("border_img_5");
        border_img.classList.add("border");
        border_img.classList.add("border-1");
        border_img.classList.add("border-danger");
        border_img.classList.add("border-end-1");
        border_img.classList.add("border-bottom-0");
        border_img.classList.add("border-start-0");
        border_img.classList.add("border-top-0");
        
    }

    if (opcion_color == 6) {
        var border = "b" + opcion_color;
        var temporal=document.getElementById(border);
        
        temporal.classList.add("border");
        temporal.classList.add("border-1");
        temporal.classList.add("border-danger");

        var border_img=document.getElementById("border_img_6");
        border_img.classList.add("border");
        border_img.classList.add("border-1");
        border_img.classList.add("border-danger");
        border_img.classList.add("border-end-1");
        border_img.classList.add("border-bottom-0");
        border_img.classList.add("border-start-0");
        border_img.classList.add("border-top-0");
        
    }
}


function b(opcion_color){
    if (opcion_color == 1) {
        var borde = "b" + opcion_color;
        var temporal=document.getElementById(borde);

        temporal.classList.remove("border");
        temporal.classList.remove("border-1");
        temporal.classList.remove("border-warning");
        
        var border_img=document.getElementById("border_img_1");
        border_img.classList.remove("border");
        border_img.classList.remove("border-1");
        border_img.classList.remove("border-warning");
        border_img.classList.remove("border-end-1");
        border_img.classList.remove("border-bottom-0");
        border_img.classList.remove("border-start-0");
        border_img.classList.remove("border-top-0");
    }

    if (opcion_color == 2) {
        var borde = "b" + opcion_color;
        var temporal=document.getElementById(borde);

        temporal.classList.remove("border");
        temporal.classList.remove("border-1");
        temporal.classList.remove("border-warning");
        
        var border_img=document.getElementById("border_img_2");
        border_img.classList.remove("border");
        border_img.classList.remove("border-1");
        border_img.classList.remove("border-warning");
        border_img.classList.remove("border-end-1");
        border_img.classList.remove("border-bottom-0");
        border_img.classList.remove("border-start-0");
        border_img.classList.remove("border-top-0");
    }

    if (opcion_color == 3) {
        var borde = "b" + opcion_color;
        var temporal=document.getElementById(borde);

        temporal.classList.remove("border");
        temporal.classList.remove("border-1");
        temporal.classList.remove("border-primary");
        
        var border_img=document.getElementById("border_img_3");
        border_img.classList.remove("border");
        border_img.classList.remove("border-1");
        border_img.classList.remove("border-primary");
        border_img.classList.remove("border-end-1");
        border_img.classList.remove("border-bottom-0");
        border_img.classList.remove("border-start-0");
        border_img.classList.remove("border-top-0");
    }

    if (opcion_color == 4) {
        var borde = "b" + opcion_color;
        var temporal=document.getElementById(borde);

        temporal.classList.remove("border");
        temporal.classList.remove("border-1");
        temporal.classList.remove("border-primary");
        
        var border_img=document.getElementById("border_img_4");
        border_img.classList.remove("border");
        border_img.classList.remove("border-1");
        border_img.classList.remove("border-primary");
        border_img.classList.remove("border-end-1");
        border_img.classList.remove("border-bottom-0");
        border_img.classList.remove("border-start-0");
        border_img.classList.remove("border-top-0");
    }

    if (opcion_color == 5) {
        var borde = "b" + opcion_color;
        var temporal=document.getElementById(borde);

        temporal.classList.remove("border");
        temporal.classList.remove("border-1");
        temporal.classList.remove("border-danger");
        
        var border_img=document.getElementById("border_img_5");
        border_img.classList.remove("border");
        border_img.classList.remove("border-1");
        border_img.classList.remove("border-danger");
        border_img.classList.remove("border-end-1");
        border_img.classList.remove("border-bottom-0");
        border_img.classList.remove("border-start-0");
        border_img.classList.remove("border-top-0");
    }

    if (opcion_color == 6) {
        var borde = "b" + opcion_color;
        var temporal=document.getElementById(borde);

        temporal.classList.remove("border");
        temporal.classList.remove("border-1");
        temporal.classList.remove("border-danger");
        
        var border_img=document.getElementById("border_img_6");
        border_img.classList.remove("border");
        border_img.classList.remove("border-1");
        border_img.classList.remove("border-danger");
        border_img.classList.remove("border-end-1");
        border_img.classList.remove("border-bottom-0");
        border_img.classList.remove("border-start-0");
        border_img.classList.remove("border-top-0");
    }

}