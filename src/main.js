import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {doctorSearch} from './../src/backend.js'

$(document).ready(function(){
    $('.Search').submit(function(event){
      event.preventDefault();
     let symptom = $('#symptom').val();
     let gender = $('#gender').val();
     let search = new DoctorSearch;
     if (!symptom) {
       alert("Please enter your symtpoms");
       return;
     }
     $('.error').hide();
     $('.results').show();
     $('.results').text("");
     let results = search.searchBySymptom(symptom,gender);
     results.then (function(response){
       let body = JSON.parse(response);
       if (body.data.length > 0) {
         $('#docs').text(body.data.length);
         for (let i = 0; i < body.data.length; i++) {
           let patients;
           let name = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, ${body.data[i].profile.title}`;
           let phone = body.data[i].practices[0].phones[0].number;
           let address =` ${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.street2}, ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state}, ${body.data[i].practices[0].visit_address.zip}`;
           if(body.data[i].practices[0].accepts_new_patients === true) {
             patients = "Yes";
           } else {
             patients = "No";
           }
           $('.results').append(`<div class= 'doc${i}'>${name}<br>`);
           $('.results').append(`<img src="${pic}">`);
           $('.results').append(`<div class = 'bio'>Phone: ${phone},<br>Address: ${address} <br>Accepting Patients: ${patients} </div></div><hr>`);
         }
       } else {
         $('.error').show();
       }
     });
   });
 });
