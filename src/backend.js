export class DocSearch {

  searchBoth(symptoms, docname) {
    if (symptoms || docname) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=wa-seattle&user_location=47%2C122&sort=rating-desc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
        request.onload = function () {
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
