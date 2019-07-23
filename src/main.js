import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DocSearch } from './backend.js';


$(document).ready(function () {
  $('.mainP').submit(function (event) {
    event.preventDefault();
    let symptoms = $('#symptoms').val();
    let docname = $('#docname').val();
    let search = new DocSearch;



    let results = search.searchBoth(symptoms, docname);
    results.then(function (response) {
      let body = JSON.parse(response);
      if (body.data.length > 0) {
        $('#showResults').text(body.data.length);
        for (let i = 0; i < body.data.length; i++) {

          let newPatients = "";
          let name = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, ${body.data[i].profile.title}`;
          let phone = body.data[i].practices[0].phones[0].number;
          let address = ` ${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.street2}, ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state}, ${body.data[i].practices[0].visit_address.zip}`;
          if (body.data[i].practices[0].accepts_new_patients === true) {
            newPatients = "Yes";
          } else {
            newPatients = "No";
          }


          $('#showResults').append(`<div class= 'doc${i}'>${name}<br>`);
          $('#showResults').append(`<div class = 'bio'>Phone: ${phone},<br>Address: ${address} <br>Accepting Patients: ${newPatients} </div></div><hr>`);


        }
      }
    }, function (error) {

      $('.error').append(`There was an error processing your request: ${error.message}`);

    });
  });
});
