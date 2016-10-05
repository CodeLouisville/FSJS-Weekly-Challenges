const http = require('http');
var github = require('./github.js');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
  res.write('<html><body>');
  var username = req.url.replace("/","");
  github.getRepos(username).then(function(repolist){
    res.write(username + "<hr>");
    repolist.forEach(function(repo){
      res.write(repo.name + "<br>");
    });
    res.end();
  }).catch(function(error){ 
    res.end(error);
  });
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+hostname+':'+port);
});
