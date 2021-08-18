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

// function getLabExams(username, password){
//   alert("ciao");
// }

function downloadServices(){
  var link = document.createElement('a');
  link.href = "pdf/policlinico.pdf";
  link.download = 'policlinico.pdf';
  link.dispatchEvent(new MouseEvent('click'));
}


function downloadArticle(article) {
  // var doc = new jsPDF();
  // //doc.textSize(12);
  // doc.setFontSize(11);
  // var words = "";
  // var numberWords = 0;
  // var json = $.getJSON("articles/articles.json", function(json) {
  //   var title = "", description = "", text = "";
  //         title = json["Services"][article]["Title"];
  //         description  = json["Services"][article]["Description"];
  //         text = json["Services"][article]["Text"];
  //         words = json["Services"][article]["Text"].split(" ");
  //         numberWords = words.length;
  //         doc.text(20, 20, title);
  //         doc.text(20, 30, description);

  //         var rows = [];
  //         var indexRow = 0;
  //         var count = 0;
  //         var worldforline = 15;

  //         while (count + (indexRow * worldforline) < numberWords) {
  //           if (count < worldforline) {
  //             if (count == 0) {
  //               rows[indexRow] = words[count + (indexRow * worldforline)] + " ";
  //             } else {
  //               rows[indexRow] += words[count + (indexRow * worldforline)] + " ";
  //             }
  //             count++;
  //           } else {
  //             count = 0;
  //             indexRow++;
  //           }
  //         }

  //         for (var i = 0; i < rows.length; i++) {
  //           console.log(rows[i]);
  //           doc.text(20, 40 + 6 * i, rows[i]);
  //         }

  //         console.log(rows);
  //         doc.save(getTitle(article) + '.pdf');
  // });

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
