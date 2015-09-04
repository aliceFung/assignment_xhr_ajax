// // testing
// // Get a list of users in JSON form
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( 'response txt: ' +this.responseText );
//             // after status 4
//   console.error( 'error: ' + this.status );
// });
// xhr.open("GET", "http://reqr.es/api/users/1000", true);
// xhr.send();


// // Create a user
// var xhr2 = new XMLHttpRequest();
// xhr2.addEventListener( "load", function(){
//     console.log( 'xhr2: ' + this.responseText )
// });
// xhr2.open("POST", "http://reqr.es/api/users", true);
// xhr2.send("name=crazy&job=request");

var $ = {
  ajax: function(options){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(){
      if (this.readyState == 4) {
        if (this.status >= 200 && this.status < 300) {
          options.success(this);
        } else {
          options.error(this);
        };
        options.complete();
      }
    });
    xhr.open(options.method, options.url, options.async);
    if (options.headers) {
      for (key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
      };
    };
    xhr.send(options.data);
  }
};

$.ajax({
  async: true,
  complete: function () {
    console.log("complete");
  },
  error: function (response) {
    console.log("an error occurred");
    console.log(response.status + ": " + response.statusText);
    console.log(response.responseText);
  },
  success: function (response) {
    console.log("your request succeeded");
    console.log(response)
    console.log(response.status)
    console.log(response.responseText)
  },
  method: "GET",
  url: "http://reqr.es/users/400"
})