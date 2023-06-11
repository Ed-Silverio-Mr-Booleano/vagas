const { acceptsEncoding } = require("express/lib/request");
var data =  require("./fakeData");
var teste1 = require("./teste1");
let access = teste1.times;

module.exports = function(req, res){
    
    var id = req.params.id;
    let name;
    let accessed = 0;

    data.map(dta =>{
        if (dta.id == id){
           
           name = dta.name;
           return;
        }
     });

     for( i= 0; i < access.length; i++){
        if (access[i] == id) accessed++; // guardei o id do user em cada vez que ele for chamado.
     }

    res.send({name, times: accessed});

};