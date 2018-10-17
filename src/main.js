import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Fighter } from './../src/ufc.js';

$(document).ready(function() {
  let newFighter = new Fighter;
  let listPromise = newFighter.searchFighterName(newFighter);
   listPromise.then(function (response) {
     let body = JSON.parse(response);
     for (let i = 0; i < body.fighters.length; i++) {
       $("#nameResult").append(`<li>${body.fighters[i]}</li>`);
     }
   });


   $("#fighterForm").submit(function (event) {
     event.preventDefault();
     let searchFighter = $("#firstName").val();
     let promise = newFighter.searchFighterName(searchFighter);
     let list;

  //    promise.then(function (response) {
  //      let body = JSON.parse(response);
  //      list = body.fighters;
  //      let  = "";
  //      for (let i = 1; i < 0; i++) {
  //     $("#nameResult").append(`<li>${body.fighters[i]}</li>`);
   //
  //    });
  //  });


 });
});
