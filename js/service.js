
function downloadServices(){
  var link = document.createElement('a');
  link.href = "pdf/policlinico.pdf";
  link.download = 'Policlinico.pdf';
  link.click();
}

function downloadVolunteers(){
  var link = document.createElement('a');
  link.href = "../pdf/volontari.pdf";
  link.download = 'Volontari.pdf';
  link.click();
}
