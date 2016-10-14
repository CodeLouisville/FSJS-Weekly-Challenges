var https = require("https");

function getRepos(username){
  return new Promise( function(resolve, reject) { 
    var options = {
      host: 'api.github.com',
      path: '/users/' + username + '/repos',
      headers:{
        'User-Agent': "josephmudd"
      }
    };
    var request = https.get(options, function(response){
      var body = "";
      if(response.statusCode == 200){
        response.on('data', function (chunk) {
          body += chunk;
        });
        response.on('end', function(){
          try{
            var repos = JSON.parse(body);
            resolve(repos);
          }catch(error){
            reject(error);
          }
        });
      }
      else{
        reject(response.statusText);
      }
    });  
  });  
}

module.exports.getRepos = getRepos;
