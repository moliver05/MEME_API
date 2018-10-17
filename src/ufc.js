var Promise = require('es6-promise').Promise;

export class Fighter {
  searchFighterName(firstName) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://ufc-data-api.ufc.com/api/v1/us/fighters=${firstName}`;

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

  searchFighterDivision(division) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = ``

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
