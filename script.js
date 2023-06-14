if ($("#contenido").val() == "") {
  $("#contenido").load("jerarquias/jefatura.html");
}

function jefatura() {
  $("#contenido").empty();
  $("#contenido").load("jerarquias/jefatura.html");
}

function direcciones_generales() {
  $("#contenido").empty();
  $("#contenido").load("jerarquias/direcciones_generales.html");
}

function direcciones() {
  $("#contenido").empty();
  $("#contenido").load("jerarquias/direcciones.html");
}

function departamentos() {
  $("#contenido").empty();
  $("#contenido").load("jerarquias/departamentos.html");
}

function divisiones(modal = '') {
  var modal = modal;

  if(this.modal.length > 0){
    console.log('funciona');
  }
  $("#contenido").empty();
  $("#contenido").load("jerarquias/divisiones.html");
}

function secciones() {
  $("#contenido").empty();
  $("#contenido").load("jerarquias/secciones.html");
}

function organigrama() {
  $("#contenido").empty();
  $("#contenido").load("jerarquias/secciones.html");
}