    function goToArticle(article){
      switch(article){
        case 0:
        location.href = "events/calici-di-stelle.html";
        break;
        case 1:
        location.href = "events/san-martino-santarcangelo.html";
        break;
        case 2:
        location.href = "events/festival-santarcangelo.html";
        break;

      }        
    }


    function downloadArticle(article){
     var doc = new jsPDF();
     //doc.textSize(12);
     doc.setFontSize(12);
     doc.text(20, 20, pageTitle.innerHTML);
     doc.text(20, 30, pageLittleDescription.innerHTML);
     //doc.text(20, 45, pageDescription.innerHTML);
     var words = pageDescription.textContent.split(" ");
     var numberWords = words.length;

     var rows = [];
     //rows[0] = "";
     var indexRow = 0;
     var count = 0;
     var worldforline = 14;

     while(count + (indexRow * worldforline) < numberWords) {
      if(count < worldforline) {
        if(count == 0){
          rows[indexRow] = words[count + (indexRow * worldforline)] + " ";
        }else{
          rows[indexRow] += words[count + (indexRow * worldforline)] + " ";
        }
        count++;
      }
      else {
        count = 0;
        indexRow++;
      }  
     }

     for(var i = 0; i < rows.length; i++){
        doc.text(20, 40 + 10 * i, rows[i]);
     }

     console.log(rows);
     doc.save(getTitle(article) + '.pdf');
    }

    function getTitle(article){
        switch (article){
            case 0:
            return "Calici di stelle"
            break;
            case 1:
            return "San Martino"
            break;
            case 2:
            return "Santarcangelo Festival 2050"
            break;
        }
    }