const express = require('express');
const routes = require('./server/routes');
const app = routes(express());
app.use(express.static( __dirname + '/client/dist/client' ));

app.listen(8000, (errs)=>errs?console.log(errs):console.log('listening on 8000'));
