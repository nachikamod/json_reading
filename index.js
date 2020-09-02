var request;

function thisFunc() {
    request = new XMLHttpRequest();
    request.onreadystatechange = reportStatus;
    request.open("GET", "file.json", true);
    request.send();
}

function reportStatus() {
    if (request.readyState == 4) {		
      var jsonData = JSON.parse(this.responseText);

      
      for (let i = 0; i < Object.keys(jsonData).length; i++) {
          var key = Object.keys(jsonData)[i];
          //console.log(jsonData[key].name);
          document.getElementById("names").innerHTML += `<p>${jsonData[key].name}</p>`;
      }

      //or else you can iterate easily using this method too
      Object.keys(jsonData).forEach(keys => {
        console.log(keys);
      });
    }
}