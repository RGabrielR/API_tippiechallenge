const express= require('express');
const app= express();
const employeesData= require('./data');
const port = process.env.PORT || 3001;
const cors= require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Credentials", true);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
res.header("Cache-Control", "no-cache, no-store, must-revalidate");
next();
});
app.get('/', (req, res) => {
    res.json(employeesData).catch(error =>{
      res.json(error)
})
});
app.listen(port);