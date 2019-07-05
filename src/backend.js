export class DocSearch {

  searchGenderSymtoms(symptom,gender) {
    if (gender && symptom) {
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=wa-seattle&user_location=47%2C122&gender=${gender}&sort=rating-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`;
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
    } else if (symptom){
      return new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=wa-seattle&user_location=47%2C122&sort=rating-desc&skip=0&limit=10&user_key=${process.env.API_KEY}`;
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
}
}
}
