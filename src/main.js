import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import from './../src/backend.js'

$(function() {
  $('#userSym').click(function() {
    let symptoms = $('#health').val();
    $('#health').val("");
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

      const getElements = function(response) {
        $('.showDoctors').text(`You may want to see these physicians in ${city}  ${response.main.doctors}%`);

  });
});
