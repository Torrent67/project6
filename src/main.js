import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import from './../src/backend.js'

$(document).ready(function(){
    $('.Search').submit(function(event){
    event.preventDefault();
    $('.sucess').text(" ");
    let symptomsinput = $("#symptoms").val();


    let doctorGet = new Promise(function(resolve, reject){

      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5155%2C-122.413%2C100&user_location=45.5155%C2%B0%2C-122.6793&skip=0&limit=10&user_key=bb9526bb3e6527baac3dce23fefe3a1f`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    doctorGet.then(function(response){
      let result = JSON.parse(response);
      $(".sucess").append(`Some physicians in your area are ${doctors} <br>`);
      for (let i = 0; i < 10; i++) {
        let doc = result.message.body.city[i].doctor.doctor_name
        $('.sucess').append(`<li id="results${i}"> ${doctor} </li>`);
        if (i < 11) {

        }
      }
    }
      function(error) {
      $('.fail').text(`There was an error processing your request ${error.message}`);
    });
