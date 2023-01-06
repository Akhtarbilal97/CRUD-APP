const axios = require('axios');


exports.homeRoutes = (req, resp) => {
  // Make a get request to/api/users
  axios.get('http://localhost:8080/api/users')
  .then(function(response){
    resp.render('index',{users: response.data});

  })
  .catch(err =>{
    resp.send(err)
  })
  
};

exports.add_user = (req, resp) => {
  axios.post('http://localhost:8080/api/users')
  resp.render("add_user");
};
 
exports.update_user = (req, resp) => {
  resp.render("update_user");
};
