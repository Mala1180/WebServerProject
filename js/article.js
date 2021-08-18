function goToArticle(article) {
  switch (article) {
    case 0:
      location.href = "services/esami-laboratorio.html";
      break;
    case 1:
      location.href = "services/referti.html";
      break;
    case 2:
      location.href = "services/cartella-clinica.html";
      break;
    case 3:
      location.href = "services/ricovero.html";
      break;
    case 4:
      location.href = "services/volontariato.html";
      break;
  }
}

function downloadServices(){
  var link = document.createElement('a');
  link.href = "pdf/policlinico.pdf";
  link.download = 'Policlinico.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}

function downloadVolunteers(){
  var link = document.createElement('a');
  link.href = "../pdf/volontari.pdf";
  link.download = 'Volontari.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}

function getTitle(article) {
  switch (article) {
    case 0:
      return "Esami di Laboratorio"
      break;
    case 1:
      return "Referti"
      break;
    case 2:
      return "Cartella Clinica"
      break;
    case 3:
      return "Ricovero e Orari"
      break;
    case 4:
      return "I nostri Volontari"
      break;
  }
}
