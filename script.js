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
    xhr.addEventListener('readystatechange', function(){
      if(this.readyState ==1){
        options.open(this);
      } else if (this.readyState == 2){
        options.headersDone(this);
      } else if (this.readyState ==3){
        options.loading(this);
      }
      else if (this.readyState == 4) {
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
    //readyState ==1

    xhr.send(options.data);
    //readyState ==2
  },

  get: function(string, function1){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function1);
    xhr.open('GET', string, true);
    xhr.send();
    return xhr;
  },

  post: function(url, data, function1){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(){
      if (this.readyState == 4) {
          function1(this);
        }
      });
    xhr.open('POST', url, true);
    if (typeof data === 'object'){
      // var array
      var string = "";
      for (key in data){
        string+= key+ '=' + data[key] + '&';
      }
      data = string.slice(0, string.length-1);
    }
    xhr.send(data);
    return xhr;
  }

};

var xhr3 = $.post("http://reqr.es/api/users/",
                  {name: 'hello', job: 'greeter'},
                  function(xhr){
                    console.log(xhr);
                  });


// var xhr2 = $.get("http://reqr.es/api/users/",
//                   function(){console.log('logging');});


// $.ajax({
//   async: true,
//   complete: function () {
//     console.log("complete");
//   },
//   error: function (response) {
//     console.log("an error occurred");
//     console.log(response.status + ": " + response.statusText);
//     console.log(response.responseText);
//   },
//   success: function (response) {
//     console.log("your request succeeded");
//     console.log(response);
//     console.log(response.status);
//     console.log(response.responseText);
//   },
//   method: "GET",
//   url: "http://reqr.es/users/400",
//   open: function(response){
//     console.log('open method: ' + response);
//   },
//   headersDone: function(response){
//     console.log('state 2: ' + response);
//   },
//   loading: function(response){
//     console.log('loading: ' + response);
//   }
// });





