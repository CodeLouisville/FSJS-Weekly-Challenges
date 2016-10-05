var github = require('./github.js');
var usernames = ["josephmudd","codelouisville"];
usernames.forEach(function(user){
  github.getRepos(user).then(function(repolist){
    console.log(user + "\n-----------------------\n");
    repolist.forEach(function(repo){
      console.log(repo.name + "\n");
    });
  }).catch(function(error){ 
    console.log(error); 
  });
});
