function goToArticle(article) {
  switch (article) {
    case 0:
      location.href = "events/calici-di-stelle.html";
      break;
    case 1:
      location.href = "events/san-martino-santarcangelo.html";
      break;
    case 2:
      location.href = "events/festival-santarcangelo.html";
      break;
    case 3:
      location.href = "events/balconi-fioriti.html";
      break;
    case 4:
      location.href = "events/fiera-san-michele.html";
      break;
  }
}


function downloadArticle(article) {
  var doc = new jsPDF();
  //doc.textSize(12);
  doc.setFontSize(11);
  var words = "";
  var numberWords = 0;
  var json = $.getJSON("articles/articles.json", function(json) {
    var title = "", description = "", text = "";
          title = json["Articles"][article]["Title"];
          description  = json["Articles"][article]["Description"];
          text = json["Articles"][article]["Text"];
          words = json["Articles"][article]["Text"].split(" ");
          numberWords = words.length;
          doc.text(20, 20, title);
          doc.text(20, 30, description);

          var rows = [];
          var indexRow = 0;
          var count = 0;
          var worldforline = 15;

          while (count + (indexRow * worldforline) < numberWords) {
            if (count < worldforline) {
              if (count == 0) {
                rows[indexRow] = words[count + (indexRow * worldforline)] + " ";
              } else {
                rows[indexRow] += words[count + (indexRow * worldforline)] + " ";
              }
              count++;
            } else {
              count = 0;
              indexRow++;
            }
          }

          for (var i = 0; i < rows.length; i++) {
            console.log(rows[i]);
            doc.text(20, 40 + 6 * i, rows[i]);
          }

          console.log(rows);
          doc.save(getTitle(article) + '.pdf');
  });
  
}

function getTitle(article) {
  switch (article) {
    case 0:
      return "Calici di stelle"
      break;
    case 1:
      return "San Martino"
      break;
    case 2:
      return "Santarcangelo Festival 2050"
      break;
    case 3:
      return "Balconi Fioriti"
      break;
    case 4:
      return "Fiera di San Michele"
      break;
  }
}
