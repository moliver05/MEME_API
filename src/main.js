import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#memeForm').submit(function(event) {
    event.preventDefault();
    // location.reload();


    const search = $('#inputSearch').val();
    $('#inputSearch').val("");


    let request = new XMLHttpRequest();
    const url = `http://version1.api.memegenerator.net//Generators_Search?q=search=${search}&pageIndex=0&pageSize=25&apiKey=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
      let userMeme = response.result;
      for(var i=0; i<userMeme.length; i++){
      let newUrl = userMeme[i].imageUrl;
      let name = userMeme[i].displayName;
      $("#results").append( "<li>" + name + "</li>" + "<img id=" + "memeForm"  + " src="+newUrl+">");
     
    }

  } 

  const addComment = $('#inputSearch').val();
    $('#inputSearch').val("");


    let request = new XMLHttpRequest();
    const url = `http://version1.api.memegenerator.net//Generators_Search?q=search=${search}&pageIndex=0&pageSize=25&apiKey=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    
    request.open("POST", url, true);
    request.send();
    const getElements = function(response) {
      let userMeme = response.result;
      for(var i=0; i<userMeme.length; i++){
      let newUrl = userMeme[i].imageUrl;
      let name = userMeme[i].displayName;
      $("#results").append( "<li>" + name + "</li>" + "<img id=" + "memeForm"  + " src="+newUrl+">");
     
    }
  }


  });
  $("#commentForm").submit(function(event){
    event.preventDefault();
    let comments = $("#comments").val();
    $("#comments").val("");
     $("#memeComments").text(comments);
  });

});