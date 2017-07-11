const express = require('express');
const lorem = require('lorem-ipsum');
const mustache = require('mustache-express');
let application = express();

application.use('/public', express.static('/public'));

application.engine('mustache', mustache());

application.set('views', './public/views');
application.set('view engine', 'mustache');

application.get('/lorem', (request, response) => {
  var renderModel = {
    ipsums: []
  }

  function threeParagraphs() {
    renderModel.ipsums.push(lorem());
    renderModel.ipsums.push(lorem());
    renderModel.ipsums.push(lorem());
  }

  threeParagraphs();

  console.log(renderModel);
  response.render('index', renderModel);

})

application.listen(3000);