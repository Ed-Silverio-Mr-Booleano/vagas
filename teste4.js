var data =  require("./fakeData");
const fs = require('fs');
module.exports =  function(req, res) {
  
    var id =  req.params.id;
    let job = req.body.job;
    let name = req.body.name;


    data.map(dta =>{
       if (dta.id == id){
          dta.name = name;
          dta.job = job;
          return;
       }
    });

    fs.writeFile("users.json", JSON.stringify(data), err => {
        if (err) throw err;
        res.send({msg: "This users was updated", name, job});
    });



};