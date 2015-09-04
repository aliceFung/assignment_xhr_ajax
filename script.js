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
    //options = {url: ....., xhr : ...}
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(){
      console.log('added event listener');
    });
  }
};