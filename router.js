var express = require('express');
var router = express.Router();
// ... Importations and configurations


router
  .route('/etudiants/:idetudiant')
  .all(function(request, response, next){
    // This will be called for request with any HTTP method
    })
  .post(function(request, response, next){
  })
  .get(function(request, response, next){
    response.json(request.post);
  })
  .put(function(request, response, next){
    // ... Update the post
    response.json(request.post);
  })
  .delete(function(request, response, next){
    // ... Delete the post
    response.json({'message': 'ok'});
  }) 